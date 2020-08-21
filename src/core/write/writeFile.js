import { promises } from "fs";

import { ofError } from "@r37r0m0d3l/of";

/**
 * @name writeFile
 * @description Asynchronously writes data to a file, replacing the file if it already exists.
 * @since 0.0.10
 * @async
 * @param {string|Buffer|URL} filePath
 * @param {*=} data
 * @param {*|null|string=} options
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export async function writeFile(filePath, data, options) {
  const writeError = await ofError(promises.writeFile(filePath, data, options));
  if (writeError) {
    return writeError;
  }
  return true;
}
