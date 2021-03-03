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
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export async function dirIsEmpty(pathToDir, excludeSystemFiles = true) {
  let contents = await listContents(pathToDir);
  if (!Array.isArray(contents)) {
    return contents;
  }
  if (contents.length === 0) {
    return true;
  }
  if (!excludeSystemFiles) {
    return false;
  }
  for (let contentIndex = 0; contentIndex < contents.length; contentIndex += 1) {
    for (let excludeIndex = 0; excludeIndex < EXCLUDE.length; excludeIndex += 1) {
      if (!contents[contentIndex]) {
        continue;
      }
      if (
        contents[contentIndex] === EXCLUDE[excludeIndex] ||
        contents[contentIndex].match(RegExp(EXCLUDE[excludeIndex]))
      ) {
        delete contents[contentIndex];
        contents = contents.filter((content) => content);
      }
    }
  }
  return contents.length === 0;
}
