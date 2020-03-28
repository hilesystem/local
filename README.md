![HileSystem Local](docs/img/logo_128.png?raw=true "HileSystem Local")

# HileSystem Local

Filesystem abstraction layer and common function wrappers.

[![NPM Version](https://img.shields.io/npm/v/@hilesystem/local.svg?style=flat)]()
[![NPM Downloads](https://img.shields.io/npm/dt/@hilesystem/local.svg?style=flat)]()
[![GitHub stars](https://img.shields.io/github/stars/hilesystem/local.svg?style=social&label=Star)](https://github.com/hilesystem/local)
[![GitHub followers](https://img.shields.io/github/followers/r37r0m0d3l.svg?style=social&label=Follow)](https://github.com/r37r0m0d3l)

---

> **Please Note:** This is "Work in Progress" package. The new functionality will be added very slowly.

---

## Usage

Require CommonJS.

```javascript
const {
  HileSystemLocal,
  dirIsReadable, dirIsWritable, fileIsReadable, fileIsWritable
} = require("@hilesystem/local");
```

Import as ECMAScript module.

```javascript
import {
  HileSystemLocal,
  dirIsReadable, dirIsWritable, fileIsReadable, fileIsWritable
} from "@hilesystem/local/es";
```

## API

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
