import { truncate } from "node:fs/promises";

/**
 * @name fileTruncate
 * @description Truncate a file to a specified length
 * @since 0.0.6
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @param {number=} length
 * @returns {Promise<boolean|Error>}
 */
export async function fileTruncate(pathToFile: string | Buffer | URL, length: number = 0): Promise<boolean | Error> {
	try {
		await truncate(pathToFile, length);
		return true;
	} catch (error: unknown) {
		return error as Error;
	}
}
