import { promises } from "fs";

import { ofError } from "@r37r0m0d3l/of";

/**
 * @name writeFile
 * @description Asynchronously writes data to a file, replacing the file if it already exists.
 * @since 0.0.10
 * @async
 * @param {string|Buffer|URL|FileHandle} filePath
 * @param {*=} data
 * @param {*|null|string=} options
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export default async function writeFile(filePath, data, options) {
  const fsError = await ofError(promises.writeFile(filePath, data, options));
  if (!fsError) {
    return true;
  }
  return fsError;
}
