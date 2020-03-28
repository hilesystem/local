import * as fs from "fs";

import { default as OF } from "@r37r0m0d3l/of";

/**
 * @name accessWrapper
 * @description Asynchronously tests a user's permissions for the file specified by path.
 * @since 0.0.1
 * @async
 * @param {number} mode
 * @param {string} path
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export default async function accessWrapper(mode, path) {
  const fsError = await OF.ofError(fs.promises.access(path, mode));
  if (!fsError) {
    return true;
  }
  return fsError;
}
