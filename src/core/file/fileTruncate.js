import { promises } from "fs";

import { ofError } from "@r37r0m0d3l/of";

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
  const fsError = await ofError(promises.truncate(pathToFile, length));
  if (!fsError) {
    return true;
  }
  return fsError;
}
