import { promises } from "fs";

import { ofError } from "@r37r0m0d3l/of";

/**
 * @name createDirectory
 * @description Asynchronous create a directory.
 * @since 0.0.10
 * @async
 * @param {string|Buffer|URL} dirPath
 * @param {number|string=} mode
 * @param {boolean=} recursive
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export default async function createDirectory(dirPath, mode = "0777", recursive = true) {
  const fsError = await ofError(promises.mkdir(dirPath, { mode, recursive }));
  if (!fsError) {
    return true;
  }
  return fsError;
}
