import { basename } from "path";

/**
 * @name fileNameExt
 * @description Return the last portion of a path.
 * @since 0.1.1
 * @param {string} path
 * @returns {string}
 */
export function fileNameExt(path) {
  return basename(path);
}
