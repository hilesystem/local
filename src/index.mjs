import { createDirectory } from "./core/create/createDirectory.mjs";
import { createFile } from "./core/create/createFile.mjs";

import dirIsExecutable from "./core/dir/dirIsExecutable.mjs";
import dirIsReadable from "./core/dir/dirIsReadable.mjs";
import dirIsVisible from "./core/dir/dirIsVisible.mjs";
import dirIsWritable from "./core/dir/dirIsWritable.mjs";

import { getStatus } from "./core/status/getStatus.mjs";

import { isDirExists } from "./core/status/isDirExists.mjs";
import { isFileExists } from "./core/status/isFileExists.mjs";
import { isPathExists } from "./core/status/isPathExists.mjs";

import fileIsExecutable from "./core/file/fileIsExecutable.mjs";
import fileIsReadable from "./core/file/fileIsReadable.mjs";
import fileIsVisible from "./core/file/fileIsVisible.mjs";
import fileIsWritable from "./core/file/fileIsWritable.mjs";

import fileTruncate from "./core/file/fileTruncate.mjs";

import { writeFile } from "./core/write/writeFile.mjs";


class HileSystemLocal {
  /**
   * @name createDirectory
   * @description Asynchronous create a directory.
   * @since 0.0.10
   * @async
   * @static
   * @param {string|Buffer|URL} dirPath
   * @param {number|string=} mode
   * @param {boolean=} recursive
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  static createDirectory = createDirectory;
  /**
   * @name createFile
   * @description Asynchronous create a file.
   * @since 0.0.11
   * @async
   * @static
   * @param {string|Buffer|URL} pathLike
   * @param {number|string=} mode
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  static createFile = createFile;
  /**
   * @name dirIsExecutable
   * @description Directory can be executed by the calling process
   * @since 0.0.5
   * @async
   * @static
   * @param {string} pathToDir
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  static dirIsExecutable = dirIsExecutable;
  /**
   * @name dirIsReadable
   * @description Directory is visible to the calling process
   * @since 0.0.1
   * @async
   * @static
   * @param {string} pathToDir
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  static dirIsReadable = dirIsReadable;
  /**
   * @name dirIsVisible
   * @description Directory is visible to the calling process
   * @since 0.0.5
   * @async
   * @static
   * @param {string} pathToDir
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  static dirIsVisible = dirIsVisible;
  /**
   * @name dirIsWritable
   * @description Directory can be written by the calling process
   * @since 0.0.1
   * @async
   * @static
   * @param {string} pathToDir
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  static dirIsWritable = dirIsWritable;
  /**
   * @name getStatus
   * @description Get file status.
   * @since 0.0.11
   * @async
   * @static
   * @param {string|Buffer|URL} path
   * @returns {Promise<[fs.Stats|undefined][Error|{readonly name: string, readonly message: string, readonly stack?: string}]>}
   */
  static getStatus = getStatus;
  /**
   * @name isDirExists
   * @description Get directory status.
   * @since 0.0.11
   * @async
   * @static
   * @param {string|Buffer|URL} path
   * @returns {Promise<boolean>}
   */
  static isDirExists = isDirExists;
  /**
   * @name isFileExists
   * @description Get file status.
   * @since 0.0.11
   * @async
   * @static
   * @param {string|Buffer|URL} path
   * @returns {Promise<boolean>}
   */
  static isFileExists = isFileExists;
  /**
   * @name isPathExists
   * @description Get path status.
   * @since 0.0.11
   * @async
   * @static
   * @param {string|Buffer|URL} path
   * @returns {Promise<boolean>}
   */
  static isPathExists = isPathExists;
  /**
   * @name fileIsExecutable
   * @description File can be executed by the calling process
   * @since 0.0.5
   * @async
   * @static
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  static fileIsExecutable = fileIsExecutable;
  /**
   * @name fileIsReadable
   * @description File is visible to the calling process
   * @since 0.0.1
   * @async
   * @static
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  static fileIsReadable = fileIsReadable;
  /**
   * @name fileIsVisible
   * @description File is visible to the calling process
   * @since 0.0.5
   * @async
   * @static
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  static fileIsVisible = fileIsVisible;
  /**
   * @name fileIsWritable
   * @description File can be written by the calling process
   * @since 0.0.1
   * @async
   * @static
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  static fileIsWritable = fileIsWritable;
  /**
   * @name fileTruncate
   * @description Truncate a file to a specified length
   * @since 0.0.6
   * @async
   * @static
   * @param {string|Buffer|URL} pathToFile
   * @param {number=0} length
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  static fileTruncate = fileTruncate;
  /**
   * @name writeFile
   * @description Asynchronously writes data to a file, replacing the file if it already exists.
   * @since 0.0.10
   * @async
   * @static
   * @param {string|Buffer|URL|FileHandle} filePath
   * @param {*=} data
   * @param {*|null|string=} options
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  static writeFile = writeFile;
}

export {
  HileSystemLocal,
  createDirectory,
  createFile,
  dirIsExecutable,
  dirIsReadable,
  dirIsVisible,
  dirIsWritable,
  fileIsExecutable,
  fileIsReadable,
  fileIsVisible,
  fileIsWritable,
  fileTruncate,
  getStatus,
  isDirExists,
  isFileExists,
  isPathExists,
  writeFile,
};
