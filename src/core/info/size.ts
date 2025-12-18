import { stat } from "node:fs/promises";

/**
 * @name size
 * @description File size in bytes.
 * @since 0.2.3
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @param {boolean=} [asString=false]
 * @returns {Promise<number|string|Error>}
 */
export async function size(
	pathToFile: string | Buffer | URL,
	asString: boolean = false,
): Promise<number | string | Error> {
	const fileStats = await stat(pathToFile);
	if (!asString) {
		return fileStats.size;
	}
	return fileStats.size.toLocaleString("en").replace(/,/g, "_");
}
