import { hash } from "./hash.js";

/**
 * @name hashSha512
 * @description SHA-512.
 * @since 0.2.6
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
 */
export async function hashSha512(pathToFile) {
  return hash(pathToFile, "sha512");
}
