import { readFile } from "node:fs/promises";

/**
 * @name readFileToBuffer
 * @description Asynchronously reads the entire contents of a file into buffer.
 * @since 0.1.19
 * @async
 * @param {string|Buffer|URL} pathLike
 * @returns {Promise<Buffer|Error>}
 */
export async function readFileToBuffer(pathLike: string | Buffer | URL): Promise<Buffer | Error> {
	try {
		const result = await readFile(pathLike, "binary");
		return Buffer.from(result);
	} catch (error: unknown) {
		return error as Error;
	}
}
