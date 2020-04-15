import { constants } from "fs";

import { accessWrapper } from "../access/wrapper.mjs";

/**
 * @name fileIsExecutable
 * @description File can be executed by the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export async function fileIsExecutable(pathToFile) {
  return accessWrapper(constants.X_OK, pathToFile);
}
