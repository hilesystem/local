import * as node_fs from 'node:fs';
import { RmOptions } from 'node:fs';

/**
 * @name createDirectory
 * @description Asynchronous create a directory.
 * @since 0.0.10
 * @async
 * @param {string|Buffer|URL} dirPath
 * @param {number|string=} mode
 * @param {boolean=} recursive
 * @returns {Promise<boolean|Error>}
 */
declare function createDirectory(dirPath: string | Buffer | URL, mode?: (number | string) | undefined, recursive?: boolean | undefined): Promise<boolean | Error>;

/**
 * @name createFile
 * @description Asynchronous create a file.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} pathLike
 * @param {number|string=} mode
 * @returns {Promise<boolean|undefined|Error>}
 */
declare function createFile(pathLike: string | Buffer | URL, mode?: string): Promise<boolean | undefined | Error>;

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
declare function dirIsEmpty(pathToDir: string | Buffer | URL, excludeSystemFiles?: boolean): Promise<boolean>;

/**
 * @name dirIsExecutable
 * @description Directory can be executed by the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error>}
 */
declare function dirIsExecutable(pathToDir: string | Buffer | URL): Promise<boolean | Error>;

/**
 * @name dirIsReadable
 * @description Directory is visible to the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error>}
 */
declare function dirIsReadable(pathToDir: string | Buffer | URL): Promise<boolean | Error>;

/**
 * @name dirIsVisible
 * @description Directory is visible to the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error>}
 */
declare function dirIsVisible(pathToDir: string | Buffer | URL): Promise<boolean | Error>;

/**
 * @name dirIsWritable
 * @description Directory can be written by the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error>}
 */
declare function dirIsWritable(pathToDir: string | Buffer | URL): Promise<boolean | Error>;

/**
 * @name hash
 * @description Calculate hash.
 * @since 0.2.3
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @param {string} algorithm
 * @returns {Promise<string|Error>}
 * @throws {TypeError} If algorithm is not supported.
 */
declare function hash(pathToFile: string | Buffer | URL, algorithm: string): Promise<string>;

/**
 * @name hashCrc32
 * @description CRC32.
 * @since 0.2.3
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<string|Error>}
 */
declare function hashCrc32(pathToFile: string | Buffer | URL): Promise<string>;

/**
 * @name hashMd5
 * @description MD5.
 * @since 0.2.3
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<string|Error>}
 */
declare function hashMd5(pathToFile: string | Buffer | URL): Promise<string>;

/**
 * @name hashMulti
 * @description Calculates multiple hashes.
 * @summary The objective of the "hashMulti" function is to calculate multiple hashes (CRC32, MD5, SHA-1, SHA-256, and SHA-512) for a given file path and return them as an object.
 * @since 1.1.1
 * @async
 * @param {string|Buffer|URL} [pathToFile] - A string, buffer, or URL representing the path to the file to be hashed.
 * @returns {Promise<{crc32: string, md5: string, sha1: string, sha256: string, sha512: string}>}
 * @throws {Error|TypeError}
 */
declare function hashMulti(pathToFile: string | Buffer | URL): Promise<{
    crc32: string;
    md5: string;
    sha1: string;
    sha256: string;
    sha512: string;
}>;

/**
 * @name hashSha1
 * @description SHA-1.
 * @since 0.2.3
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<string|Error>}
 */
declare function hashSha1(pathToFile: string | Buffer | URL): Promise<string | Error>;

/**
 * @name hashSha256
 * @description SHA-256.
 * @since 0.2.3
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<string|Error>}
 */
declare function hashSha256(pathToFile: string | Buffer | URL): Promise<string | Error>;

/**
 * @name hashSha512
 * @description SHA-512.
 * @since 0.2.6
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<string|Error>}
 */
declare function hashSha512(pathToFile: string | Buffer | URL): Promise<string | Error>;

/**
 * @name size
 * @description File size in bytes.
 * @since 0.2.3
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @param {boolean=} [asString=false]
 * @returns {Promise<number|string|Error>}
 */
declare function size(pathToFile: string | Buffer | URL, asString?: boolean): Promise<number | string | Error>;

/**
 * @name fileIsExecutable
 * @description File can be executed by the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error>}
 */
declare function fileIsExecutable(pathToFile: string | Buffer | URL): Promise<boolean | Error>;

