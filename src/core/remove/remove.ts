// @ts-ignore
import fs from "node:fs";
// @ts-ignore
import assert from "node:assert";
import { join } from "node:path";

const IS_WINDOWS = process.platform === "win32";

/**
 * @param {object} options
 */
function defaults(options: any) {
	const methods = ["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"];
	methods.forEach((method) => {
		options[method] = options[method] || fs[method];
	});
	options.maxBusyTries = options.maxBusyTries || 3;
}

/**
 * @param {string | Buffer | URL} pathLike
 * @param {Function|object=} options
 * @param {Function=} callback
 */
function rimraf(
	pathLike: string | Buffer | URL,
	options: any,
	callback: (error: NodeJS.ErrnoException | null) => void,
): void {
	let busyTries = 0;
	let localCallback = callback;
	let localOptions = options;
	if (typeof localOptions === "function") {
		localCallback = localOptions;
		localOptions = {};
	}
	assert(pathLike, "remove(): missing path");
	// assert.strictEqual(typeof pathLike, "string", "remove(): path should be a string");
	// assert.strictEqual(typeof localCallback, "function", "remove(): callback function required");
	assert(localOptions, "remove(): invalid options argument provided");
	// assert.strictEqual(typeof localOptions, "object", "remove(): options should be an object?");
	defaults(localOptions);
	rimraf_(pathLike as string, localOptions, function callbackRimraf(error: NodeJS.ErrnoException | null) {
		if (error) {
			if (
				(error.code === "EBUSY" || error.code === "ENOTEMPTY" || error.code === "EPERM") &&
				busyTries < localOptions.maxBusyTries
			) {
				busyTries++;
				const time = busyTries * 100;
				setTimeout(() => rimraf_(pathLike as string, localOptions, callbackRimraf), time);
				return;
			}
			if (error.code === "ENOENT") {
				localCallback(null);
				return;
			}
		}
		localCallback(error);
	});
}

/**
 * @param {string} pathLike
 * @param {Function|object=} options
 * @param {Function=} callback
 */
function rimraf_(pathLike: string, options: any, callback: (error: NodeJS.ErrnoException | null) => void): void {
	assert(pathLike);
	assert(options);
	assert(typeof callback === "function");
	options.lstat(pathLike, (error: NodeJS.ErrnoException | null, stats: fs.Stats | fs.BigIntStats | undefined) => {
		if (error && error.code === "ENOENT") {
			return callback(null);
		}
		if (error && error.code === "EPERM" && IS_WINDOWS) {
			return fixWinEPERM(pathLike, options, error, callback);
		}
		if (stats && stats.isDirectory()) {
			return rmdir(pathLike, options, error as NodeJS.ErrnoException, callback);
		}
		options.unlink(pathLike, (error: NodeJS.ErrnoException | null): void | any => {
			if (error) {
				if (error.code === "ENOENT") {
					return callback(null);
				}
				if (error.code === "EPERM") {
					if (IS_WINDOWS) {
						return fixWinEPERM(pathLike, options, error, callback);
					} else {
						return rmdir(pathLike, options, error, callback);
					}
				}
				if (error.code === "EISDIR") {
					return rmdir(pathLike, options, error, callback);
				}
			}
			return callback(error);
		});
	});
}

/**
 * @param {string} pathLike
 * @param {Function|object=} options
 * @param {Error|null} error
 * @param {Function=} callback
 * @returns {null}
 */
function fixWinEPERM(
	pathLike: string,
	options: any,
	error: NodeJS.ErrnoException | null,
	callback: (error: NodeJS.ErrnoException | null) => void,
): null {
	assert(pathLike);
	assert(options);
	assert(typeof callback === "function");
	if (error) {
		assert(error instanceof Error);
	}
	options.chmod(pathLike, 0o666, (errorChMod: NodeJS.ErrnoException | null): void => {
		if (errorChMod) {
			if (errorChMod.code === "ENOENT") {
				callback(null);
			} else {
				callback(error);
			}
		} else {
			options.stat(
				pathLike,
				(errorStat: NodeJS.ErrnoException | null, stats: fs.Stats | fs.BigIntStats | undefined) => {
					if (errorStat) {
						if (errorStat.code === "ENOENT") {
							callback(null);
						} else {
							callback(error);
						}
					} else if (stats.isDirectory()) {
						rmdir(pathLike, options, error as NodeJS.ErrnoException, callback);
					} else {
						options.unlink(pathLike, callback);
					}
				},
			);
		}
	});
	return null;
}

/**
 * @param {string} pathLike
 * @param {Function|object=} options
 * @param {Error|null} originalError
 * @param {Function=} callback
 * @returns {null}
 */
function rmdir(
	pathLike: string,
	options: any,
	originalError: NodeJS.ErrnoException,
	callback: (error: NodeJS.ErrnoException | null) => void,
) {
	assert(pathLike);
	assert(options);
	if (originalError) {
		assert(originalError instanceof Error);
	}
	assert(typeof callback === "function");
	options.rmdir(pathLike, (error: NodeJS.ErrnoException): void => {
		if (error && (error.code === "ENOTEMPTY" || error.code === "EEXIST" || error.code === "EPERM")) {
			removeSubPath(pathLike, options, callback);
		} else if (error && error.code === "ENOTDIR") {
			callback(originalError);
		} else {
			callback(error);
		}
	});
	return null;
}

/**
 * @param {string} pathLike
 * @param {Function|object=} options
 * @param {Function=} callback
 */
function removeSubPath(pathLike: string, options: any, callback: (error: NodeJS.ErrnoException | null) => void): void {
	assert(pathLike);
	assert(options);
	assert(typeof callback === "function");
	options.readdir(pathLike, (error: Error | null, files: string[] | Buffer[] | fs.Dirent[]) => {
		if (error) {
			return callback(error);
		}
		let count = files.length;
		let errState: Error | null = null;
		if (count === 0) {
			return options.rmdir(pathLike, callback);
		}
		files.forEach((filePath: string): void => {
			rimraf(join(pathLike, filePath), options, (error): void => {
				if (errState) {
					return;
				}
				if (error) {
					callback((errState = error));
					return;
				}
				--count;
				if (count === 0) {
					options.rmdir(pathLike, callback);
				}
			});
		});
	});
}

/**
 * @name remove
 * @description Removes a file or directory.
 * @since 0.1.1
 * @async
 * @param {string | Buffer | URL} pathLike
 * @returns {Promise<boolean|Error>}
 */
export async function remove(pathLike: string | Buffer | URL): Promise<boolean | Error> {
	return new Promise((resolve) => {
		rimraf(pathLike, {}, (error: unknown) => {
			if (error) {
				resolve(error as Error);
			} else {
				resolve(true);
			}
		});
	});
}
