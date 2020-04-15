import { promises } from "fs";

import { of } from "@r37r0m0d3l/of";

/**
 * @name getStatus
 * @description Get file status.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<[fs.Stats|undefined][Error|{readonly name: string, readonly message: string, readonly stack?: string}]>}
 */
export async function getStatus(path) {
  return of(promises.stat(path));
}
