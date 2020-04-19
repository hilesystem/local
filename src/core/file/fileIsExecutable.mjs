import { constants } from "fs";

import { accessWrapper } from "../access/wrapper";

/**
 * @name fileIsExecutable
 * @description File can be executed by the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export async function fileIsExecutable(pathToFile) {
  return accessWrapper(constants.X_OK, pathToFile);
}
