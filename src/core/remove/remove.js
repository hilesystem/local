import * as fs from "fs";
import assert from "assert";
import path from "path";

const IS_WINDOWS = process.platform === "win32";

function defaults(options) {
  const methods = ["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"];
  methods.forEach((method) => {
    options[method] = options[method] || fs[method];
  });
  options.maxBusyTries = options.maxBusyTries || 3;
}

function rimraf(pathLike, options, callback) {
  let busyTries = 0;
  if (typeof options === "function") {
    callback = options;
    options = {};
  }
  assert(pathLike, "remove(): missing path");
  assert.strictEqual(typeof pathLike, "string", "remove(): path should be a string");
  assert.strictEqual(typeof callback, "function", "remove(): callback function required");
  assert(options, "remove(): invalid options argument provided");
  assert.strictEqual(typeof options, "object", "remove(): options should be object");
  defaults(options);
  rimraf_(pathLike, options, function callbackRimraf(error) {
    if (error) {
      if (
        (error.code === "EBUSY" || error.code === "ENOTEMPTY" || error.code === "EPERM") &&
        busyTries < options.maxBusyTries
      ) {
        busyTries++;
        const time = busyTries * 100;
        return setTimeout(() => rimraf_(pathLike, options, callbackRimraf), time);
      }
      if (error.code === "ENOENT") {
        error = null;
      }
    }
    callback(error);
  });
}

function rimraf_(pathLike, options, callback) {
  assert(pathLike);
  assert(options);
  assert(typeof callback === "function");
  options.lstat(pathLike, (error, stats) => {
    if (error && error.code === "ENOENT") {
      return callback(null);
    }
    if (error && error.code === "EPERM" && IS_WINDOWS) {
      return fixWinEPERM(pathLike, options, error, callback);
    }
    if (stats && stats.isDirectory()) {
      return rmdir(pathLike, options, error, callback);
    }
    options.unlink(pathLike, (error) => {
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

function fixWinEPERM(pathLike, options, error, callback) {
  assert(pathLike);
  assert(options);
  assert(typeof callback === "function");
  if (error) {
    assert(error instanceof Error);
  }
  options.chmod(pathLike, 0o666, (errorChMod) => {
    if (errorChMod) {
      callback(errorChMod.code === "ENOENT" ? null : error);
    } else {
      options.stat(pathLike, (errorStat, stats) => {
        if (errorStat) {
          callback(errorStat.code === "ENOENT" ? null : error);
        } else if (stats.isDirectory()) {
          rmdir(pathLike, options, error, callback);
        } else {
          options.unlink(pathLike, callback);
        }
      });
    }
  });
}

function rmdir(pathLike, options, originalError, callback) {
  assert(pathLike);
  assert(options);
  if (originalError) {
    assert(originalError instanceof Error);
  }
  assert(typeof callback === "function");
  options.rmdir(pathLike, (error) => {
    if (error && (error.code === "ENOTEMPTY" || error.code === "EEXIST" || error.code === "EPERM")) {
      removeSubPath(pathLike, options, callback);
    } else if (error && error.code === "ENOTDIR") {
      callback(originalError);
    } else {
      callback(error);
    }
  });
}

function removeSubPath(pathLike, options, callback) {
  assert(pathLike);
  assert(options);
  assert(typeof callback === "function");
  options.readdir(pathLike, (error, files) => {
    if (error) {
      return callback(error);
    }
    let count = files.length;
    let errState;
    if (count === 0) {
      return options.rmdir(pathLike, callback);
    }
    files.forEach((filePath) => {
      rimraf(path.join(pathLike, filePath), options, (error) => {
        if (errState) {
          return;
        }
        if (error) {
          return callback((errState = error));
        }
        if (--count === 0) {
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
 * @param {string} pathLike
 * @returns {Promise<undefined|Error|{name: string, message: string, stack?: string}>}
 */
export async function remove(pathLike) {
  return new Promise((resolve, reject) => {
    rimraf(pathLike, {}, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}
