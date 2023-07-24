import { lstat } from "node:fs/promises";

/**
 * @name getLinkStatus
 * @description Get file status unless `path` refers to a symbolic link, in which case the link itself is stat-ed, not the file that it refers to.
 * @url http://man7.org/linux/man-pages/man2/lstat.2.html
 * @since 1.1.0
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<Array.<(object|undefined|Error|{name: string, message: string, stack?: string})>>}
 */
export async function getLinkStatus(path) {
  try {
    return [await lstat(path)];
  } catch (error) {
    return [undefined, error];
  }
}
