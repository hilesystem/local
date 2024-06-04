import { hash } from "./hash";

/**
 * @name hashSha512
 * @description SHA-512.
 * @since 0.2.6
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<string|Error>}
 */
export async function hashSha512(pathToFile: string | Buffer | URL): Promise<string | Error> {
	return hash(pathToFile, "sha512");
}
