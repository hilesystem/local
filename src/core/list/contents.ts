import { readdir } from "node:fs/promises";

import { isNotSystemJunk } from "./is-not-system-junk";

/**
 * @name listContents
 * @description Lists files and directories in path
 * @since 0.1.32
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @param {boolean} [ignoreJunk=true]
 * @returns {Promise<string[]|Error>}
 */
export async function listContents(pathToDir: string | Buffer | URL, ignoreJunk = true): Promise<string[] | Error> {
	try {
		const contents = await readdir(pathToDir);
		if (ignoreJunk) {
			return contents.filter(isNotSystemJunk);
		}
		return contents;
	} catch (error: unknown) {
		return error as Error;
	}
}
