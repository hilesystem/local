import { promises } from "fs";

import { of } from "@await-of/of";

/**
 * @name readFileToString
 * @description Asynchronously reads the entire contents of a file into string.
 * @since 0.1.7
 * @async
 * @param {string|Buffer|URL} pathLike
 * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
 */
export async function readFileToString(pathLike) {
  const [result, error] = await of(promises.readFile(pathLike, "utf8"));
  if (error) {
    return error;
  }
  return result.toString();
}
