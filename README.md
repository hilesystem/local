![HileSystem Local](docs/img/logo_128.png?raw=true "HileSystem Local")

# HileSystem Local

Filesystem abstraction layer and common function wrappers.

[![NPM Version](https://img.shields.io/npm/v/@hilesystem/local.svg?style=flat)]()
[![NPM Downloads](https://img.shields.io/npm/dt/@hilesystem/local.svg?style=flat)]()
[![GitHub stars](https://img.shields.io/github/stars/hilesystem/local.svg?style=social&label=Star)](https://github.com/hilesystem/local)
[![GitHub followers](https://img.shields.io/github/followers/r37r0m0d3l.svg?style=social&label=Follow)](https://github.com/r37r0m0d3l)

---

## Usage

Require CommonJS.

```javascript
const {
  dirIsReadable, dirIsWritable, fileIsReadable, fileIsWritable
} = require("@hilesystem/local");
```

Import as ECMAScript module.

```javascript
import {
  dirIsReadable, dirIsWritable, fileIsReadable, fileIsWritable
} from "@hilesystem/local/es";
```

## API

## Is Directory Readable

```javascript
const trueOrError = await dirIsReadable("path/to/dir");
```

## Is Directory Writable

```javascript
const trueOrError = await dirIsWritable("path/to/dir");
```

## Is File Readable

```javascript
const trueOrError = await fileIsReadable("path/to/file.ext");
```

## Is File Writable

```javascript
const trueOrError = await fileIsWritable("path/to/file.ext");
```

---

*If you use this project don't forget to give a ⭐
[star](https://github.com/hilesystem/local) ⭐ to it on GitHub!*

---

Discover more:

-   🔎[Consono](https://consono.js.org)🔎 -
  The most informative and correct variable inspector for JavaScript on the web.

-   🌠[OF](https://of.js.org)🌠 - Promise wrapper with some sugar.

-   🔩[Local Storage Fallback](https://github.com/r37r0m0d3l/fallback-local-storage)🔩 -
  Universal localStorage fallback.

-   🔄[Publish Subscribe](https://publish-subscribe.js.org)🔄 -
  JavaScript implementation of the Publish-Subscribe pattern.

-   🧰[Vicis](https://vicis.js.org)🧰 -
  Presentation and transformation layer for data output in RESTful APIs.

Or find useful these tools:

-   🧾[JSON Sorter](https://r37r0m0d3l.github.io/json_sort)🧾 - Neat online JSON sorter.
