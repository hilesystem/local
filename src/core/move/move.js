import { promises } from "fs";

import { ofError } from "@r37r0m0d3l/of";

/**
 * @name move
 * @description Change the name or location of a file or directory.
 * @since 0.1.29
 * @param {string} pathFrom
 * @param {string} pathTo
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export async function move(pathFrom, pathTo) {
  const errorRename = await ofError(promises.rename(pathFrom, pathTo));
  if (errorRename) {
    return errorRename;
  }
  return true;
}
