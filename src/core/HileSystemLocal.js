import { absolutePathFrom } from "./path/absolutePathFrom.js";

import { createDirectory } from "./create/createDirectory.js";
import { createFile } from "./create/createFile.js";

import { dirIsExecutable } from "./dir/dirIsExecutable.js";
import { dirIsReadable } from "./dir/dirIsReadable.js";
import { dirIsVisible } from "./dir/dirIsVisible.js";
import { dirIsWritable } from "./dir/dirIsWritable.js";
import { dirIsEmpty } from "./dir/dirIsEmpty.js";

import { fileExtension } from "./path/fileExtension.js";
import { fileIsExecutable } from "./file/fileIsExecutable.js";
import { fileIsReadable } from "./file/fileIsReadable.js";
import { fileIsVisible } from "./file/fileIsVisible.js";
import { fileIsWritable } from "./file/fileIsWritable.js";
import { fileName } from "./path/fileName.js";
import { fileNameExt } from "./path/fileNameExt.js";
import { filePath } from "./path/filePath.js";
import { fileTruncate } from "./file/fileTruncate.js";

import { listContents } from "./list/contents.js";
import { listDirectories } from "./list/directories.js";
import { listFiles } from "./list/files.js";

import { getLinkStatus } from "./status/getLinkStatus.js";
import { getStatus } from "./status/getStatus.js";

import { isDirExists } from "./status/isDirExists.js";
import { isFileExists } from "./status/isFileExists.js";
import { isPathExists } from "./status/isPathExists.js";

import { move } from "./move/move.js";

import { pathFrom } from "./path/pathFrom.js";

import { readFileToBase64 } from "./read/readFileToBase64.js";
import { readFileToBuffer } from "./read/readFileToBuffer.js";
import { readFileToString } from "./read/readFileToString.js";
import { remove } from "./remove/remove.js";
import { removeNonBlocking } from "./remove/removeNonBlocking.js";
import { removeSilent } from "./remove/removeSilent.js";

import { writeFile } from "./write/writeFile.js";
import { writeFileTail } from "./write/writeFileTail.js";
import { writeJSON } from "./write/writeJSON.js";

import { hash } from "./info/hash.js";
import { hashCrc32 } from "./info/hash-crc32.js";
import { hashMd5 } from "./info/hash-md5.js";
import { hashSha1 } from "./info/hash-sha1.js";
import { hashSha256 } from "./info/hash-sha256.js";
import { hashSha512 } from "./info/hash-sha512.js";

import { size } from "./info/size.js";

