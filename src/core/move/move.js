import { rename } from "node:fs/promises";

/**
 * @name move
 * @description Change the name or location of a file or directory.
 * @since 0.1.29
 * @param {string} pathFrom
 * @param {string} pathTo
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export async function move(pathFrom, pathTo) {
  try {
    await rename(pathFrom, pathTo);
    return true;
  } catch (error) {
    return error;
  }
}
