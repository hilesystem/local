import { PathLike, Stats } from "fs";
import { basename, dirname, extname, join, parse } from "path";

//#region create

/**
 * @name createDirectory
 * @description Asynchronous create a directory.
 * @since 0.0.10
 * @async
 * @param {string|Buffer|URL} dirPath
 * @param {number|string=} mode
 * @param {boolean=} recursive
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export function createDirectory(dirPath: PathLike, mode?: number | string, recursive?: boolean): Promise<true | Error>;

/**
 * @name createFile
 * @description Asynchronous create a file.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} pathLike
 * @param {number|string=} mode
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export function createFile(pathLike: PathLike, mode?: number | string): Promise<true | Error>;

//#endregion

//#region dir

/**
 * @name dirIsExecutable
 * @description Directory can be executed by the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export function dirIsExecutable(pathToDir: PathLike): Promise<true | Error>;

/**
 * @name dirIsReadable
 * @description Directory is visible to the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export function dirIsReadable(pathToDir: PathLike): Promise<true | Error>;

/**
 * @name dirIsVisible
 * @description Directory is visible to the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export function dirIsVisible(pathToDir: PathLike): Promise<true | Error>;

/**
 * @name dirIsWritable
 * @description Directory can be written by the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export function dirIsWritable(pathToDir: PathLike): Promise<true | Error>;

//#endregion

//#region file

/**
 * @name fileIsExecutable
 * @description File can be executed by the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export function fileIsExecutable(pathToFile: PathLike): Promise<true | Error>;

/**
 * @name fileIsReadable
 * @description File is visible to the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export function fileIsReadable(pathToFile: PathLike): Promise<true | Error>;

/**
 * @name fileIsVisible
 * @description File is visible to the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export function fileIsVisible(pathToFile: PathLike): Promise<true | Error>;

/**
 * @name fileIsWritable
 * @description File can be written by the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export function fileIsWritable(pathToFile: PathLike): Promise<true | Error>;

/**
 * @name fileTruncate
 * @description Truncate a file to a specified length
 * @since 0.0.6
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @param {number=} length
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export function fileTruncate(pathToFile: PathLike, length?: number): Promise<true | Error>;

//#endregion

//#region path

/**
 * @name absolutePathFrom
 * @description Join all arguments together and normalize the resulting path.
 * Creates absolute path from right to left until an absolute path is constructed.
 * @since 0.1.5
 * @param {string|Array.<string>} paths
 * @param {...string} morePaths
 * @returns {string}
 */
export function absolutePathFrom(paths: string | string[], ...morePaths: string[]): string;

/**
 * @name fileExtension
 * @description Get file extension.
 * @since 0.1.1
 * @param {string} path
 * @returns {string}
 */
export function fileExtension(path: string): string;

/**
 * @name fileName
 * @description Return the file name without extension.
 * @since 0.1.1
 * @param {string} path
 * @returns {string}
 */
export function fileName(path: string): string;

/**
 * @name fileNameExt
 * @description Return the last portion of a path.
 * @since 0.1.1
 * @param {string} path
 * @returns {string}
 */
export function fileNameExt(path: string): string;

/**
 * @name filePath
 * @description Return the directory name of a path.
 * @since 0.1.1
 * @param {string} path
 * @returns {string}
 */
export function filePath(path: string): string;

/**
 * @name pathFrom
 * @description Join all arguments together and normalize the resulting path.
 * @since 0.1.3
 * @param {string|Array.<string>} paths
 * @param {...string} morePaths
 * @returns {string}
 */
export function pathFrom(paths: string | string[], ...morePaths: string[]): string;

//#endregion

//#region read

/**
 * @name readFileToBase64
 * @description Asynchronously reads the entire contents of a file into string.
 * @since 0.1.21
 * @async
 * @param {string|Buffer|URL} pathLike
 * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
 */
export function readFileToBase64(pathLike: string): Promise<string | Error>;

/**
 * @name readFileToBuffer
 * @description Asynchronously reads the entire contents of a file into buffer.
 * @since 0.1.19
 * @async
 * @param {string|Buffer|URL} pathLike
 * @returns {Promise<Buffer|Error|{name: string, message: string, stack?: string}>}
 */
export function readFileToBuffer(pathLike: string): Promise<Buffer | Error>;

/**
 * @name readFileToString
 * @description Asynchronously reads the entire contents of a file into string.
 * @since 0.1.7
 * @async
 * @param {string|Buffer|URL} pathLike
 * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
 */
export function readFileToString(pathLike: string): Promise<string | Error>;

//#endregion

//#region remove

/**
 * @name remove
 * @description Removes a file or directory.
 * @since 0.1.1
 * @async
 * @param {string} pathLike
 * @returns {Promise<undefined|Error|{name: string, message: string, stack?: string}>}
 */
