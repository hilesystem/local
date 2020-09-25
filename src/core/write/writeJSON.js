import { writeFile } from "./writeFile.js";

/**
 * @name writeJSON
 * @description Asynchronously writes data to a file, replacing the file if it already exists.
 * @since 0.1.25
 * @async
 * @param {string|Buffer|URL} filePath
 * @param {*} data
 * @param {*|null|string=} options
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export async function writeJSON(filePath, data, options) {
  let json;
  try {
    json = JSON.stringify(data);
  } catch (error) {
    return error;
  }
  return writeFile(filePath, json, options);
}
