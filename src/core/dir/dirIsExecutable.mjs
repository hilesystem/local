import { constants } from "fs";

import { accessWrapper } from "../access/wrapper.mjs";

/**
 * @name dirIsExecutable
 * @description Directory can be executed by the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export async function dirIsExecutable(pathToDir) {
  return accessWrapper(constants.X_OK, pathToDir);
}
