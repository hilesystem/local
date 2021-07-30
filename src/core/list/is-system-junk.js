// keep updated https://github.com/sindresorhus/junk

const ignoreList = [
  // # All
  "^npm-debug\\.log$", // Error log for npm
  "^\\..*\\.swp$", // Swap file for vim state

  // # macOS
  "^\\.DS_Store$", // Stores custom folder attributes
  "^\\.AppleDouble$", // Stores additional file resources
  "^\\.LSOverride$", // Contains the absolute path to the app to be used
  "^Icon\\r$", // Custom Finder icon: http://superuser.com/questions/298785/icon-file-on-os-x-desktop
  "^\\._.*", // Thumbnail
  "^\\.Spotlight-V100(?:$|\\/)", // Directory that might appear on external disk
  "\\.Trashes", // File that might appear on external disk
  "^__MACOSX$", // Resource fork

  // # Linux
  "~$", // Backup file

  // # Windows
  "^Thumbs\\.db$", // Image file cache
  "^ehthumbs\\.db$", // Folder config file
  "^Desktop\\.ini$", // Stores custom folder attributes
  "@eaDir$", // Synology Diskstation "hidden" folder where the server stores thumbnails
  "^\\$RECYCLE.BIN$", // Special folder with columns like Date deleted and Original location
  "^System Volume Information$",
];

export const junkRegex = new RegExp(ignoreList.join("|"));

/**
 * @name isSystemJunk
 * @description Returns true if filename matches a system junk file.
 * @param {string} [fileName]
 * @returns {boolean}
 * @since 0.2.0
 */
export function isSystemJunk(fileName) {
  return junkRegex.test(fileName);
}
