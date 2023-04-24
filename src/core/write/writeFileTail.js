import { createFile } from "../create/createFile.js";
import { isFileExists } from "../status/isFileExists.js";
import { readFileToString } from "../read/readFileToString.js";
import { writeFile } from "./writeFile.js";

/**
 * @name writeFileTail
 * @description Asynchronously writes data to the end of a file.
 * @since 1.0.1
 * @async
 * @param {string|Buffer|URL} filePath
 * @param {string} data
 * @param {*|null|string=} options
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export async function writeFileTail(filePath, data, options) {
  const isFileExist = await isFileExists(filePath);
  if (isFileExist === false) {
    const isFileCreatedOrError = await createFile(filePath);
    if (isFileCreatedOrError !== true) {
      return isFileCreatedOrError;
    }
  }
  const contentOrError = await readFileToString(filePath);
  if (contentOrError instanceof Error) {
    return contentOrError;
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      writeFile(filePath, `${String(contentOrError)}${String(data)}`, options)
        .then(() => {
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    }, 1);
  });
}
