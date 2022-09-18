import { hash } from "./hash.js";

/**
 * @name hashSha1
 * @description SHA-1.
 * @since 0.2.3
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
 */
export async function hashSha1(pathToFile) {
  return hash(pathToFile, "sha1");
}
