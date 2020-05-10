import { extname } from "path";

/**
 * @name fileExtension
 * @description Get file extension.
 * @since 0.1.1
 * @param {string} path
 * @returns {string}
 */
export function fileExtension(path) {
  return extname(path).substring(1);
}
