import { stat } from "node:fs/promises";

/**
 * @name getStatus
 * @description Get file status.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<Array.<(object|undefined|Error|{name: string, message: string, stack?: string})>>}
 */
export async function getStatus(path) {
  try {
    return [await stat(path)];
  } catch (error) {
    return [undefined, error];
  }
}
