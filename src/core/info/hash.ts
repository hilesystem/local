import { createHash, getHashes } from "node:crypto";
import { readFile } from "node:fs/promises";

/**
 * @name hash
 * @description Calculate hash.
 * @since 0.2.3
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @param {string} algorithm
 * @returns {Promise<string|Error>}
 * @throws {TypeError} If algorithm is not supported.
 */
export async function hash(pathToFile: string | Buffer | URL, algorithm: string): Promise<string> {
	if (!getHashes().includes(algorithm)) {
		throw new TypeError(`Digest algorithm [${algorithm}] is not supported.`);
	}
	return createHash(algorithm)
		.update(await readFile(pathToFile))
		.digest("hex");
}
