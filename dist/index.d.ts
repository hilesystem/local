import type { PathLike, Stats } from "fs";

export interface RmOptions {
  /**
   * When `true`, exceptions will be ignored if `path` does not exist.
   * @default false
   */
  force?: boolean | undefined;
  /**
   * If an `EBUSY`, `EMFILE`, `ENFILE`, `ENOTEMPTY`, or
   * `EPERM` error is encountered, Node.js will retry the operation with a linear
   * backoff wait of `retryDelay` ms longer on each try. This option represents the
   * number of retries. This option is ignored if the `recursive` option is not
   * `true`.
   * @default 0
   */
  maxRetries?: number | undefined;
  /**
   * If `true`, perform a recursive directory removal. In
   * recursive mode, operations are retried on failure.
   * @default false
   */
  recursive?: boolean | undefined;
  /**
   * The amount of time in milliseconds to wait between retries.
   * This option is ignored if the `recursive` option is not `true`.
   * @default 100
   */
  retryDelay?: number | undefined;
}

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

/**
 * @name dirIsEmpty
 * @description Check If a directory is empty
 * @since 0.1.33
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @param {boolean=} excludeSystemFiles
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export function dirIsEmpty(pathToDir: PathLike, excludeSystemFiles: boolean): Promise<boolean | Error>;

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

//#region info

/**
 * @name hash
 * @description Calculate hash.
 * @since 0.2.3
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @param {string} algorithm
 * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
 * @throws {TypeError} If algorithm is not supported.
 */
export function hash(pathToFile: PathLike, algorithm: string): Promise<string | Error>;

/**
 * @name hashCrc32
 * @description CRC32.
 * @since 0.2.3
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
 */
export function hashCrc32(pathToFile: PathLike): Promise<string | Error>;

/**
 * @name hashMd5
 * @description MD5.
 * @since 0.2.3
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
 */
export function hashMd5(pathToFile: PathLike): Promise<string | Error>;

/**
 * @name hashSha1
 * @description SHA-1.
 * @since 0.2.3
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
 */
export function hashSha1(pathToFile: PathLike): Promise<string | Error>;

/**
 * @name hashSha256
 * @description SHA-256.
 * @since 0.2.3
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
 */
export function hashSha256(pathToFile: PathLike): Promise<string | Error>;

/**
 * @name size
 * @description File size in bytes.
 * @since 0.2.3
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @param {boolean=} [asString=false]
 * @returns {Promise<number|string|Error|{name: string, message: string, stack?: string}>}
 */
export function size(pathToFile: PathLike, asString?: boolean): Promise<number | string | Error>;

//#endregion

//#region list

/**
 * @name listContents
 * @description Lists files and directories in path
 * @since 0.1.32
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @param {boolean} [ignoreJunk=true]
 * @returns {Promise<Array.<string>|Error|{name: string, message: string, stack?: string}>}
 */
export function listContents(pathToDir: PathLike, ignoreJunk?: boolean): Promise<string[] | Error>;

/**
 * @name listDirectories
 * @description Lists directories in path
 * @since 0.1.32
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<Array.<string>|Error|{name: string, message: string, stack?: string}>}
 */
export function listDirectories(pathToDir: PathLike): Promise<string[] | Error>;

/**
 * @name listFiles
 * @description Lists files in path
 * @since 0.1.32
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<Array.<string>|Error|{name: string, message: string, stack?: string}>}
 */
export function listFiles(pathToDir: PathLike): Promise<string[] | Error>;

//#endregion

//#region move

/**
 * @name move
 * @description Change the name or location of a file or directory.
 * @since 0.1.29
 * @param {string} pathFrom
 * @param {string} pathTo
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export function move(pathFrom: PathLike, pathTo: PathLike): Promise<true | Error>;

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

/**
 * @name removeSilent
 * @description Removes files and directories (modeled on the standard POSIX rm utility).
 * @summary Minimum Node version 14.14.0
 * @since 0.1.36
 * @async
 * @param {string|Buffer|URL} pathLike
 * @param {object=} options
 * @returns {Promise<void>}
 */
export function removeSilent(pathLike: string, options?: RmOptions): Promise<void>;

//#endregion

//#region status

/**
 * @name getLinkStatus
 * @description Get file status unless `path` refers to a symbolic link, in which case the link itself is stat-ed, not the file that it refers to.
 * @url http://man7.org/linux/man-pages/man2/lstat.2.html
 * @since 1.1.0
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<Array.<(object|undefined|Error|{name: string, message: string, stack?: string})>>}
 */
export function getLinkStatus(path: PathLike): Promise<[Stats?, Error?]>;

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
 * @name writeFileTail
 * @description Asynchronously writes data to the end of a file.
 * @since 1.0.1
 * @async
 * @param {string|Buffer|URL|FileHandle} filePath
 * @param {string} data
 * @param {*|null|string=} options
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export function writeFileTail(
  filePath: PathLike,
  data: string,
  options?: { encoding?: string | null; mode?: string | number; flag?: string | number },
): Promise<true | Error>;

