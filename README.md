![HileSystem Local](.github/assets/banner.webp?raw=true "HileSystem Local")

# 🖴 HileSystem Local

Filesystem abstraction layer and common function wrappers.

[![NPM Version][npm-version-img]][npm-version-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]
[![TypeScript Typings][ts-img]][ts-url]
[![Travis CI][travis-img]][travis-url]

[![Maintainability Rating][sonarcloud-img]][sonarcloud-url]
[![LGTM][lgtm-img]][lgtm-url]
[![Codacy Badge][codacy-img]][codacy-url]
[![deepcode][deepcode-img]][deepcode-url]

## Usage

### Tree-shaking imports

```javascript
import {
  HileSystemLocal,
  absolutePathFrom,
  createDirectory, createFile,
  dirIsEmpty, dirIsExecutable, dirIsReadable, dirIsVisible, dirIsWritable,
  fileIsExecutable, fileIsReadable, fileIsVisible, fileIsWritable,
  fileTruncate,
  fileExtension, fileName, fileNameExt, filePath, pathFrom,
  listContents, listDirectories, listFiles,
  move,
  remove, removeNonBlocking,
  getStatus, isDirExists, isFileExists, isPathExists,
  writeFile, writeJSON,
} from "@hilesystem/local";
```

### Import all as named import

```javascript
import * as hileSystem from "@hilesystem/local";
const isDirectoryCreated = await hileSystem.createDirectory("./test/");
```

### Working with instance

If you prefer object-oriented style.

```javascript
import { HileSystemLocal } from "@hilesystem/local";
const hileSystem = new HileSystemLocal();
const isDirectoryCreated = await hileSystem.createDirectory("./test/");
```

## API

### Path

<details>
    <summary><b>absolutePathFrom(paths, ...morePaths)</b></summary>
Join all arguments together and normalize the resulting path.

```javascript
const paths = ["path", "to", "file.txt"];
const str = absolutePathFrom(paths) // "/user/me/path/to/file.txt"
```
</details>

<details>
    <summary><b>fileExtension(path)</b></summary>
Get file extension.

```javascript
const str = fileExtension("path/to/file.txt"); // "txt"
```
</details>

<details>
    <summary><b>fileName(path)</b></summary>
Return the file name without extension.

```javascript
const str = fileName("path/to/file.txt"); // "file"
```
</details>

<details>
    <summary><b>fileNameExt(path)</b></summary>
Return the last portion of a path.

```javascript
const str = fileNameExt("path/to/file.txt"); // "file.txt"
```
</details>

<details>
    <summary><b>filePath(path)</b></summary>
Return the directory name of a path.

```javascript
const str = filePath("path/to/file.txt"); // "path/to"
```
</details>

<details>
    <summary><b>pathFrom(paths, ...morePaths)</b></summary>
Join all arguments together and normalize the resulting path.

```javascript
const str = pathFrom(["path", "to", "file.txt"]) // "path/to/file.txt"
```
</details>

### Create

<details>
    <summary><b>createDirectory(dirPath, mode, recursive)</b></summary>
Asynchronous create a directory.

```javascript
const trueOrError = await createDirectory("path/to/dir", "0777", true);
```
</details>

<details>
    <summary><b>createFile(pathLike, mode)</b></summary>
Asynchronous create a file.

```javascript
const trueOrError = await createFile("path/to/dir", "0777");
```
</details>

### Read

<details>
    <summary><b>readFileToBase64(pathLike)</b></summary>
Reads the file into a string.

```javascript
const stringOrError = await readFileToBase64("path/to/img.png");
```
</details>

<details>
    <summary><b>readFileToBuffer(pathLike)</b></summary>
Reads the file into a buffer.

```javascript
const bufferOrError = await readFileToBuffer("path/to/file.txt");
```
</details>

<details>
    <summary><b>readFileToString(pathLike)</b></summary>
Reads the file into a string.

```javascript
const stringOrError = await readFileToString("path/to/file.txt");
```
</details>

### Move

<details>
    <summary><b>move(pathFrom, pathTo)</b></summary>
Change the name or location of a file or directory.

```javascript
const trueOrError = await move("path/to/file.ext", "path/to-another/file.ext");
```
</details>

### Write