export class HileSystemLocal {
  /**
   * @name absolutePathFrom
   * @description Join all arguments together and normalize the resulting path.
   * reates absolute path from right to left until an absolute path is constructed.
   * @since 0.1.5
   * @public
   * @param {string|Array.<string>} paths
   * @param {...string} morePaths
   * @returns {string}
   */
  absolutePathFrom = absolutePathFrom;
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
  createDirectory = createDirectory;
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
  createFile = createFile;
  /**
   * @name dirIsExecutable
   * @description Directory can be executed by the calling process
   * @since 0.0.5
   * @async
   * @public
   * @param {string} pathToDir
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  dirIsExecutable = dirIsExecutable;
  /**
   * @name dirIsReadable
   * @description Directory is visible to the calling process
   * @since 0.0.1
   * @async
   * @public
   * @param {string} pathToDir
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  dirIsReadable = dirIsReadable;
  /**
   * @name dirIsVisible
   * @description Directory is visible to the calling process
   * @since 0.0.5
   * @async
   * @public
   * @param {string} pathToDir
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  dirIsVisible = dirIsVisible;
  /**
   * @name dirIsWritable
   * @description Directory can be written by the calling process
   * @since 0.0.1
   * @async
   * @public
   * @param {string} pathToDir
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  dirIsWritable = dirIsWritable;
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
  dirIsEmpty = dirIsEmpty;
  /**
   * @name getLinkStatus
   * @description Get file status unless `path` refers to a symbolic link, in which case the link itself is stat-ed, not the file that it refers to.
   * @url http://man7.org/linux/man-pages/man2/lstat.2.html
   * @since 1.1.0
   * @async
   * @param {string|Buffer|URL} path
   * @returns {Promise<Array.<(object|undefined|Error|{name: string, message: string, stack?: string})>>}
   */
  getLinkStatus = getLinkStatus;
  /**
   * @name getStatus
   * @description Get file status.
   * @since 0.0.11
   * @async
   * @public
   * @param {string|Buffer|URL} path
   * @returns {Promise<Array.<(object|undefined|Error|{name: string, message: string, stack?: string})>>}
   */
  getStatus = getStatus;
  /**
   * @name isDirExists
   * @description Get directory status.
   * @since 0.0.11
   * @async
   * @public
   * @param {string|Buffer|URL} path
   * @returns {Promise<boolean>}
   */
  isDirExists = isDirExists;
  /**
   * @name isFileExists
   * @description Get file status.
   * @since 0.0.11
   * @async
   * @public
   * @param {string|Buffer|URL} path
   * @returns {Promise<boolean>}
   */
  isFileExists = isFileExists;
  /**
   * @name isPathExists
   * @description Get path status.
   * @since 0.0.11
   * @async
   * @public
   * @param {string|Buffer|URL} path
   * @returns {Promise<boolean>}
   */
  isPathExists = isPathExists;
  /**
   * @name fileExtension
   * @description Get file extension.
   * @since 0.1.1
   * @public
   * @param {string} path
   * @returns {string}
   */
  fileExtension = fileExtension;
  /**
   * @name fileName
   * @description Return the file name without extension.
   * @since 0.1.1
   * @public
   * @param {string} path
   * @returns {string}
   */
  fileName = fileName;
  /**
   * @name fileNameExt
   * @description Return the last portion of a path.
   * @since 0.1.1
   * @public
   * @param {string} path
   * @returns {string}
   */
  fileNameExt = fileNameExt;
  /**
   * @name filePath
   * @description Return the directory name of a path.
   * @since 0.1.1
   * @public
   * @param {string} path
   * @returns {string}
   */
  filePath = filePath;
  /**
   * @name fileIsExecutable
   * @description File can be executed by the calling process
   * @since 0.0.5
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  fileIsExecutable = fileIsExecutable;
  /**
   * @name fileIsReadable
   * @description File is visible to the calling process
   * @since 0.0.1
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  fileIsReadable = fileIsReadable;
  /**
   * @name fileIsVisible
   * @description File is visible to the calling process
   * @since 0.0.5
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  fileIsVisible = fileIsVisible;
  /**
   * @name fileIsWritable
   * @description File can be written by the calling process
   * @since 0.0.1
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  fileIsWritable = fileIsWritable;
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
  fileTruncate = fileTruncate;
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
  hash = hash;
  /**
   * @name hashCrc32
   * @description CRC32.
   * @since 0.2.3
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
   */
  hashCrc32 = hashCrc32;
  /**
   * @name hashMd5
   * @description MD5.
   * @since 0.2.3
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
   */
  hashMd5 = hashMd5;
  /**
   * @name hashSha1
   * @description SHA-1.
   * @since 0.2.3
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
   */
  hashSha1 = hashSha1;
  /**
   * @name hashSha256
   * @description SHA-256.
   * @since 0.2.3
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
   */
  hashSha256 = hashSha256;
  /**
   * @name hashSha512
   * @description SHA-512.
   * @since 0.2.6
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
   */
  hashSha512 = hashSha512;
  /**
   * @name listContents
   * @description Lists files and directories in path
   * @since 0.1.32
   * @async
   * @param {string|Buffer|URL} pathToDir
   * @returns {Promise<Array.<string>|Error|{name: string, message: string, stack?: string}>}
   */
  listContents = listContents;
  /**
   * @name listDirectories
   * @description Lists directories in path
   * @since 0.1.32
   * @async
   * @param {string|Buffer|URL} pathToDir
   * @returns {Promise<Array.<string>|Error|{name: string, message: string, stack?: string}>}
   */
  listDirectories = listDirectories;
  /**
   * @name listFiles
   * @description Lists files in path
   * @since 0.1.32
   * @async
   * @param {string|Buffer|URL} pathToDir
   * @returns {Promise<Array.<string>|Error|{name: string, message: string, stack?: string}>}
   */
  listFiles = listFiles;
  /**
   * @name move
   * @description Change the name or location of a file or directory.
   * @since 0.1.29
   * @public
   * @param {string} pathFrom
   * @param {string} pathTo
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  move = move;
  /**
   * @name pathFrom
   * @description Join all arguments together and normalize the resulting path.
   * @since 0.1.3
   * @public
   * @param {string|Array.<string>} paths
   * @param {...string} morePaths
   * @returns {string}
   */
  pathFrom = pathFrom;
  /**
   * @name readFileToBase64
   * @description Asynchronously reads the entire contents of a file into string.
   * @since 0.1.21
   * @async
   * @param {string|Buffer|URL} pathLike
   * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
   */
  readFileToBase64 = readFileToBase64;
  /**
   * @name readFileToBuffer
   * @description Asynchronously reads the entire contents of a file into buffer.
   * @since 0.1.19
   * @async
   * @param {string|Buffer|URL} pathLike
   * @returns {Promise<Buffer|Error|{name: string, message: string, stack?: string}>}
   */
  readFileToBuffer = readFileToBuffer;
  /**
   * @name readFileToString
   * @description Asynchronously reads the entire contents of a file into string.
   * @since 0.1.7
   * @async
   * @param {string|Buffer|URL} pathLike
   * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
   */
  readFileToString = readFileToString;
  /**
   * @name remove
   * @description Removes a file or directory.
   * @since 0.1.1
   * @async
   * @public
   * @param {string} pathLike
   * @returns {Promise<undefined|Error|{name: string, message: string, stack?: string}>}
   */
  remove = remove;
  /**
   * @name removeNonBlocking
   * @description Non-blocking remove of a file or directory.
   * @since 0.1.18
   * @public
   * @param {string} pathLike
   * @returns {void}
   */
  removeNonBlocking = removeNonBlocking;
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
  removeSilent = removeSilent;
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
  size = size;
  /**
   * @name writeFile
   * @description Asynchronously writes data to a file, replacing the file if it already exists.
   * @since 0.0.10
   * @async
   * @public
   * @param {string|Buffer|URL} filePath
   * @param {string} data
   * @param {*|null|string=} options
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  writeFile = writeFile;
  /**
   * @name writeFileTail
   * @description  Asynchronously writes data to the end of a file.
   * @since 1.0.1
   * @async
   * @public
   * @param {string|Buffer|URL} filePath
   * @param {string} data
   * @param {*|null|string=} options
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  writeFileTail = writeFileTail;
  /**
   * @name writeJSON
   * @description Asynchronously writes data to a file, replacing the file if it already exists.
   * @since 0.1.25
   * @async
   * @public
   * @param {string|Buffer|URL} filePath
   * @param {*} data
   * @param {*|null|string=} options
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  writeJSON = writeJSON;
}