/**
 * @name fileIsReadable
 * @description File is visible to the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error>}
 */
declare function fileIsReadable(pathToFile: string | Buffer | URL): Promise<boolean | Error>;

/**
 * @name fileIsVisible
 * @description File is visible to the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error>}
 */
declare function fileIsVisible(pathToFile: string | Buffer | URL): Promise<boolean | Error>;

/**
 * @name fileIsWritable
 * @description File can be written by the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error>}
 */
declare function fileIsWritable(pathToFile: string | Buffer | URL): Promise<boolean | Error>;

/**
 * @name fileTruncate
 * @description Truncate a file to a specified length
 * @since 0.0.6
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @param {number=} length
 * @returns {Promise<boolean|Error>}
 */
declare function fileTruncate(pathToFile: string | Buffer | URL, length?: number): Promise<boolean | Error>;

/**
 * @name listContents
 * @description Lists files and directories in path
 * @since 0.1.32
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @param {boolean} [ignoreJunk=true]
 * @returns {Promise<string[]|Error>}
 */
declare function listContents(pathToDir: string | Buffer | URL, ignoreJunk?: boolean): Promise<string[] | Error>;

/**
 * @name listDirectories
 * @description Lists directories in path
 * @since 0.1.32
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<string[]|Error>}
 */
declare function listDirectories(pathToDir: string | Buffer | URL): Promise<string[] | Error>;

/**
 * @name listFiles
 * @description Lists files in path
 * @since 0.1.32
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<string[]|Error>}
 */
declare function listFiles(pathToDir: string | Buffer | URL): Promise<string[] | Error>;

/**
 * @name move
 * @description Change the name or location of a file or directory.
 * @since 0.1.29
 * @param {string} pathFrom
 * @param {string} pathTo
 * @returns {Promise<boolean|Error>}
 */
declare function move(pathFrom: string, pathTo: string): Promise<boolean | Error>;

/**
 * @name absolutePathFrom
 * @description Join all arguments together and normalize the resulting path.
 * Creates absolute path from right to left until an absolute path is constructed.
 * @since 0.1.5
 * @param {string|string[]} paths
 * @param {...string} morePaths
 * @returns {string}
 */
declare function absolutePathFrom(paths: string | string[], ...morePaths: string[]): string;

/**
 * @name fileExtension
 * @description Get file extension.
 * @since 0.1.1
 * @param {string} path
 * @returns {string}
 */
declare function fileExtension(path: string): string;

/**
 * @name fileName
 * @description Return the file name without extension.
 * @since 0.1.1
 * @param {string} path
 * @returns {string}
 */
declare function fileName(path: string): string;

/**
 * @name fileNameExt
 * @description Return the last portion of a path.
 * @since 0.1.1
 * @param {string} path
 * @returns {string}
 */
declare function fileNameExt(path: string): string;

/**
 * @name filePath
 * @description Return the directory name of a path.
 * @since 0.1.1
 * @param {string} path
 * @returns {string}
 */
declare function filePath(path: string): string;

/**
 * @name pathFrom
 * @description Join all arguments together and normalize the resulting path.
 * @since 0.1.3
 * @param {string|Buffer|URL|string[]|Buffer[]|URL[]} paths
 * @param {...string} morePaths
 * @returns {string}
 */
declare function pathFrom(paths: string | Buffer | URL | string[] | Buffer[] | URL[], ...morePaths: string[]): string;

/**
 * @name readFileToBase64
 * @description Asynchronously reads the entire contents of a file into string.
 * @since 0.1.21
 * @async
 * @param {string|Buffer|URL} pathLike
 * @returns {Promise<string|Error>}
 */
declare function readFileToBase64(pathLike: string | Buffer | URL): Promise<string | Error>;

/**
 * @name readFileToBuffer
 * @description Asynchronously reads the entire contents of a file into buffer.
 * @since 0.1.19
 * @async
 * @param {string|Buffer|URL} pathLike
 * @returns {Promise<Buffer|Error>}
 */
declare function readFileToBuffer(pathLike: string | Buffer | URL): Promise<Buffer | Error>;

/**
 * @name readFileToString
 * @description Asynchronously reads the entire contents of a file into string.
 * @since 0.1.7
 * @async
 * @param {string|Buffer|URL} pathLike
 * @returns {Promise<string|Error>}
 */
