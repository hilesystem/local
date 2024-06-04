import { hashCrc32 } from "./hash-crc32";
import { hashMd5 } from "./hash-md5";
import { hashSha1 } from "./hash-sha1";
import { hashSha256 } from "./hash-sha256";
import { hashSha512 } from "./hash-sha512";

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
export async function hashMulti(
	pathToFile: string | Buffer | URL,
): Promise<{ crc32: string; md5: string; sha1: string; sha256: string; sha512: string }> {
	return await Promise.all([
		hashCrc32(pathToFile) as Promise<string>,
		hashMd5(pathToFile) as Promise<string>,
		hashSha1(pathToFile) as Promise<string>,
		hashSha256(pathToFile) as Promise<string>,
		hashSha512(pathToFile) as Promise<string>,
	]).then(
		([
			//
			crc32,
			md5,
			sha1,
			sha256,
			sha512,
		]) => ({ crc32, md5, sha1, sha256, sha512 }),
	);
}
