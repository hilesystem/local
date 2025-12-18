import { hash } from "./hash";

/**
 * @name hashSha256
 * @description SHA-256.
 * @since 0.2.3
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<string|Error>}
 */
export async function hashSha256(pathToFile: string | Buffer | URL): Promise<string | Error> {
	return hash(pathToFile, "sha256");
}
