import { hash } from "./hash";

/**
 * @name hashMd5
 * @description MD5.
 * @since 0.2.3
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<string|Error>}
 */
export async function hashMd5(pathToFile: string | Buffer | URL): Promise<string> {
	return hash(pathToFile, "md5");
}
