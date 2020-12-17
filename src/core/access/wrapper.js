import { promises } from "fs";

import { ofError } from "@await-of/of";

/**
 * @name accessWrapper
 * @description Asynchronously tests a user's permissions for the file specified by path.
 * @since 0.0.1
 * @async
 * @param {number} mode
 * @param {string|Buffer|URL} path
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export async function accessWrapper(mode, path) {
  const fsError = await ofError(promises.access(path, mode));
  if (!fsError) {
    return true;
  }
  return fsError;
}
