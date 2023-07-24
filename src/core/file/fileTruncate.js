import { truncate } from "node:fs/promises";

/**
 * @name fileTruncate
 * @description Truncate a file to a specified length
 * @since 0.0.6
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @param {number=} length
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export async function fileTruncate(pathToFile, length = 0) {
  try {
    await truncate(pathToFile, length);
    return true;
  } catch (error) {
    return error;
  }
}
