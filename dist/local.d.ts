import { URL } from "url";
import { promises } from "fs";
import * as fs from "fs";

export type PathLike = string | Buffer | URL;
export type ErrorLike = Error | { readonly name: string; readonly message: string; readonly stack?: string };
export type TrueOrError = true | ErrorLike;
export type FileMode = number | string;

export interface IWriteFileOptions {
  encoding?: string | null;
  mode?: FileMode;
  flag?: string | number;
}

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
declare function createDirectory(dirPath: PathLike, mode?: FileMode, recursive?: boolean): Promise<TrueOrError>;

/**
 * @name createFile
 * @description Asynchronous create a file.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} pathLike
 * @param {number|string=} mode
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
declare function createFile(pathLike: PathLike, mode?: FileMode): Promise<TrueOrError>;

/**
 * @name dirIsExecutable
 * @description Directory can be executed by the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
declare function dirIsExecutable(pathToDir: PathLike): Promise<TrueOrError>;

/**
 * @name dirIsReadable
 * @description Directory is visible to the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
declare function dirIsReadable(pathToDir: PathLike): Promise<TrueOrError>;

/**
 * @name dirIsVisible
 * @description Directory is visible to the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
declare function dirIsVisible(pathToDir: PathLike): Promise<TrueOrError>;

/**
 * @name dirIsWritable
 * @description Directory can be written by the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
declare function dirIsWritable(pathToDir: PathLike): Promise<TrueOrError>;

/**
 * @name getStatus
 * @description Get file status.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<[fs.Stats|undefined][Error|{readonly name: string, readonly message: string, readonly stack?: string}]>}
 */
declare function getStatus(path: PathLike): Promise<[fs.Stats | undefined, ErrorLike | undefined]>;

/**
 * @name isDirExists
 * @description Get directory status.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<boolean>}
 */
declare function isDirExists(path: PathLike): Promise<boolean>;

/**
 * @name isFileExists
 * @description Get file status.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<boolean>}
 */
declare function isFileExists(path: PathLike): Promise<boolean>;

/**
 * @name isPathExists
 * @description Get path status.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<boolean>}
 */
declare function isPathExists(path: PathLike): Promise<boolean>;

/**
 * @name fileIsExecutable
 * @description File can be executed by the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
declare function fileIsExecutable(pathToFile: PathLike): Promise<TrueOrError>;

/**
 * @name fileIsReadable
 * @description File is visible to the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
declare function fileIsReadable(pathToFile: PathLike): Promise<TrueOrError>;

/**
 * @name fileIsVisible
 * @description File is visible to the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
declare function fileIsVisible(pathToFile: PathLike): Promise<TrueOrError>;

/**
 * @name fileIsWritable
 * @description File can be written by the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
declare function fileIsWritable(pathToFile: PathLike): Promise<TrueOrError>;

/**
 * @name fileTruncate
 * @description Truncate a file to a specified length
 * @since 0.0.6
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @param {number=0} length
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
declare function fileTruncate(pathToFile: PathLike, length?: number): Promise<TrueOrError>;

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
  options?: IWriteFileOptions | string | null,
): Promise<TrueOrError>;

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
  public static createDirectory(dirPath: PathLike, mode?: FileMode, recursive?: boolean): Promise<TrueOrError>;

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
  public static createFile(pathLike: PathLike, mode?: FileMode): Promise<TrueOrError>;

  /**
   * @name dirIsExecutable
   * @description Directory can be executed by the calling process
   * @since 0.0.5
   * @async
   * @static
   * @param {string|Buffer|URL} pathToDir
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  public static dirIsExecutable(pathToDir: PathLike): Promise<TrueOrError>;

  /**
   * @name dirIsReadable
   * @description Directory is visible to the calling process
   * @since 0.0.1
   * @async
   * @static
   * @param {string|Buffer|URL} pathToDir
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  public static dirIsReadable(pathToDir: PathLike): Promise<TrueOrError>;

  /**
   * @name dirIsVisible
   * @description Directory is visible to the calling process
   * @since 0.0.5
   * @async
   * @static
   * @param {string|Buffer|URL} pathToDir
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  public static dirIsVisible(pathToDir: PathLike): Promise<TrueOrError>;

  /**
   * @name dirIsWritable
   * @description Directory can be written by the calling process
   * @since 0.0.1
   * @async
   * @static
   * @param {string|Buffer|URL} pathToDir
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  public static dirIsWritable(pathToDir: PathLike): Promise<TrueOrError>;

  /**
   * @name getStatus
   * @description Get file status.
   * @since 0.0.11
   * @async
   * @static
   * @param {string|Buffer|URL} path
   * @returns {Promise<[fs.Stats|undefined][Error|{readonly name: string, readonly message: string, readonly stack?: string}]>}
   */
  public static getStatus(path: PathLike): Promise<[fs.Stats | undefined, ErrorLike | undefined]>;

  /**
   * @name isDirExists
   * @description Get directory status.
   * @since 0.0.11
   * @async
   * @static
   * @param {string|Buffer|URL} path
   * @returns {Promise<boolean>}
   */
  public static isDirExists(path: PathLike): Promise<boolean>;

  /**
   * @name isFileExists
   * @description Get file status.
   * @since 0.0.11
   * @async
   * @static
   * @param {string|Buffer|URL} path
   * @returns {Promise<boolean>}
   */
  public static isFileExists(path: PathLike): Promise<boolean>;

  /**
   * @name isPathExists
   * @description Get path status.
   * @since 0.0.11
   * @async
   * @static
   * @param {string|Buffer|URL} path
   * @returns {Promise<boolean>}
   */
  public static isPathExists(path: PathLike): Promise<boolean>;

  /**
   * @name fileIsExecutable
   * @description File can be executed by the calling process
   * @since 0.0.5
   * @async
   * @static
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  public static fileIsExecutable(pathToFile: PathLike): Promise<TrueOrError>;

  /**
   * @name fileIsReadable
   * @description File is visible to the calling process
   * @since 0.0.1
   * @async
   * @static
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  public static fileIsReadable(pathToFile: PathLike): Promise<TrueOrError>;

  /**
   * @name fileIsVisible
   * @description File is visible to the calling process
   * @since 0.0.5
   * @async
   * @static
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  public static fileIsVisible(pathToFile: PathLike): Promise<TrueOrError>;

  /**
   * @name fileIsWritable
   * @description File can be written by the calling process
   * @since 0.0.1
   * @async
   * @static
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
   */
  public static fileIsWritable(pathToFile: PathLike): Promise<TrueOrError>;

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
  public static fileTruncate(pathToFile: PathLike, length?: number): Promise<TrueOrError>;

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
    options?: IWriteFileOptions | string | null,
  ): Promise<TrueOrError>;
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
