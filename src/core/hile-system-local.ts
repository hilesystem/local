import { absolutePathFrom } from "./path/absolute-path-from";

import { createDirectory } from "./create/create-directory";
import { createFile } from "./create/create-file";

import { dirIsExecutable } from "./dir/dir-is-executable";
import { dirIsReadable } from "./dir/dir-is-readable";
import { dirIsVisible } from "./dir/dir-is-visible";
import { dirIsWritable } from "./dir/dir-is-writable";
import { dirIsEmpty } from "./dir/dir-is-empty";

import { fileExtension } from "./path/file-extension";
import { fileIsExecutable } from "./file/file-is-executable";
import { fileIsReadable } from "./file/file-is-readable";
import { fileIsVisible } from "./file/file-is-visible";
import { fileIsWritable } from "./file/file-is-writable";
import { fileName } from "./path/file-name";
import { fileNameExt } from "./path/file-name-ext";
import { filePath } from "./path/file-path";
import { fileTruncate } from "./file/file-truncate";

import { listContents } from "./list/contents";
import { listDirectories } from "./list/directories";
import { listFiles } from "./list/files";

import { getLinkStatus } from "./status/get-link-status";
import { getStatus } from "./status/get-status";

import { isDirExists } from "./status/is-dir-exists";
import { isFileExists } from "./status/is-file-exists";
import { isPathExists } from "./status/is-path-exists";

import { move } from "./move/move";

import { pathFrom } from "./path/path-from";

import { readFileToBase64 } from "./read/read-file-to-base64";
import { readFileToBuffer } from "./read/read-file-to-buffer";
import { readFileToString } from "./read/read-file-to-string";
import { remove } from "./remove/remove";
import { removeNonBlocking } from "./remove/remove-non-blocking";
import { removeSilent } from "./remove/remove-silent";

import { writeFile } from "./write/write-file";
import { writeFileTail } from "./write/write-file-tail";
import { writeJson } from "./write/write-json";

import { hash } from "./info/hash";
import { hashCrc32 } from "./info/hash-crc32";
import { hashMd5 } from "./info/hash-md5";
import { hashMulti } from "./info/hash-multi";
import { hashSha1 } from "./info/hash-sha1";
import { hashSha256 } from "./info/hash-sha256";
import { hashSha512 } from "./info/hash-sha512";

import { size } from "./info/size";

