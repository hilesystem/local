![HileSystem Local](.github/assets/banner.webp?raw=true "HileSystem Local")

# HileSystem Local

Filesystem abstraction layer and common function wrappers.

[![NPM Version][npm-version-img]][npm-version-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]
[![TypeScript Typings][ts-img]][ts-url]
[![Travis CI][travis-img]][travis-url]

[![Maintainability Rating][sonarcloud-img]][sonarcloud-url]
[![LGTM][lgtm-img]][lgtm-url]
[![Codacy Badge][codacy-img]][codacy-url]
[![deepcode][deepcode-img]][deepcode-url]

---

> ⏳ **Please Note:** This is "Work In Progress" package. The new functionality will be added very slowly.

---

## Usage

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

## API

### Working with instance

If you prefer object-oriented style.

```javascript
const hs = new HileSystemLocal();
const isDirectoryCreated = await hs.createDirectory("./test/");
```

### Import functions

#### Path

<details>
    <summary><i>absolutePathFrom(paths, ...morePaths)</i></summary>
Join all arguments together and normalize the resulting path.

```javascript
const paths = ["path", "to", "file.txt"];
const str = absolutePathFrom(paths) // "/user/me/path/to/file.txt"
```
</details>

<details>
    <summary><i>fileExtension(path)</i></summary>
Get file extension.

```javascript
const str = fileExtension("path/to/file.txt"); // "txt"
```
</details>

<details>
    <summary><i>fileName(path)</i></summary>
Return the file name without extension.

```javascript
const str = fileName("path/to/file.txt"); // "file"
```
</details>

<details>
    <summary><i>fileNameExt(path)</i></summary>
Return the last portion of a path.

```javascript
const str = fileNameExt("path/to/file.txt"); // "file.txt"
```
</details>

<details>
    <summary><i>filePath(path)</i></summary>
Return the directory name of a path.

```javascript
const str = filePath("path/to/file.txt"); // "path/to"
```
</details>

<details>
    <summary><i>pathFrom(paths, ...morePaths)</i></summary>
Join all arguments together and normalize the resulting path.

```javascript
const str = pathFrom(["path", "to", "file.txt"]) // "path/to/file.txt"
```
</details>

#### Check

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

#### Create

Asynchronous create a directory.

```javascript
const trueOrError = await createDirectory("path/to/dir", "0777", true);
```

Asynchronous create a file.

```javascript
const trueOrError = await createFile("path/to/dir", "0777");
```

#### Write

Truncate a file to a specified length.

```javascript
const trueOrError = await fileTruncate("path/to/file.ext");
```

Asynchronously writes data to a file, replacing the file if it already exists.

```javascript
const filePath = "./file.txt";
const data = "Text";
const options = { encoding: "utf8" };
const trueOrError = await writeFile(filePath, data, options);
```

#### Read

Reads the file into a string.

```javascript
const stringOrError = await readFileToString("path/to/file.txt");
```

#### Delete

Removes a file or directory.

```javascript
const voidOrError = await remove("path/to/file.txt");
```

#### Information

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

---

## See also

[My other projects](https://r37r0m0d3l.icu/open_source_map)

<img src="https://raw.githubusercontent.com/r37r0m0d3l/r37r0m0d3l/master/osmap.svg?sanitize=true" width="960" height="520" style="display:block;height:auto;margin-left:auto;margin-right:auto;min-height:520px;min-width:960px;width:100%;">

<!-- Badges -->

[codacy-img]: https://api.codacy.com/project/badge/Grade/3a4f33788cd44b799242cae7e080f9e3
[codacy-url]: https://www.codacy.com/gh/hilesystem/local?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=hilesystem/local&amp;utm_campaign=Badge_Grade
[deepcode-img]: https://www.deepcode.ai/api/gh/badge?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybTEiOiJnaCIsIm93bmVyMSI6ImhpbGVzeXN0ZW0iLCJyZXBvMSI6ImxvY2FsIiwiaW5jbHVkZUxpbnQiOmZhbHNlLCJhdXRob3JJZCI6MjA1OTEsImlhdCI6MTU5Nzg3NzU2NX0.ZPpTGdzeeHtgm0Vc-AfTBw_PQC4DGN135Vc6jAxk8H0
[deepcode-url]: https://www.deepcode.ai/app/gh/hilesystem/local/_/dashboard?utm_content=gh%2Fhilesystem%2Flocal
[lgtm-img]: https://badgen.net/lgtm/grade/g/hilesystem/local?&icon=lgtm&label=lgtm:js/ts&color=00C853
[lgtm-url]: https://lgtm.com/projects/g/hilesystem/local
[npm-downloads-img]: https://badgen.net/npm/dt/@hilesystem/local?&icon=terminal&label=downloads&color=009688
[npm-downloads-url]: https://npmjs.com/package/@hilesystem/local
[npm-version-img]: https://badgen.net/npm/v/@hilesystem/local?&icon=npm&label=npm&color=DD3636
[npm-version-url]: https://npmjs.com/package/@hilesystem/local
[sonarcloud-img]: https://sonarcloud.io/api/project_badges/measure?project=hilesystem_local&metric=sqale_rating
[sonarcloud-url]: https://sonarcloud.io/dashboard?id=hilesystem_local
[travis-img]: https://badgen.net/travis/hilesystem/local?&icon=travis&label=build
[travis-url]: https://travis-ci.com/github/hilesystem/local
[ts-img]: https://badgen.net/npm/types/@hilesystem/local?&icon=typescript&label=types&color=1E90FF
[ts-url]: https://github.com/hilesystem/local/blob/master/dist/index.d.ts