declare function readFileToString(pathLike: string | Buffer | URL): Promise<string | Error>;

/**
 * @name remove
 * @description Removes a file or directory.
 * @since 0.1.1
 * @async
 * @param {string | Buffer | URL} pathLike
 * @returns {Promise<boolean|Error>}
 */
declare function remove(pathLike: string | Buffer | URL): Promise<boolean | Error>;

/**
 * @name removeNonBlocking
 * @description Non-blocking remove of a file or directory.
 * @since 0.1.18
 * @param {string|Buffer|URL} pathLike
 * @returns {void}
 */
declare function removeNonBlocking(pathLike: string | Buffer | URL): void;

/**
 * @name removeSilent
 * @description Removes files and directories (modeled on the standard POSIX rm utility).
 * @summary Minimum Node version 14.14.0
 * @since 0.1.36
 * @async
 * @param {string|Buffer|URL} pathLike
 * @param {RmOptions=} options
 * @returns {Promise<void>}
 */
declare function removeSilent(pathLike: string | Buffer | URL, options: RmOptions): Promise<void>;

/**
 * @name getLinkStatus
 * @description Get file status unless `path` refers to a symbolic link, in which case the link itself is stat-ed, not the file that it refers to.
 * @url http://man7.org/linux/man-pages/man2/lstat.2.html
 * @since 1.1.0
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<[import("node:fs").Stats|undefined, Error|undefined]>}
 */
declare function getLinkStatus(path: string | Buffer | URL): Promise<[node_fs.Stats | undefined, Error | undefined]>;

/**
 * @name getStatus
 * @description Get file status.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<[import("node:fs").Stats|undefined, Error|undefined]>}
 */
declare function getStatus(path: string | Buffer | URL): Promise<[node_fs.Stats | undefined, Error | undefined]>;

/**
 * @name isDirExists
 * @description Get directory status.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<boolean>}
 */
declare function isDirExists(path: string | Buffer | URL): Promise<boolean>;

/**
 * @name isFileExists
 * @description Get file status.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<boolean>}
 */
declare function isFileExists(path: string | Buffer | URL): Promise<boolean>;

/**
 * @name isPathExists
 * @description Get path status.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<boolean>}
 */
declare function isPathExists(path: string | Buffer | URL): Promise<boolean>;

/**
 * @name writeFile
 * @description Asynchronously writes data to a file, replacing the file if it already exists.
 * @since 0.0.10
 * @async
 * @param {string|Buffer|URL} filePath
 * @param {string} data
 * @param {*|null|string=} options
 * @returns {Promise<boolean|Error>}
 * @example
 * const controller = new AbortController();
 * const { signal } = controller;
 * const data = new Uint8Array(Buffer.from('Hello Node.js'));
 * (async () => {
 *  try {
 *     await writeFile('message.txt', data, { signal });
 *   } catch (error) {
 *     // When a request is aborted - error is an AbortError
 *   }
 * })();
 * // When the request should be aborted
 * controller.abort();
 */
declare function writeFile(filePath: string | Buffer | URL, data: any, options?: any | null | string): Promise<boolean | Error>;

/**
 * @name writeFileTail
 * @description Asynchronously writes data to the end of a file.
 * @since 1.0.1
 * @async
 * @param {string|Buffer|URL} filePath
 * @param {string} data
 * @param {*|null|string=} options
 * @returns {Promise<boolean|Error>}
 */
declare function writeFileTail(filePath: string | Buffer | URL, data: any, options?: any | null | string): Promise<boolean | Error>;

/**
 * @name writeJson
 * @description Asynchronously writes data to a file, replacing the file if it already exists.
 * @since 0.1.25
 * @async
 * @param {string|Buffer|URL} filePath
 * @param {*} data
 * @param {*|null|string=} options
 * @param {{sort: boolean, space: number|string}=} configuration
 * @returns {Promise<boolean|Error>}
 */
declare function writeJson(filePath: string | Buffer | URL, data: any, options: any, configuration: {
    sort: boolean;
    space: number | string;
} | undefined): Promise<boolean | Error>;

