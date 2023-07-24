import { readdir } from "node:fs/promises";

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
  try {
    const contents = await readdir(pathToDir);
    if (ignoreJunk) {
      return contents.filter(isNotSystemJunk);
    }
    return contents;
  } catch (error) {
    return error;
  }
}