<details>
    <summary><b>fileTruncate(pathToFile, length)</b></summary>
Truncate a file to a specified length.

```javascript
const trueOrError = await fileTruncate("path/to/file.ext");
```
</details>

<details>
    <summary><b>writeFile(filePath, data, options)</b></summary>
Asynchronously writes data to a file, replacing the file if it already exists.

```javascript
const filePath = "./file.txt";
const data = "Text";
const options = { encoding: "utf8" };
const trueOrError = await writeFile(filePath, data, options);
```
</details>

<details>
    <summary><b>writeJSON(filePath, data, options)</b></summary>
Asynchronously writes data to a file, replacing the file if it already exists.

```javascript
const filePath = "./file.json";
const data = { key: "value" };
const options = { encoding: "utf8" };
const trueOrError = await writeJSON(filePath, data, options);
```
</details>

### Delete

<details>
    <summary><b>remove(pathLike)</b></summary>
Removes a file or directory.

```javascript
const voidOrError = await remove("path/to/file.txt");
```
</details>

<details>
    <summary><b>removeNonBlocking(pathLike)</b></summary>
Non-blocking remove of a file or directory.

```javascript
removeNonBlocking("path/to/file.txt");
```
</details>

### Information

<details>
    <summary><b>getStatus(path)</b></summary>
Get file status.

```javascript
const [status, error] = await getStatus("path/to/file.ext");
```
</details>

<details>
    <summary><b>isDirExists(path)</b></summary>
Get directory status.

```javascript
const trueOrFalse = await isDirExists("path/to/");
```
</details>

<details>
    <summary><b>isFileExists(path)</b></summary>
Get file status.

```javascript
const trueOrFalse = await isFileExists("path/to/file.ext");
```
</details>

<details>
    <summary><b>isPathExists(path)</b></summary>
Get path status.

```javascript
const trueOrFalse = await isPathExists("path/to/file_or_directory");
```
</details>

### Check

<details>
    <summary><b>dirIsEmpty(pathToDir, excludeSystemFiles)</b></summary>
Check if a directory is empty.

```javascript
const booleanOrError = await dirIsEmpty("path/to/dir", true);
```
</details>

<details>
    <summary><b>dirIsExecutable(pathToDir)</b></summary>
Is directory executable.

```javascript
const trueOrError = await dirIsExecutable("path/to/dir");
```
</details>

<details>
    <summary><b>dirIsReadable(pathToDir)</b></summary>
Is directory readable.

```javascript
const trueOrError = await dirIsReadable("path/to/dir");
```
</details>

<details>
    <summary><b>dirIsVisible(pathToDir)</b></summary>
Is directory visible.

```javascript
const trueOrError = await dirIsVisible("path/to/dir");
```
</details>

<details>
    <summary><b>dirIsWritable(pathToDir)</b></summary>
Is directory writable.

```javascript
const trueOrError = await dirIsWritable("path/to/dir");
```
</details>

<details>
    <summary><b>fileIsExecutable(pathToFile)</b></summary>
Is file executable.

```javascript
const trueOrError = await fileIsExecutable("path/to/file.ext");
```
</details>

<details>
    <summary><b>fileIsReadable(pathToFile)</b></summary>
Is file readable.

```javascript
const trueOrError = await fileIsReadable("path/to/file.ext");
```
</details>

<details>
    <summary><b>fileIsVisible(pathToFile)</b></summary>
Is file visible.

```javascript
const trueOrError = await fileIsVisible("path/to/file.ext");
```
</details>

<details>
    <summary><b>fileIsWritable(pathToFile)</b></summary>
Is file writable.

```javascript
const trueOrError = await fileIsWritable("path/to/file.ext");
```
</details>

---

### List

<details>
    <summary><b>listContents(pathToDir)</b></summary>
Lists files and directories in path.

```javascript
const arrayOfStringsOrError = await listContents("path/to/dir");
```
</details>

<details>
    <summary><b>listDirectories(pathToDir)</b></summary>
Lists files and directories in path.

```javascript
const arrayOfStringsOrError = await listDirectories("path/to/dir");
```
</details>

<details>
    <summary><b>listFiles(pathToDir)</b></summary>
Lists files in path.

```javascript
const arrayOfStringsOrError = await listFiles("path/to/dir");
```
</details>

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
