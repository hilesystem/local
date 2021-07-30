import { promises } from "fs";

import { ofAny } from "@await-of/of";

import { isNotSystemJunk } from "./is-not-system-junk.js";

/**
 * @name listContents
 * @description Lists files and directories in path
 * @since 0.1.32
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @param {boolean} [ignoreJunk=true]
 * @returns {Promise<Array.<string>|Error|{name: string, message: string, stack?: string}>}
 */
export async function listContents(pathToDir, ignoreJunk = true) {
  const [contents, fsError] = await ofAny(promises.readdir(pathToDir));
  if (fsError) {
    return fsError;
  }
  if (ignoreJunk) {
    return contents.filter(isNotSystemJunk);
  }
  return contents;
}
