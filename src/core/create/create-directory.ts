import { mkdir } from "node:fs/promises";

/**
 * @name createDirectory
 * @description Asynchronous create a directory.
 * @since 0.0.10
 * @async
 * @param {string|Buffer|URL} dirPath
 * @param {number|string=} mode
 * @param {boolean=} recursive
 * @returns {Promise<boolean|Error>}
 */
export async function createDirectory(
	//
	dirPath: string | Buffer | URL,
	mode: (number | string) | undefined = "0777",
	recursive: boolean | undefined = true,
): Promise<boolean | Error> {
	try {
		await mkdir(dirPath, { mode, recursive });
		return true;
	} catch (error: unknown) {
		return error as Error;
	}
}
