import { dirname } from "node:path";

/**
 * @name filePath
 * @description Return the directory name of a path.
 * @since 0.1.1
 * @param {string} path
 * @returns {string}
 */
export function filePath(path) {
  return dirname(path);
}
