import path from "path";
import { promises } from "fs";

import { ofError } from "@r37r0m0d3l/of";

import { createDirectory } from "./createDirectory";
import { getStatus } from "../status/getStatus";
import { writeFile } from "../write/writeFile";

/**
 * @name createFile
 * @description Asynchronous create a file.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} pathLike
 * @param {number|string=} mode
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export async function createFile(pathLike, mode = "0777") {
  const [status, error] = await getStatus(pathLike);
  if (!error && status.isFile()) {
    return true;
  }
  const dirPath = path.dirname(pathLike);
  if (error) {
    if (error.code === "ENOENT") {
      const dirCreated = await createDirectory(dirPath, mode);
      if (dirCreated !== true) {
        return dirCreated;
      }
      const fileWritten = await writeFile(pathLike, "", { mode, flag: "w" });
      if (fileWritten !== true) {
        return fileWritten;
      }
      return true;
    }
  }
  if (status.isDirectory()) {
    return await writeFile(pathLike, "", { mode, flag: "w" });
  } else {
    return await ofError(promises.readdir(dirPath));
  }
}