export class HileSystemLocal {
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
	 * @returns {Promise<boolean|Error>}
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
	 * @returns {Promise<boolean|Error>}
	 */
	createFile = createFile;
	/**
	 * @name dirIsExecutable
	 * @description Directory can be executed by the calling process
	 * @since 0.0.5
	 * @async
	 * @public
	 * @param {string} pathToDir
	 * @returns {Promise<boolean|Error>}
	 */
	dirIsExecutable = dirIsExecutable;
	/**
	 * @name dirIsReadable
	 * @description Directory is visible to the calling process
	 * @since 0.0.1
	 * @async
	 * @public
	 * @param {string} pathToDir
	 * @returns {Promise<boolean|Error>}
	 */
	dirIsReadable = dirIsReadable;
	/**
	 * @name dirIsVisible
	 * @description Directory is visible to the calling process
	 * @since 0.0.5
	 * @async
	 * @public
	 * @param {string} pathToDir
	 * @returns {Promise<boolean|Error>}
	 */
	dirIsVisible = dirIsVisible;
	/**
	 * @name dirIsWritable
	 * @description Directory can be written by the calling process
	 * @since 0.0.1
	 * @async
	 * @public
	 * @param {string} pathToDir
	 * @returns {Promise<boolean|Error>}
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
	 * @returns {Promise<Array.<(object|undefined|Error)>>}
	 */
	getLinkStatus = getLinkStatus;
	/**
	 * @name getStatus
	 * @description Get file status.
	 * @since 0.0.11
	 * @async
	 * @public
	 * @param {string|Buffer|URL} path
	 * @returns {Promise<Array.<(object|undefined|Error)>>}
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
	 * @returns {Promise<boolean|Error>}
	 */
	fileIsExecutable = fileIsExecutable;
	/**
	 * @name fileIsReadable
	 * @description File is visible to the calling process
	 * @since 0.0.1
	 * @async
	 * @public
	 * @param {string|Buffer|URL} pathToFile
	 * @returns {Promise<boolean|Error>}
	 */
	fileIsReadable = fileIsReadable;
	/**
	 * @name fileIsVisible
	 * @description File is visible to the calling process
	 * @since 0.0.5
	 * @async
	 * @public
	 * @param {string|Buffer|URL} pathToFile
	 * @returns {Promise<boolean|Error>}
	 */
	fileIsVisible = fileIsVisible;
	/**
	 * @name fileIsWritable
	 * @description File can be written by the calling process
	 * @since 0.0.1
	 * @async
	 * @public
	 * @param {string|Buffer|URL} pathToFile
	 * @returns {Promise<boolean|Error>}
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
	 * @returns {Promise<boolean|Error>}
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
	 * @returns {Promise<string|Error>}
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
	 * @returns {Promise<string|Error>}
	 */
	hashCrc32 = hashCrc32;
	/**
	 * @name hashMd5
	 * @description MD5.
	 * @since 0.2.3
	 * @async
	 * @public
	 * @param {string|Buffer|URL} pathToFile
	 * @returns {Promise<string|Error>}
	 */
	hashMd5 = hashMd5;
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
	hashMulti = hashMulti;
	/**
	 * @name hashSha1
	 * @description SHA-1.
	 * @since 0.2.3
	 * @async
	 * @public
	 * @param {string|Buffer|URL} pathToFile
	 * @returns {Promise<string|Error>}
	 */
	hashSha1 = hashSha1;
	/**
	 * @name hashSha256
	 * @description SHA-256.
	 * @since 0.2.3
	 * @async
	 * @public
	 * @param {string|Buffer|URL} pathToFile
	 * @returns {Promise<string|Error>}
	 */
	hashSha256 = hashSha256;
	/**
	 * @name hashSha512
	 * @description SHA-512.
	 * @since 0.2.6
	 * @async
	 * @public
	 * @param {string|Buffer|URL} pathToFile
	 * @returns {Promise<string|Error>}
	 */
	hashSha512 = hashSha512;
	/**
	 * @name listContents
	 * @description Lists files and directories in path
	 * @since 0.1.32
	 * @async
	 * @param {string|Buffer|URL} pathToDir
	 * @returns {Promise<string[]|Error>}
	 */
	listContents = listContents;
	/**
	 * @name listDirectories
	 * @description Lists directories in path
	 * @since 0.1.32
	 * @async
	 * @param {string|Buffer|URL} pathToDir
	 * @returns {Promise<string[]|Error>}
	 */
	listDirectories = listDirectories;
	/**
	 * @name listFiles
	 * @description Lists files in path
	 * @since 0.1.32
	 * @async
	 * @param {string|Buffer|URL} pathToDir
	 * @returns {Promise<string[]|Error>}
	 */
	listFiles = listFiles;
	/**
	 * @name move
	 * @description Change the name or location of a file or directory.
	 * @since 0.1.29
	 * @public
	 * @param {string} pathFrom
	 * @param {string} pathTo
	 * @returns {Promise<boolean|Error>}
	 */
	move = move;
	/**
	 * @name pathFrom
	 * @description Join all arguments together and normalize the resulting path.
	 * @since 0.1.3
	 * @public
	 * @param {string|string[]} paths
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
	 * @returns {Promise<string|Error>}
	 */
	readFileToBase64 = readFileToBase64;
	/**
	 * @name readFileToBuffer
	 * @description Asynchronously reads the entire contents of a file into buffer.
	 * @since 0.1.19
	 * @async
	 * @param {string|Buffer|URL} pathLike
	 * @returns {Promise<Buffer|Error>}
	 */
	readFileToBuffer = readFileToBuffer;
	/**
	 * @name readFileToString
	 * @description Asynchronously reads the entire contents of a file into string.
	 * @since 0.1.7
	 * @async
	 * @param {string|Buffer|URL} pathLike
	 * @returns {Promise<string|Error>}
	 */
	readFileToString = readFileToString;
	/**
	 * @name remove
	 * @description Removes a file or directory.
	 * @since 0.1.1
	 * @async
	 * @public
	 * @param {string} pathLike
	 * @returns {Promise<undefined|Error>}
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
	 * @returns {Promise<number|string|Error>}
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
	 * @returns {Promise<boolean|Error>}
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
	 * @returns {Promise<boolean|Error>}
	 */
	writeFileTail = writeFileTail;
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
	writeJson = writeJson;
}
