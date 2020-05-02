![HileSystem Local](docs/img/logo_128.png?raw=true "HileSystem Local")

# HileSystem Local

Filesystem abstraction layer and common function wrappers.

[![npm](https://badgen.net/npm/v/@hilesystem/local?&icon=npm&label=npm&color=DD3636)](https://www.npmjs.com/package/@hilesystem/local)
[![downloads](https://badgen.net/npm/dt/@hilesystem/local?&icon=terminal&label=downloads&color=009688)](https://github.com/hilesystem/local)
[![stars](https://badgen.net/github/stars/hilesystem/local?&icon=github&label=stars&color=ffcc33)](https://github.com/hilesystem/local)
[![types](https://badgen.net/npm/types/@hilesystem/local?&icon=typescript&label=types&color=1E90FF)](https://github.com/hilesystem/local)
[![build](https://badgen.net/travis/hilesystem/local?&icon=travis&label=build)](https://github.com/hilesystem/local)
[![lgtm](https://badgen.net/lgtm/grade/g/hilesystem/local?&icon=lgtm&label=lgtm:js/ts&color=00C853)](https://github.com/hilesystem/local)

---

> **Please Note:** This is "Work in Progress" package. The new functionality will be added very slowly.

---

## Usage

Require CommonJS.

```javascript
const {
  HileSystemLocal,
  createDirectory, createFile,
  dirIsExecutable, dirIsReadable, dirIsVisible, dirIsWritable,
  fileIsExecutable, fileIsReadable, fileIsVisible, fileIsWritable,
  fileTruncate,
  getStatus, isDirExists, isFileExists, isPathExists,
  writeFile,
} = require("@hilesystem/local");
```

Import as ECMAScript module.

```javascript
import {
  HileSystemLocal,
  createDirectory, createFile,
  dirIsExecutable, dirIsReadable, dirIsVisible, dirIsWritable,
  fileIsExecutable, fileIsReadable, fileIsVisible, fileIsWritable,
  fileTruncate,
  getStatus, isDirExists, isFileExists, isPathExists,
  writeFile,
} from "@hilesystem/local";
```

## API

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

---
