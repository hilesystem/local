import { promises } from "fs";

import { of } from "@r37r0m0d3l/of";

/**
 * @name readFileToBase64
 * @description Asynchronously reads the entire contents of a file into string.
 * @since 0.1.21
 * @async
 * @param {string|Buffer|URL} pathLike
 * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
 */
export async function readFileToBase64(pathLike) {
  const [result, error] = await of(promises.readFile(pathLike, "base64"));
  if (error) {
    return error;
  }
  return result.toString();
}
