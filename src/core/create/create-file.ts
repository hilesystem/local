import { dirname } from "node:path";
import { readdir } from "node:fs/promises";

import { createDirectory } from "./create-directory";
import { getStatus } from "../status/get-status";
import { writeFile } from "../write/write-file";

/**
 * @name createFile
 * @description Asynchronous create a file.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} pathLike
 * @param {number|string=} mode
 * @returns {Promise<boolean|undefined|Error>}
 */
export async function createFile(
	pathLike: string | Buffer | URL,
	mode: string = "0777",
): Promise<boolean | undefined | Error> {
	const [status, error] = await getStatus(pathLike);
	if (!error && (status as import("node:fs").Stats).isFile()) {
		return true;
	}
	const dirPath = dirname(pathLike as string);
	if (error) {
		if ((error as NodeJS.ErrnoException).code === "ENOENT") {
			const dirCreated = await createDirectory(dirPath, mode);
			if (dirCreated !== true) {
				return dirCreated;
			}
			const fileWritten = await writeFile(pathLike, "", { mode, flag: "w" });
			if (fileWritten !== true) {
				return fileWritten;
			}
			return true;
		}
	}
	if ((status as import("node:fs").Stats).isDirectory()) {
		return await writeFile(pathLike, "", { mode, flag: "w" });
	} else {
		try {
			await readdir(dirPath);
			return undefined;
		} catch (error: unknown) {
			return error as Error;
		}
	}
}
