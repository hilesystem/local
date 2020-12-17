import { promises } from "fs";

import { ofError } from "@await-of/of";

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
  const dirError = await ofError(promises.mkdir(dirPath, { mode, recursive }));
  if (dirError) {
    return dirError;
  }
  return true;
}
