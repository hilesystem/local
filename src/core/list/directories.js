import { getStatus } from "../status/getStatus.js";
import { listContents } from "./contents.js";
import { pathFrom } from "../path/pathFrom.js";

/**
 * @name listDirectories
 * @description Lists directories in path
 * @since 0.1.32
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<Array.<string>|Error|{name: string, message: string, stack?: string}>}
 */
export async function listDirectories(pathToDir) {
  const contents = await listContents(pathToDir);
  if (!Array.isArray(contents)) {
    return contents;
  }
  const directories = await Promise.all(
    contents.map(async (content) => {
      const contentPath = pathFrom(pathToDir, content);
      const [status, error] = await getStatus(contentPath);
      if (error) {
        return undefined;
      }
      if (!status.isDirectory()) {
        return undefined;
      }
      return content;
    }),
  );
  return directories.filter((content) => content);
}
