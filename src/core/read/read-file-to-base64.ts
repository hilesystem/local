import { readFile } from "node:fs/promises";

/**
 * @name readFileToBase64
 * @description Asynchronously reads the entire contents of a file into string.
 * @since 0.1.21
 * @async
 * @param {string|Buffer|URL} pathLike
 * @returns {Promise<string|Error>}
 */
export async function readFileToBase64(pathLike: string | Buffer | URL): Promise<string | Error> {
	try {
		const result = await readFile(pathLike, "base64");
		return result.toString();
	} catch (error: unknown) {
		return error as Error;
	}
}
