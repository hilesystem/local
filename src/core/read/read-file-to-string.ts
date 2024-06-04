import { readFile } from "node:fs/promises";

import { absolutePath } from "../path/absolute-path";

/**
 * @name readFileToString
 * @description Asynchronously reads the entire contents of a file into string.
 * @since 0.1.7
 * @async
 * @param {string|Buffer|URL} pathLike
 * @returns {Promise<string|Error>}
 */
export async function readFileToString(pathLike: string | Buffer | URL): Promise<string | Error> {
	try {
		const result = await readFile(absolutePath(pathLike as string), "utf8");
		return result.toString();
	} catch (error: unknown) {
		return error as Error;
	}
}
