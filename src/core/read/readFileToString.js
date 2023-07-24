import { readFile } from "node:fs/promises";

import { absolutePath } from "../path/absolutePath.js";

/**
 * @name readFileToString
 * @description Asynchronously reads the entire contents of a file into string.
 * @since 0.1.7
 * @async
 * @param {string|Buffer|URL} pathLike
 * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
 */
export async function readFileToString(pathLike) {
  try {
    const result = await readFile(absolutePath(pathLike), "utf8");
    return result.toString();
  } catch (error) {
    return error;
  }
}
