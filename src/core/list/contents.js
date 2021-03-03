import { promises } from "fs";

import { ofAny } from "@await-of/of";

/**
 * @name listContents
 * @description Lists files and directories in path
 * @since 0.1.32
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<Array.<string>|Error|{name: string, message: string, stack?: string}>}
 */
export async function listContents(pathToDir) {
  const [contents, fsError] = await ofAny(promises.readdir(pathToDir));
  if (fsError) {
    return fsError;
  }
  return contents;
}
