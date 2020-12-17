import { promises } from "fs";

import { of } from "@await-of/of";

/**
 * @name readFileToBuffer
 * @description Asynchronously reads the entire contents of a file into buffer.
 * @since 0.1.19
 * @async
 * @param {string|Buffer|URL} pathLike
 * @returns {Promise<Buffer|Error|{name: string, message: string, stack?: string}>}
 */
export async function readFileToBuffer(pathLike) {
  const [result, error] = await of(promises.readFile(pathLike, "binary"));
  if (error) {
    return error;
  }
  return Buffer.from(result);
}
