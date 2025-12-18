# RoadMap

## Links

-   implement all from [https://medium.com/javascript-in-plain-english/6-useful-node-js-internal-modules-b3748c89c899](https://medium.com/javascript-in-plain-english/6-useful-node-js-internal-modules-b3748c89c899)

-   implement [https://github.com/thecodrr/fdir](https://github.com/thecodrr/fdir)

-   alternative functions based on cli commands such as copy/paste etc. use [https://github.com/shelljs/shx](https://github.com/shelljs/shx)

-   [https://stackoverflow.com/questions/60740937/nodejs-fs-watch-async-way](https://stackoverflow.com/questions/60740937/nodejs-fs-watch-async-way)

-   create file if not exists

-   [https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_mkdtemp_prefix_options_callback](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_mkdtemp_prefix_options_callback)

-   https://flysystem.thephpleague.com/docs/usage/filesystem-api/

-   https://nodejs.org/en/blog/announcements/v20-release-announce

-   https://www.sitepoint.com/node-js-20-new/

-   process.permission.has('fs.write');

-   https://github.com/jsenv/jsenv-util

-   https://deno.land/std/fs

-   https://github.com/denoland/deno/issues/5916

-   Make checksumers not only async but also streamable https://github.com/archiverjs/node-crc32-stream

## TODO

```ts
class Roadmap {
	//#region File

	clearFile() {}
	copyDirectory() {}
	createDirectory() {}
	deleteDirectory() {}
	ensureFileExists() {}
	ensureSymlinkExists() {}
	getDirectoryVisibility() {}
	getFileLastModified() {}
	getFileMimeType() {}
	getFileSize() {}
	getFileTimestamp() {}
	getFileVisibility() {}
	isFileExists() {}
	moveFile() {}
	putStringToFile() {}
	readFileIntoJson() {}
	readStreamFromFile() {}
	readStringFromFile() {}
	renameFile() {}
	setFileVisibility() {}
	writeJsonFile() {}
	writeStreamToFile() {}
	writeStringToFile() {}

	//#endregion

	//#region Directory

	addStringToFile() {}
	clearDirectory() {}
	copyFile() {}
	deleteFile() {}
	ensureDirectoryExists() {}
	getDirectoryLastModified() {}
	getDirectorySize() {}
	getDirectoryTimestamp() {}
	isDirectoryExists() {}
	listDirectoryContent() {}
	moveDirectory() {}
	removeDirectoryContents() {}
	renameDirectory() {}
	setDirectoryVisibility() {}

	//#endregion
}
```
