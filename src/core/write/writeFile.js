import { writeFile as writeFileNative } from "node:fs/promises";

/**
 * @name writeFile
 * @description Asynchronously writes data to a file, replacing the file if it already exists.
 * @since 0.0.10
 * @async
 * @param {string|Buffer|URL} filePath
 * @param {string} data
 * @param {*|null|string=} options
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 * @example
 * const controller = new AbortController();
 * const { signal } = controller;
 * const data = new Uint8Array(Buffer.from('Hello Node.js'));
 * (async () => {
 *  try {
 *     await writeFile('message.txt', data, { signal });
 *   } catch (error) {
 *     // When a request is aborted - error is an AbortError
 *   }
 * })();
 * // When the request should be aborted
 * controller.abort();
 */
export async function writeFile(filePath, data, options) {
  try {
    await writeFileNative(filePath, data, options);
    return true;
  } catch (error) {
    return error;
  }
}