/**
 * @name writeJSON
 * @description Asynchronously writes data to a file, replacing the file if it already exists.
 * @since 0.1.25
 * @async
 * @param {string|Buffer|URL} filePath
 * @param {*} data
 * @param {*|null|string=} options
 * @param {{sort: boolean, space: number|string}=} configuration
 * @returns {Promise<boolean|Error|{name: string, message: string, stack: string}>}
 */
export function writeJSON(
  filePath: PathLike,
  data: any,
  options?: { encoding?: string | null; mode?: string | number; flag?: string | number },
  configuration?: { sort?: boolean; space?: number | string },
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

  /**
   * @name dirIsEmpty
   * @description Check If a directory is empty
   * @since 0.1.33
   * @async
   * @public
   * @param {string|Buffer|URL} pathToDir
   * @param {boolean=} excludeSystemFiles
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  public dirIsEmpty(pathToDir: PathLike, excludeSystemFiles: boolean): Promise<boolean | Error>;

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

  //#region info

  /**
   * @name hash
   * @description Calculate hash.
   * @since 0.2.3
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @param {string} algorithm
   * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
   * @throws {TypeError} If algorithm is not supported.
   */
  public hash(pathToFile: PathLike, algorithm: string): Promise<string | Error>;

  /**
   * @name hashCrc32
   * @description CRC32.
   * @since 0.2.3
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
   */
  public hashCrc32(pathToFile: PathLike): Promise<string | Error>;

  /**
   * @name hashMd5
   * @description MD5.
   * @since 0.2.3
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
   */
  public hashMd5(pathToFile: PathLike): Promise<string | Error>;

  /**
   * @name hashSha1
   * @description SHA-1.
   * @since 0.2.3
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
   */
  public hashSha1(pathToFile: PathLike): Promise<string | Error>;

  /**
   * @name hashSha256
   * @description SHA-256.
   * @since 0.2.3
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
   */
  public hashSha256(pathToFile: PathLike): Promise<string | Error>;

  /**
   * @name size
   * @description File size in bytes.
   * @since 0.2.3
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @param {boolean=} [asString=false]
   * @returns {Promise<number|string|Error|{name: string, message: string, stack?: string}>}
   */
  public size(pathToFile: PathLike, asString?: boolean): Promise<number | string | Error>;

  //#endregion

  //#region list

  /**
   * @name listContents
   * @description Lists files and directories in path
   * @since 0.1.32
   * @async
   * @param {string|Buffer|URL} pathToDir
   * @param {boolean} [ignoreJunk=true]
   * @returns {Promise<Array.<string>|Error|{name: string, message: string, stack?: string}>}
   */
  public listContents(pathToDir: PathLike, ignoreJunk?: boolean): Promise<string[] | Error>;

  /**
   * @name listDirectories
   * @description Lists directories path
   * @since 0.1.32
   * @async
   * @public
   * @param {string|Buffer|URL} pathToDir
   * @returns {Promise<Array.<string>|Error|{name: string, message: string, stack?: string}>}
   */
  public listDirectories(pathToDir: PathLike): Promise<string[] | Error>;

  /**
   * @name listFiles
   * @description Lists files path
   * @since 0.1.32
   * @async
   * @public
   * @param {string|Buffer|URL} pathToDir
   * @returns {Promise<Array.<string>|Error|{name: string, message: string, stack?: string}>}
   */
  public listFiles(pathToDir: PathLike): Promise<string[] | Error>;

  //#endregion

  //#region move

  /**
   * @name move
   * @description Change the name or location of a file or directory.
   * @since 0.1.29
   * @async
   * @public
   * @param {string} pathFrom
   * @param {string} pathTo
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  public move(pathFrom: PathLike, pathTo: PathLike): Promise<true | Error>;

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
   * @name getLinkStatus
   * @description Get file status unless `path` refers to a symbolic link, in which case the link itself is stat-ed, not the file that it refers to.
   * @url http://man7.org/linux/man-pages/man2/lstat.2.html
   * @since 1.1.0
   * @async
   * @param {string|Buffer|URL} path
   * @returns {Promise<Array.<(object|undefined|Error|{name: string, message: string, stack?: string})>>}
   */
  public getLinkStatus(path: PathLike): Promise<[Stats?, Error?]>;
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
   * @name writeFileTail
   * @description Asynchronously writes data to the end of a file.
   * @since 1.0.1
   * @async
   * @public
   * @param {string|Buffer|URL|FileHandle} filePath
   * @param {*=} data
   * @param {*|null|string=} options
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  public writeFileTail(
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
   * @param {string|Buffer|URL} filePath
   * @param {*} data
   * @param {*|null|string=} options
   * @param {{sort: boolean, space: number|string}=} configuration
   * @returns {Promise<boolean|Error|{name: string, message: string, stack: string}>}
   */
  public writeJSON(
    filePath: PathLike,
    data: any,
    options?: { encoding?: string | null; mode?: string | number; flag?: string | number },
    configuration?: { sort?: boolean; space?: number | string },
  ): Promise<true | Error>;

  //#endregion
}

//#endregion