declare class HileSystemLocal {
    /**
     * @name absolutePathFrom
     * @description Join all arguments together and normalize the resulting path.
     * Creates absolute path from right to left until an absolute path is constructed.
     * @since 0.1.5
     * @public
     * @param {string|string[]} paths
     * @param {...string} morePaths
     * @returns {string}
     */
    absolutePathFrom: typeof absolutePathFrom;
    /**
     * @name createDirectory
     * @description Asynchronous create a directory.
     * @since 0.0.10
     * @async
     * @public
     * @param {string|Buffer|URL} dirPath
     * @param {number|string=} mode
     * @param {boolean=} recursive
     * @returns {Promise<boolean|Error>}
     */
    createDirectory: typeof createDirectory;
    /**
     * @name createFile
     * @description Asynchronous create a file.
     * @since 0.0.11
     * @async
     * @public
     * @param {string|Buffer|URL} pathLike
     * @param {number|string=} mode
     * @returns {Promise<boolean|Error>}
     */
    createFile: typeof createFile;
    /**
     * @name dirIsExecutable
     * @description Directory can be executed by the calling process
     * @since 0.0.5
     * @async
     * @public
     * @param {string} pathToDir
     * @returns {Promise<boolean|Error>}
     */
    dirIsExecutable: typeof dirIsExecutable;
    /**
     * @name dirIsReadable
     * @description Directory is visible to the calling process
     * @since 0.0.1
     * @async
     * @public
     * @param {string} pathToDir
     * @returns {Promise<boolean|Error>}
     */
    dirIsReadable: typeof dirIsReadable;
    /**
     * @name dirIsVisible
     * @description Directory is visible to the calling process
     * @since 0.0.5
     * @async
     * @public
     * @param {string} pathToDir
     * @returns {Promise<boolean|Error>}
     */
    dirIsVisible: typeof dirIsVisible;
    /**
     * @name dirIsWritable
     * @description Directory can be written by the calling process
     * @since 0.0.1
     * @async
     * @public
     * @param {string} pathToDir
     * @returns {Promise<boolean|Error>}
     */
    dirIsWritable: typeof dirIsWritable;
    /**
     * @name dirIsEmpty
     * @description Check if a directory is empty
     * @since 0.1.33
     * @async
     * @public
     * @param {string|Buffer|URL} pathToDir
     * @param {boolean=} excludeSystemFiles
     * @returns {Promise<boolean>}
     * @throws {Error} If path is not a dir or is not readable.
     */
    dirIsEmpty: typeof dirIsEmpty;
    /**
     * @name getLinkStatus
     * @description Get file status unless `path` refers to a symbolic link, in which case the link itself is stat-ed, not the file that it refers to.
     * @url http://man7.org/linux/man-pages/man2/lstat.2.html
     * @since 1.1.0
     * @async
     * @param {string|Buffer|URL} path
     * @returns {Promise<Array.<(object|undefined|Error)>>}
     */
    getLinkStatus: typeof getLinkStatus;
    /**
     * @name getStatus
     * @description Get file status.
     * @since 0.0.11
     * @async
     * @public
     * @param {string|Buffer|URL} path
     * @returns {Promise<Array.<(object|undefined|Error)>>}
     */
    getStatus: typeof getStatus;
    /**
     * @name isDirExists
     * @description Get directory status.
     * @since 0.0.11
     * @async
     * @public
     * @param {string|Buffer|URL} path
     * @returns {Promise<boolean>}
     */
    isDirExists: typeof isDirExists;
    /**
     * @name isFileExists
     * @description Get file status.
     * @since 0.0.11
     * @async
     * @public
     * @param {string|Buffer|URL} path
     * @returns {Promise<boolean>}
     */
    isFileExists: typeof isFileExists;
    /**
     * @name isPathExists
     * @description Get path status.
     * @since 0.0.11
     * @async
     * @public
     * @param {string|Buffer|URL} path
     * @returns {Promise<boolean>}
     */
    isPathExists: typeof isPathExists;
    /**
     * @name fileExtension
     * @description Get file extension.
     * @since 0.1.1
     * @public
     * @param {string} path
     * @returns {string}
     */
    fileExtension: typeof fileExtension;
    /**
     * @name fileName
     * @description Return the file name without extension.
     * @since 0.1.1
     * @public
     * @param {string} path
     * @returns {string}
     */
    fileName: typeof fileName;
    /**
     * @name fileNameExt
     * @description Return the last portion of a path.
     * @since 0.1.1
     * @public
     * @param {string} path
     * @returns {string}
     */
    fileNameExt: typeof fileNameExt;
    /**
     * @name filePath
     * @description Return the directory name of a path.
     * @since 0.1.1
     * @public
     * @param {string} path
     * @returns {string}
     */
    filePath: typeof filePath;
    /**
     * @name fileIsExecutable
     * @description File can be executed by the calling process
     * @since 0.0.5
     * @async
     * @public
     * @param {string|Buffer|URL} pathToFile
     * @returns {Promise<boolean|Error>}
     */
    fileIsExecutable: typeof fileIsExecutable;
    /**
     * @name fileIsReadable
     * @description File is visible to the calling process
     * @since 0.0.1
     * @async
     * @public
     * @param {string|Buffer|URL} pathToFile
     * @returns {Promise<boolean|Error>}
     */
    fileIsReadable: typeof fileIsReadable;
    /**
     * @name fileIsVisible
     * @description File is visible to the calling process
     * @since 0.0.5
     * @async
     * @public
     * @param {string|Buffer|URL} pathToFile
     * @returns {Promise<boolean|Error>}
     */
    fileIsVisible: typeof fileIsVisible;
    /**
     * @name fileIsWritable
     * @description File can be written by the calling process
     * @since 0.0.1
     * @async
     * @public
     * @param {string|Buffer|URL} pathToFile
     * @returns {Promise<boolean|Error>}
     */
    fileIsWritable: typeof fileIsWritable;
    /**
     * @name fileTruncate
     * @description Truncate a file to a specified length
     * @since 0.0.6
     * @async
     * @public
     * @param {string|Buffer|URL} pathToFile
     * @param {number=} length
     * @returns {Promise<boolean|Error>}
     */
    fileTruncate: typeof fileTruncate;
    /**
     * @name hash
     * @description Calculate hash.
     * @since 0.2.3
     * @async
     * @public
     * @param {string|Buffer|URL} pathToFile
     * @param {string} algorithm
     * @returns {Promise<string|Error>}
     * @throws {TypeError} If algorithm is not supported.
     */
    hash: typeof hash;
    /**
     * @name hashCrc32
     * @description CRC32.
     * @since 0.2.3
     * @async
     * @public
     * @param {string|Buffer|URL} pathToFile
     * @returns {Promise<string|Error>}
     */
    hashCrc32: typeof hashCrc32;
    /**
     * @name hashMd5
     * @description MD5.
     * @since 0.2.3
     * @async
     * @public
     * @param {string|Buffer|URL} pathToFile
     * @returns {Promise<string|Error>}
     */
    hashMd5: typeof hashMd5;
    /**
     * @name hashMulti
     * @description Calculates multiple hashes.
     * @since 1.1.1
     * @async
     * @public
     * @param {string|Buffer|URL} [pathToFile] - A string, buffer, or URL representing the path to the file to be hashed.
     * @returns {Promise<{crc32: string, md5: string, sha1: string, sha256: string, sha512: string}>}
     * @throws {Error|TypeError}
     */
    hashMulti: typeof hashMulti;
    /**
     * @name hashSha1
     * @description SHA-1.
     * @since 0.2.3
     * @async
     * @public
     * @param {string|Buffer|URL} pathToFile
     * @returns {Promise<string|Error>}
     */
    hashSha1: typeof hashSha1;
    /**
     * @name hashSha256
     * @description SHA-256.
     * @since 0.2.3
     * @async
     * @public
     * @param {string|Buffer|URL} pathToFile
     * @returns {Promise<string|Error>}
     */
    hashSha256: typeof hashSha256;
    /**
     * @name hashSha512
     * @description SHA-512.
     * @since 0.2.6
     * @async
     * @public
     * @param {string|Buffer|URL} pathToFile
     * @returns {Promise<string|Error>}
     */
    hashSha512: typeof hashSha512;
    /**
     * @name listContents
     * @description Lists files and directories in path
     * @since 0.1.32
     * @async
     * @param {string|Buffer|URL} pathToDir
     * @returns {Promise<string[]|Error>}
     */
    listContents: typeof listContents;
    /**
     * @name listDirectories
     * @description Lists directories in path
     * @since 0.1.32
     * @async
     * @param {string|Buffer|URL} pathToDir
     * @returns {Promise<string[]|Error>}
     */
    listDirectories: typeof listDirectories;
    /**
     * @name listFiles
     * @description Lists files in path
     * @since 0.1.32
     * @async
     * @param {string|Buffer|URL} pathToDir
     * @returns {Promise<string[]|Error>}
     */
    listFiles: typeof listFiles;
    /**
     * @name move
     * @description Change the name or location of a file or directory.
     * @since 0.1.29
     * @public
     * @param {string} pathFrom
     * @param {string} pathTo
     * @returns {Promise<boolean|Error>}
     */
    move: typeof move;
    /**
     * @name pathFrom
     * @description Join all arguments together and normalize the resulting path.
     * @since 0.1.3
     * @public
     * @param {string|string[]} paths
     * @param {...string} morePaths
     * @returns {string}
     */
    pathFrom: typeof pathFrom;
    /**
     * @name readFileToBase64
     * @description Asynchronously reads the entire contents of a file into string.
     * @since 0.1.21
     * @async
     * @param {string|Buffer|URL} pathLike
     * @returns {Promise<string|Error>}
     */
    readFileToBase64: typeof readFileToBase64;
    /**
     * @name readFileToBuffer
     * @description Asynchronously reads the entire contents of a file into buffer.
     * @since 0.1.19
     * @async
     * @param {string|Buffer|URL} pathLike
     * @returns {Promise<Buffer|Error>}
     */
    readFileToBuffer: typeof readFileToBuffer;
    /**
     * @name readFileToString
     * @description Asynchronously reads the entire contents of a file into string.
     * @since 0.1.7
     * @async
     * @param {string|Buffer|URL} pathLike
     * @returns {Promise<string|Error>}
     */
    readFileToString: typeof readFileToString;
    /**
     * @name remove
     * @description Removes a file or directory.
     * @since 0.1.1
     * @async
     * @public
     * @param {string} pathLike
     * @returns {Promise<undefined|Error>}
     */
    remove: typeof remove;
    /**
     * @name removeNonBlocking
     * @description Non-blocking remove of a file or directory.
     * @since 0.1.18
     * @public
     * @param {string} pathLike
     * @returns {void}
     */
    removeNonBlocking: typeof removeNonBlocking;
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
    removeSilent: typeof removeSilent;
    /**
     * @name size
     * @description File size in bytes.
     * @since 0.2.3
     * @async
     * @public
     * @param {string|Buffer|URL} pathToFile
     * @param {boolean=} [asString=false]
     * @returns {Promise<number|string|Error>}
     */
    size: typeof size;
    /**
     * @name writeFile
     * @description Asynchronously writes data to a file, replacing the file if it already exists.
     * @since 0.0.10
     * @async
     * @public
     * @param {string|Buffer|URL} filePath
     * @param {string} data
     * @param {*|null|string=} options
     * @returns {Promise<boolean|Error>}
     */
    writeFile: typeof writeFile;
    /**
     * @name writeFileTail
     * @description  Asynchronously writes data to the end of a file.
     * @since 1.0.1
     * @async
     * @public
     * @param {string|Buffer|URL} filePath
     * @param {string} data
     * @param {*|null|string=} options
     * @returns {Promise<boolean|Error>}
     */
    writeFileTail: typeof writeFileTail;
    /**
     * @name writeJson
     * @description Asynchronously writes data to a file, replacing the file if it already exists.
     * @since 0.1.25
     * @async
     * @public
     * @param {string|Buffer|URL} filePath
     * @param {*} data
     * @param {*|null|string=} options
     * @returns {Promise<boolean|Error>}
     */
    writeJson: typeof writeJson;
}

export { HileSystemLocal, absolutePathFrom, createDirectory, createFile, dirIsEmpty, dirIsExecutable, dirIsReadable, dirIsVisible, dirIsWritable, fileExtension, fileIsExecutable, fileIsReadable, fileIsVisible, fileIsWritable, fileName, fileNameExt, filePath, fileTruncate, getLinkStatus, getStatus, hash, hashCrc32, hashMd5, hashMulti, hashSha1, hashSha256, hashSha512, isDirExists, isFileExists, isPathExists, listContents, listDirectories, listFiles, move, pathFrom, readFileToBase64, readFileToBuffer, readFileToString, remove, removeNonBlocking, removeSilent, size, writeFile, writeFileTail, writeJson };
