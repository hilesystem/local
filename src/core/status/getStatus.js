import { promises } from "fs";

import { of } from "@await-of/of";

/**
 * @name getStatus
 * @description Get file status.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<Array.<(object|undefined|Error|{name: string, message: string, stack?: string})>>}
 */
export async function getStatus(path) {
  return of(promises.stat(path));
}
