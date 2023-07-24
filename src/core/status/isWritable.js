import { constants, promises } from "node:fs";

/**
 * @name isWritable
 * @description Is file can be written by the calling process.
 * @since 0.2.6
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<boolean>}}
 */
export async function isWritable(path) {
  try {
    await promises.access(path, constants.W_OK);
    return true;
  } catch {
    return false;
  }
}
