import { hash } from "./hash.js";

/**
 * @name hashSha256
 * @description SHA-256.
 * @since 0.2.3
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
 */
export async function hashSha256(pathToFile) {
  return hash(pathToFile, "sha256");
}
