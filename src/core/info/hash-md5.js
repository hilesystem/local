import { hash } from "./hash.js";

/**
 * @name hashMd5
 * @description MD5.
 * @since 0.2.3
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
 */
export async function hashMd5(pathToFile) {
  return hash(pathToFile, "md5");
}
