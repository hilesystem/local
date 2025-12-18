import { hash } from "./hash";

/**
 * @name hashSha1
 * @description SHA-1.
 * @since 0.2.3
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<string|Error>}
 */
export async function hashSha1(pathToFile: string | Buffer | URL): Promise<string | Error> {
	return hash(pathToFile, "sha1");
}
