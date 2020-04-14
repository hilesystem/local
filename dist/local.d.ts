import { URL } from "url";
import { promises } from "fs";

export type PathLike = string | Buffer | URL;

/**
 * @name createDirectory
 * @description Asynchronous create a directory.
 * @since 0.0.10
 * @async
 * @param {string|Buffer|URL} dirPath
 * @param {number|string=} mode
 * @param {boolean=} recursive
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
declare function createDirectory(
  dirPath: PathLike,
  mode?: number | string,
  recursive?: boolean,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name dirIsExecutable
 * @description Directory can be executed by the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
declare function dirIsExecutable(
  pathToDir: PathLike,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name dirIsReadable
 * @description Directory is visible to the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
declare function dirIsReadable(
  pathToDir: PathLike,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name dirIsVisible
 * @description Directory is visible to the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
declare function dirIsVisible(
  pathToDir: PathLike,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name dirIsWritable
 * @description Directory can be written by the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
declare function dirIsWritable(
  pathToDir: PathLike,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name fileIsExecutable
 * @description File can be executed by the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
declare function fileIsExecutable(
  pathToFile: PathLike,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name fileIsReadable
 * @description File is visible to the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
declare function fileIsReadable(
  pathToFile: PathLike,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name fileIsVisible
 * @description File is visible to the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
declare function fileIsVisible(
  pathToFile: PathLike,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name fileIsWritable
 * @description File can be written by the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
declare function fileIsWritable(
  pathToFile: PathLike,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name fileTruncate
 * @description Truncate a file to a specified length
 * @since 0.0.6
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @param {number=0} length
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
declare function fileTruncate(
  pathToFile: PathLike,
  length?: number,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name writeFile
 * @description Asynchronously writes data to a file, replacing the file if it already exists.
 * @since 0.0.10
 * @async
 * @param {string|Buffer|URL|FileHandle} filePath
 * @param {*=} data
 * @param {*|null|string=} options
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
declare function writeFile(
  filePath: PathLike | promises.FileHandle,
  data: any,
  options?: { encoding?: string | null; mode?: string | number; flag?: string | number } | string | null,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

declare class HileSystemLocal {
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
  public static createDirectory(
    dirPath: PathLike,
    mode?: number | string,
    recursive?: boolean,
  ): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

  /**
   * @name dirIsExecutable
   * @description Directory can be executed by the calling process
   * @since 0.0.5
   * @async
   * @static
   * @param {string|Buffer|URL} pathToDir
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  public static dirIsExecutable(
    pathToDir: PathLike,
  ): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

  /**
   * @name dirIsReadable
   * @description Directory is visible to the calling process
   * @since 0.0.1
   * @async
   * @static
   * @param {string|Buffer|URL} pathToDir
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  public static dirIsReadable(
    pathToDir: PathLike,
  ): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

  /**
   * @name dirIsVisible
   * @description Directory is visible to the calling process
   * @since 0.0.5
   * @async
   * @static
   * @param {string|Buffer|URL} pathToDir
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  public static dirIsVisible(
    pathToDir: PathLike,
  ): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

  /**
   * @name dirIsWritable
   * @description Directory can be written by the calling process
   * @since 0.0.1
   * @async
   * @static
   * @param {string|Buffer|URL} pathToDir
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  public static dirIsWritable(
    pathToDir: PathLike,
  ): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

  /**
   * @name fileIsExecutable
   * @description File can be executed by the calling process
   * @since 0.0.5
   * @async
   * @static
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  public static fileIsExecutable(
    pathToFile: PathLike,
  ): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

  /**
   * @name fileIsReadable
   * @description File is visible to the calling process
   * @since 0.0.1
   * @async
   * @static
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  public static fileIsReadable(
    pathToFile: PathLike,
  ): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

  /**
   * @name fileIsVisible
   * @description File is visible to the calling process
   * @since 0.0.5
   * @async
   * @static
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  public static fileIsVisible(
    pathToFile: PathLike,
  ): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

  /**
   * @name fileIsWritable
   * @description File can be written by the calling process
   * @since 0.0.1
   * @async
   * @static
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  public static fileIsWritable(
    pathToFile: PathLike,
  ): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

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
  public static fileTruncate(
    pathToFile: PathLike,
    length?: number,
  ): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

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
  public static writeFile(
    filePath: PathLike | promises.FileHandle,
    data: any,
    options?: { encoding?: string | null; mode?: string | number; flag?: string | number } | string | null,
  ): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;
}

export {
  HileSystemLocal,
  createDirectory,
  dirIsExecutable,
  dirIsReadable,
  dirIsVisible,
  dirIsWritable,
  fileIsExecutable,
  fileIsReadable,
  fileIsVisible,
  fileIsWritable,
  fileTruncate,
  writeFile,
};
