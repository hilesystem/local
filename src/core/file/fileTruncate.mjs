import { promises } from "fs";

import { default as OF } from "@r37r0m0d3l/of";

/**
 * @name fileTruncate
 * @description Truncate a file to a specified length
 * @since 0.0.6
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @param {number=0} length
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export default async function fileTruncate(pathToFile, length = 0) {
  const fsError = await OF.ofError(promises.truncate(pathToFile, length));
  if (!fsError) {
    return true;
  }
  return fsError;
}
