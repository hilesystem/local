import os from "os";

const HOME_DIRECTORY = os.homedir();

/**
 * @description deConvert a tilde path to an absolute path: ~/projects → /Users/anon/projects
 * @param {string} pathWithTilde
 * @returns {string}
 */
export function absolutePath(pathWithTilde) {
  if (HOME_DIRECTORY) {
    return String(pathWithTilde).replace(/^~(?=$|\/|\\)/, HOME_DIRECTORY);
  }
  return String(pathWithTilde);
}
