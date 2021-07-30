import { isSystemJunk } from "./is-system-junk.js";

/**
 * @name isNotSystemJunk
 * @description Returns true if filename matches a system junk file.
 * @param {string} [fileName]
 * @returns {boolean}
 * @since 0.2.0
 */
export function isNotSystemJunk(fileName) {
  return !isSystemJunk(fileName);
}
