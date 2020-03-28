import dirIsExecutable from "./core/dir/dirIsExecutable.mjs";
import dirIsReadable from "./core/dir/dirIsReadable.mjs";
import dirIsVisible from "./core/dir/dirIsVisible.mjs";
import dirIsWritable from "./core/dir/dirIsWritable.mjs";

import fileIsExecutable from "./core/file/fileIsExecutable.mjs";
import fileIsReadable from "./core/file/fileIsReadable.mjs";
import fileIsVisible from "./core/file/fileIsVisible.mjs";
import fileIsWritable from "./core/file/fileIsWritable.mjs";

import fileTruncate from "./core/file/fileTruncate.mjs";

class HileSystemLocal {
  /**
   * @name dirIsExecutable
   * @description Directory can be executed by the calling process
   * @since 0.0.5
   * @async
   * @param {string} pathToDir
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  static dirIsExecutable = dirIsExecutable;
  /**
   * @name dirIsReadable
   * @description Directory is visible to the calling process
   * @since 0.0.1
   * @async
   * @param {string} pathToDir
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  static dirIsReadable = dirIsReadable;
  /**
   * @name dirIsVisible
   * @description Directory is visible to the calling process
   * @since 0.0.5
   * @async
   * @param {string} pathToDir
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  static dirIsVisible = dirIsVisible;
  /**
   * @name dirIsWritable
   * @description Directory can be written by the calling process
   * @since 0.0.1
   * @async
   * @param {string} pathToDir
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  static dirIsWritable = dirIsWritable;
  /**
   * @name fileIsExecutable
   * @description File can be executed by the calling process
   * @since 0.0.5
   * @async
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  static fileIsExecutable = fileIsExecutable;
  /**
   * @name fileIsReadable
   * @description File is visible to the calling process
   * @since 0.0.1
   * @async
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  static fileIsReadable = fileIsReadable;
  /**
   * @name fileIsVisible
   * @description File is visible to the calling process
   * @since 0.0.5
   * @async
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  static fileIsVisible = fileIsVisible;
  /**
   * @name fileIsWritable
   * @description File can be written by the calling process
   * @since 0.0.1
   * @async
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  static fileIsWritable = fileIsWritable;
  /**
   * @name fileTruncate
   * @description Truncate a file to a specified length
   * @since 0.0.6
   * @async
   * @param {string|Buffer|URL} pathToFile
   * @param {number=0} length
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  static fileTruncate = fileTruncate;
}

export {
  HileSystemLocal,
  dirIsExecutable,
  dirIsReadable,
  dirIsVisible,
  dirIsWritable,
  fileIsExecutable,
  fileIsReadable,
  fileIsVisible,
  fileIsWritable,
  fileTruncate,
};
