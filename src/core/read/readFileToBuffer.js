import { readFile } from "node:fs/promises";

/**
 * @name readFileToBuffer
 * @description Asynchronously reads the entire contents of a file into buffer.
 * @since 0.1.19
 * @async
 * @param {string|Buffer|URL} pathLike
 * @returns {Promise<Buffer|Error|{name: string, message: string, stack?: string}>}
 */
export async function readFileToBuffer(pathLike) {
  try {
    const result = await readFile(pathLike, "binary");
    return Buffer.from(result);
  } catch (error) {
    return error;
  }
}
