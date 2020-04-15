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
  HileSystemLocal, createDirectory,
  dirIsExecutable, dirIsReadable, dirIsVisible, dirIsWritable,
  fileIsExecutable, fileIsReadable, fileIsVisible, fileIsWritable,
  fileTruncate, writeFile,
} = require("@hilesystem/local");
```

Import as ECMAScript module.

```javascript
import {
  HileSystemLocal, createDirectory,
  dirIsExecutable, dirIsReadable, dirIsVisible, dirIsWritable,
  fileIsExecutable, fileIsReadable, fileIsVisible, fileIsWritable,
  fileTruncate, writeFile,
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
const trueOrError = await writeFile("path/to/file.txt", "Text", { encoding: "utf8" });
```

---

*If you use this project don't forget to give a ⭐
[star](https://github.com/hilesystem/local) ⭐ to it on GitHub!*

---

Discover more:

| URL | Description |
| :--- | :--- |
| [jsonsort.r37r0m0d3l.io](https://r37r0m0d3l.github.io/json_sort) | Neat online JSON sorter |
| [consono.js.org](https://consono.js.org) | The most informative & correct variable inspector |
| [of.js.org](https://of.js.org) | Promise wrapper with some sugar |
| [publish-subscribe.js.org](https://publish-subscribe.js.org) | Implementation of the Publish-Subscribe pattern |
| [vicis.js.org](https://vicis.js.org) | Present & transform for JSON in REST API |
| [npmjs.com/fallback-local-storage](https://npmjs.com/package/fallback-local-storage) | Universal localStorage fallback |
| [npmjs.com/@hilesystem](https://npmjs.com/package/@hilesystem/local) | Filesystem common function wrappers |
| [npmjs.com/@corefunc](https://npmjs.com/package/@corefunc/corefunc) | "Don’t repeat yourself" collection of functions |

---
