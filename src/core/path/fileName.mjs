import { parse } from "path";

/**
 * @name fileName
 * @description Return the file name without extension.
 * @since 0.1.1
 * @param {string} path
 * @returns {string}
 */
export function fileName(path) {
  return parse(path).name;
}
