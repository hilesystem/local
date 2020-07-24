![HileSystem Local](docs/img/logo_128.png?raw=true "HileSystem Local")

# HileSystem Local

Filesystem abstraction layer and common function wrappers.

[![Buy Me A Coffee][buymeacoffee-img]][buymeacoffee-url]
[![Follow New Releases][releasly-img]][releasly-url]

[![NPM Version][npm-version-img]][npm-version-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]
[![GitHub Stars][gh-stars-img]][gh-stars-url]
[![TypeScript Typings][ts-img]][ts-url]
[![Travis CI][travis-img]][travis-url]
[![LGTM][lgtm-img]][lgtm-url]

---

> **Please Note:** This is "Work in Progress" package. The new functionality will be added very slowly.

---

*If you use this project don't forget to give a ⭐ [star](https://github.com/hilesystem/local) ⭐ to it on GitHub!*

---

## Usage

CommonJS import.

```javascript
const {
  HileSystemLocal,
  absolutePathFrom,
  createDirectory, createFile,
  dirIsExecutable, dirIsReadable, dirIsVisible, dirIsWritable,
  fileIsExecutable, fileIsReadable, fileIsVisible, fileIsWritable,
  fileTruncate,
  fileExtension, fileName, fileNameExt, filePath, pathFrom,
  remove,
  getStatus, isDirExists, isFileExists, isPathExists,
  writeFile,
} = require("@hilesystem/local");
```

ECMAScript Module.

```javascript
import {
  HileSystemLocal,
  absolutePathFrom,
  createDirectory, createFile,
  dirIsExecutable, dirIsReadable, dirIsVisible, dirIsWritable,
  fileIsExecutable, fileIsReadable, fileIsVisible, fileIsWritable,
  fileTruncate,
  fileExtension, fileName, fileNameExt, filePath, pathFrom,
  remove,
  getStatus, isDirExists, isFileExists, isPathExists,
  writeFile,
} from "@hilesystem/local";
```

Deno (Pika [https://pika.dev/](https://pika.dev/))

```javascript
import {
  HileSystemLocal,
  absolutePathFrom,
  createDirectory, createFile,
  dirIsExecutable, dirIsReadable, dirIsVisible, dirIsWritable,
  fileIsExecutable, fileIsReadable, fileIsVisible, fileIsWritable,
  fileTruncate,
  fileExtension, fileName, fileNameExt, filePath, pathFrom,
  remove,
  getStatus, isDirExists, isFileExists, isPathExists,
  writeFile,
} from "https://cdn.pika.dev/@hilesystem/local";
```

## API

Join all arguments together and normalize the resulting path to absolute URI.

```javascript
const str = absolutePathFrom(["path", "to", "file.txt"]) // "/user/me/path/to/file.txt"
```

Asynchronous create a directory.

```javascript
const trueOrError = await createDirectory("path/to/dir", "0777", true);
```

Asynchronous create a file.

```javascript
const trueOrError = await createFile("path/to/dir", "0777");
```

Is directory executable.

```javascript
const trueOrError = await dirIsExecutable("path/to/dir");
```

Is directory readable.

```javascript
const trueOrError = await dirIsReadable("path/to/dir");
```

Is directory visible.

```javascript
const trueOrError = await dirIsVisible("path/to/dir");
```

Is directory writable.

```javascript
const trueOrError = await dirIsWritable("path/to/dir");
```

Is file executable.

```javascript
const trueOrError = await fileIsExecutable("path/to/file.ext");
```

Is file readable.

```javascript
const trueOrError = await fileIsReadable("path/to/file.ext");
```

Is file visible.

```javascript
const trueOrError = await fileIsVisible("path/to/file.ext");
```

Is file writable.

```javascript
const trueOrError = await fileIsWritable("path/to/file.ext");
```

Truncate a file to a specified length.

```javascript
const trueOrError = await fileTruncate("path/to/file.ext");
```

Get file extension.

```javascript
const str = fileExtension("path/to/file.txt"); // "txt"
```

Return the file name without extension.

```javascript
const str = fileName("path/to/file.txt"); // "file"
```

Return the last portion of a path.

```javascript
const str = fileNameExt("path/to/file.txt"); // "file.txt"
```

Return the directory name of a path.

```javascript
const str = filePath("path/to/file.txt"); // "path/to"
```

Join all arguments together and normalize the resulting path.

```javascript
const str = pathFrom(["path", "to", "file.txt"]) // "path/to/file.txt"
```

Removes a file or directory.

```javascript
const voidOrError = await remove("path/to/file.txt");
```

Get file status.

```javascript
const [status, error] = await getStatus("path/to/file.ext");
```

Get directory status.

```javascript
const trueOrFalse = await isDirExists("path/to/");
```

Get file status.

```javascript
const trueOrFalse = await isFileExists("path/to/file.ext");
```

Get path status.

```javascript
const trueOrFalse = await isPathExists("path/to/file_or_directory");
```

Asynchronous create a directory.

```javascript
const trueOrError = await writeFile("./f.txt", "Text", { encoding: "utf8" });
```

---

*If you use this project don't forget to give a ⭐
[star](https://github.com/hilesystem/local) ⭐ to it on GitHub!*

---

## See also

[My other projects](https://r37r0m0d3l.icu/open_source_map)

<img src="https://raw.githubusercontent.com/r37r0m0d3l/r37r0m0d3l/master/osmap.svg?sanitize=true" width="960" height="520" style="display:block;height:auto;margin-left:auto;margin-right:auto;min-height:520px;min-width:960px;width:100%;">

<!-- Badges -->

[buymeacoffee-url]: https://buymeacoffee.com/r37r0m0d3l
[buymeacoffee-img]: https://img.shields.io/badge/support-buymeacoffee-1E90FF.svg?&logo=buy-me-a-coffee&label=support
[gh-stars-url]: https://github.com/hilesystem/local
[gh-stars-img]: https://badgen.net/github/stars/hilesystem/local?&icon=github&label=stars&color=FFCC33
[lgtm-url]: https://lgtm.com/projects/g/hilesystem/local
[lgtm-img]: https://badgen.net/lgtm/grade/g/hilesystem/local?&icon=lgtm&label=lgtm:js/ts&color=00C853
[npm-version-url]: https://npmjs.com/package/@hilesystem/local
[npm-version-img]: https://badgen.net/npm/v/@hilesystem/local?&icon=npm&label=npm&color=DD3636
[npm-downloads-url]: https://npmjs.com/package/@hilesystem/local
[npm-downloads-img]: https://badgen.net/npm/dt/@hilesystem/local?&icon=terminal&label=downloads&color=009688
[releasly-url]: https://app.releasly.co/sites/hilesystem/local?utm_source=github_badge
[releasly-img]: https://app.releasly.co/assets/badges/badge-blue-classic.svg
[travis-url]: https://travis-ci.com/github/hilesystem/local
[travis-img]: https://badgen.net/travis/hilesystem/local?&icon=travis&label=build
[ts-url]: https://github.com/hilesystem/local/blob/master/dist/index.d.ts
[ts-img]: https://badgen.net/npm/types/@hilesystem/local?&icon=typescript&label=types&color=1E90FF
