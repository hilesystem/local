import { errorExtractOptions } from "../error/errorExtractOptions.js";
import { dirIsReadable } from "./dirIsReadable.js";
import { listContents } from "../list/contents.js";

const EXCLUDE = [
  // macOS
  ".AppleDB",
  ".AppleDesktop",
  ".AppleDouble",
  ".DS_Store",
  ".DocumentRevisions-V100",
  ".LSOverride",
  ".Spotlight-V100",
  ".TemporaryItems",
  ".Trashes",
  ".VolumeIcon.icns",
  // "._*",
  ".apdisk",
  ".com.apple.timemachine.donotpresent",
  ".fseventsd",
  "Network Trash Folder",
  "Temporary Items",
  // Windows
  "$RECYCLE.BIN/",
  // "*.cab",
  // "*.lnk",
  // "*.msi",
  // "*.msix",
  // "*.msm",
  // "*.msp",
  // "*.stackdump",
  "Desktop.ini",
  "Thumbs.db",
  "Thumbs.db:encryptable",
  "desktop.ini",
  "ehthumbs.db",
  "ehthumbs_vista.db",
  // Linux
  // "*~",
  // ".Trash-*",
  ".directory",
  // ".fuse_hidden*",
  // ".nfs*",
];

/**
 * @name dirIsEmpty
 * @description Check if a directory is empty
 * @since 0.1.33
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @param {boolean=} excludeSystemFiles
 * @returns {Promise<boolean>}
 * @throws {Error} If path is not a dir or is not readable.
 */
export async function dirIsEmpty(pathToDir, excludeSystemFiles = true) {
  const isReadableOrError = await dirIsReadable(pathToDir);
  if (isReadableOrError !== true) {
    throw new Error(isReadableOrError.message, errorExtractOptions(isReadableOrError));
  }
  let listOfDirsAndFiles = await listContents(pathToDir);
  if (!Array.isArray(listOfDirsAndFiles)) {
    return listOfDirsAndFiles;
  }
  if (listOfDirsAndFiles.length === 0) {
    return true;
  }
  if (!excludeSystemFiles) {
    return false;
  }
  const content = new Set(listOfDirsAndFiles);
  listOfDirsAndFiles.length = 0;
  content.forEach((dirOrFileName) => {
    for (const nameToExclude of EXCLUDE) {
      if (!dirOrFileName) {
        continue;
      }
      if (dirOrFileName === nameToExclude || dirOrFileName.match(RegExp(nameToExclude))) {
        content.delete(dirOrFileName);
      }
    }
  });
  return content.size === 0;
}