export function remove(pathLike: string): Promise<undefined | Error>;

/**
 * @name removeNonBlocking
 * @description Non-blocking remove of a file or directory.
 * @since 0.1.18
 * @sync
 * @param {string} pathLike
 * @returns {void}
 */
export function removeNonBlocking(pathLike: string): void;

//#endregion

//#region status

/**
 * @name getStatus
 * @description Get file status.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<[fs.Stats|undefined],[Error|{name: string, message: string, stack?: string}]>}
 */
export function getStatus(path: PathLike): Promise<[Stats?, Error?]>;

/**
 * @name isDirExists
 * @description Get directory status.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<boolean>}
 */
export function isDirExists(path: PathLike): Promise<boolean>;

/**
 * @name isFileExists
 * @description Get file status.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<boolean>}
 */
export function isFileExists(path: PathLike): Promise<boolean>;

/**
 * @name isPathExists
 * @description Get path status.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<boolean>}
 */
export function isPathExists(path: PathLike): Promise<boolean>;

//#endregion

//#region write

/**
 * @name writeFile
 * @description Asynchronously writes data to a file, replacing the file if it already exists.
 * @since 0.0.10
 * @async
 * @param {string|Buffer|URL|FileHandle} filePath
 * @param {string} data
 * @param {*|null|string=} options
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export function writeFile(
  filePath: PathLike,
  data: string,
  options?: { encoding?: string | null; mode?: string | number; flag?: string | number },
): Promise<true | Error>;

/**
 * @name writeJSON
 * @description Asynchronously writes data to a file, replacing the file if it already exists.
 * @since 0.1.25
 * @async
 * @param {string|Buffer|URL|FileHandle} filePath
 * @param {*} data
 * @param {*|null|string=} options
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export function writeJSON(
  filePath: PathLike,
  data: any,
  options?: { encoding?: string | null; mode?: string | number; flag?: string | number },
): Promise<true | Error>;

//#endregion

//#region default

export class HileSystemLocal {
  //#region create

  /**
   * @name createDirectory
   * @description Asynchronous create a directory.
   * @since 0.0.10
   * @async
   * @public
   * @param {string|Buffer|URL} dirPath
   * @param {number|string=} mode
   * @param {boolean=} recursive
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  public createDirectory(dirPath: PathLike, mode?: number | string, recursive?: boolean): Promise<true | Error>;
  /**
   * @name createFile
   * @description Asynchronous create a file.
   * @since 0.0.11
   * @async
   * @public
   * @param {string|Buffer|URL} pathLike
   * @param {number|string=} mode
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  public createFile(pathLike: PathLike, mode?: number | string): Promise<true | Error>;

  //#endregion

  //#region dir

  /**
   * @name dirIsExecutable
   * @description Directory can be executed by the calling process
   * @since 0.0.5
   * @async
   * @public
   * @param {string} pathToDir
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  public dirIsExecutable(pathToDir: PathLike): Promise<true | Error>;
  /**
   * @name dirIsReadable
   * @description Directory is visible to the calling process
   * @since 0.0.1
   * @async
   * @public
   * @param {string} pathToDir
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  public dirIsReadable(pathToDir: PathLike): Promise<true | Error>;
  /**
   * @name dirIsVisible
   * @description Directory is visible to the calling process
   * @since 0.0.5
   * @async
   * @public
   * @param {string} pathToDir
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  public dirIsVisible(pathToDir: PathLike): Promise<true | Error>;
  /**
   * @name dirIsWritable
   * @description Directory can be written by the calling process
   * @since 0.0.1
   * @async
   * @public
   * @param {string} pathToDir
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  public dirIsWritable(pathToDir: PathLike): Promise<true | Error>;

  //#endregion

  //#region file

  /**
   * @name fileIsExecutable
   * @description File can be executed by the calling process
   * @since 0.0.5
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  public fileIsExecutable(pathToFile: PathLike): Promise<true | Error>;
  /**
   * @name fileIsReadable
   * @description File is visible to the calling process
   * @since 0.0.1
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  public fileIsReadable(pathToFile: PathLike): Promise<true | Error>;
  /**
   * @name fileIsVisible
   * @description File is visible to the calling process
   * @since 0.0.5
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  public fileIsVisible(pathToFile: PathLike): Promise<true | Error>;
  /**
   * @name fileIsWritable
   * @description File can be written by the calling process
   * @since 0.0.1
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  public fileIsWritable(pathToFile: PathLike): Promise<true | Error>;
  /**
   * @name fileTruncate
   * @description Truncate a file to a specified length
   * @since 0.0.6
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @param {number=} length
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  public fileTruncate(pathToFile: PathLike, length?: number): Promise<true | Error>;

  //#endregion

  //#region read

  /**
   * @name readFileToString
   * @description Asynchronously reads the entire contents of a file into string.
   * @since 0.1.21
   * @async
   * @param {string|Buffer|URL} pathLike
   * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
   */
  public readFileToBase64(pathLike: string): Promise<string | Error>;

  /**
   * @name readFileToBuffer
   * @description Asynchronously reads the entire contents of a file into buffer.
   * @since 0.1.19
   * @async
   * @param {string|Buffer|URL} pathLike
   * @returns {Promise<Buffer|Error|{name: string, message: string, stack?: string}>}
   */
  public readFileToBuffer(pathLike: string): Promise<Buffer | Error>;

  /**
   * @name readFileToString
   * @description Asynchronously reads the entire contents of a file into string.
   * @since 0.1.7
   * @async
   * @param {string|Buffer|URL} pathLike
   * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
   */
  public readFileToString(pathLike: string): Promise<string | Error>;

  //#endregion

  //#region remove

  /**
   * @name remove
   * @description Removes a file or directory.
   * @since 0.1.1
   * @async
   * @public
   * @param {string} pathLike
   * @returns {Promise<undefined|Error|{name: string, message: string, stack?: string}>}
   */
  public remove(pathLike: string): Promise<undefined | Error>;

  //#endregion

  //#region path

  /**
   * @name fileExtension
   * @description Get file extension.
   * @since 0.1.1
   * @public
   * @param {string} path
   * @returns {string}
   */
  public fileExtension(path: string): string;

  /**
   * @name fileName
   * @description Return the file name without extension.
   * @since 0.1.1
   * @public
   * @param {string} path
   * @returns {string}
   */
  public fileName(path: string): string;

  /**
   * @name fileNameExt
   * @description Return the last portion of a path.
   * @since 0.1.1
   * @public
   * @param {string} path
   * @returns {string}
   */
  public fileNameExt(path: string): string;

  /**
   * @name filePath
   * @description Return the directory name of a path.
   * @since 0.1.1
   * @public
   * @param {string} path
   * @returns {string}
   */
  public filePath(path: string): string;

  /**
   * @name pathFrom
   * @description Join all arguments together and normalize the resulting path.
   * @since 0.1.3
   * @public
   * @param {string|Array.<string>} paths
   * @param {...string} morePaths
   * @returns {string}
   */
  public pathFrom(paths: string | string[], ...morePaths: string[]): string;

  //#endregion

  //#region status

  /**
   * @name getStatus
   * @description Get file status.
   * @since 0.0.11
   * @async
   * @public
   * @param {string|Buffer|URL} path
   * @returns {Promise<[fs.Stats|undefined],[Error|{name: string, message: string, stack?: string}]>}
   */
  public getStatus(path: PathLike): Promise<[Stats?, Error?]>;
  /**
   * @name isDirExists
   * @description Get directory status.
   * @since 0.0.11
   * @async
   * @public
   * @param {string|Buffer|URL} path
   * @returns {Promise<boolean>}
   */
  public isDirExists(path: PathLike): Promise<boolean>;
  /**
   * @name isFileExists
   * @description Get file status.
   * @since 0.0.11
   * @async
   * @public
   * @param {string|Buffer|URL} path
   * @returns {Promise<boolean>}
   */
  public isFileExists(path: PathLike): Promise<boolean>;
  /**
   * @name isPathExists
   * @description Get path status.
   * @since 0.0.11
   * @async
   * @public
   * @param {string|Buffer|URL} path
   * @returns {Promise<boolean>}
   */
  public isPathExists(path: PathLike): Promise<boolean>;

  //#endregion

  //#region write

  /**
   * @name writeFile
   * @description Asynchronously writes data to a file, replacing the file if it already exists.
   * @since 0.0.10
   * @async
   * @public
   * @param {string|Buffer|URL|FileHandle} filePath
   * @param {*=} data
   * @param {*|null|string=} options
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  public writeFile(
    filePath: PathLike,
    data: string,
    options?: { encoding?: string | null; mode?: string | number; flag?: string | number },
  ): Promise<true | Error>;

  /**
   * @name writeJSON
   * @description Asynchronously writes data to a file, replacing the file if it already exists.
   * @since 0.1.25
   * @async
   * @public
   * @param {string|Buffer|URL|FileHandle} filePath
   * @param {*} data
   * @param {*|null|string=} options
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  public writeJSON(
    filePath: PathLike,
    data: any,
    options?: { encoding?: string | null; mode?: string | number; flag?: string | number },
  ): Promise<true | Error>;

  //#endregion
}

//#endregion
