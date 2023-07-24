import { mkdir } from "node:fs/promises";

/**
 * @name createDirectory
 * @description Asynchronous create a directory.
 * @since 0.0.10
 * @async
 * @param {string|Buffer|URL} dirPath
 * @param {number|string=} mode
 * @param {boolean=} recursive
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export async function createDirectory(dirPath, mode = "0777", recursive = true) {
  try {
    await mkdir(dirPath, { mode, recursive });
    return true;
  } catch (error) {
    return error;
  }
}
