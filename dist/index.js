"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var e=require("fs"),t=require("@await-of/of"),r=require("path"),i=_interopDefault(r),s=_interopDefault(require("assert"));async function createDirectory(r,i="0777",s=!0){const n=await t.ofError(e.promises.mkdir(r,{mode:i,recursive:s}));return n||!0}async function getStatus(r){return t.of(e.promises.stat(r))}async function writeFile(r,i,s){const n=await t.ofError(e.promises.writeFile(r,i,s));return n||!0}async function createFile(r,s="0777"){const[n,o]=await getStatus(r);if(!o&&n.isFile())return!0;const a=i.dirname(r);if(o&&"ENOENT"===o.code){const e=await createDirectory(a,s);if(!0!==e)return e;const t=await writeFile(r,"",{mode:s,flag:"w"});return!0===t||t}return n.isDirectory()?await writeFile(r,"",{mode:s,flag:"w"}):await t.ofError(e.promises.readdir(a))}async function accessWrapper(r,i){const s=await t.ofError(e.promises.access(i,r));return s||!0}async function dirIsExecutable(t){return accessWrapper(e.constants.X_OK,t)}async function dirIsReadable(t){return accessWrapper(e.constants.R_OK,t)}async function dirIsVisible(t){return accessWrapper(e.constants.F_OK,t)}async function dirIsWritable(t){return accessWrapper(e.constants.W_OK,t)}async function fileIsExecutable(t){return accessWrapper(e.constants.X_OK,t)}async function fileIsReadable(t){return accessWrapper(e.constants.R_OK,t)}async function fileIsVisible(t){return accessWrapper(e.constants.F_OK,t)}async function fileIsWritable(t){return accessWrapper(e.constants.W_OK,t)}async function fileTruncate(r,i=0){const s=await t.ofError(e.promises.truncate(r,i));return s||!0}async function listContents(r){const[i,s]=await t.ofAny(e.promises.readdir(r));return s||i}function pathFrom(e,...t){let i;return i=Array.isArray(e)?e.map(e=>e.toString()):[e.toString()],t.length&&(i=i.concat(t.map(e=>e.toString()))),r.join(...i)}async function listDirectories(e){const t=await listContents(e);if(!Array.isArray(t))return t;return(await Promise.all(t.map(async t=>{const r=pathFrom(e,t),[i,s]=await getStatus(r);if(!s&&i.isDirectory())return t}))).filter(e=>e)}async function listFiles(e){const t=await listContents(e);if(!Array.isArray(t))return t;return(await Promise.all(t.map(async t=>{const r=pathFrom(e,t),[i,s]=await getStatus(r);if(!s&&!i.isDirectory())return t}))).filter(e=>e)}async function move(r,i){const s=await t.ofError(e.promises.rename(r,i));return s||!0}function absolutePathFrom(e,...t){let i;return i=Array.isArray(e)?e.map(e=>e.toString()):[e.toString()],t.length&&(i=i.concat(t.map(e=>e.toString()))),r.resolve(...i)}function fileExtension(e){return r.extname(e).substring(1)}function fileName(e){return r.parse(e).name}function fileNameExt(e){return r.basename(e)}function filePath(e){return r.dirname(e)}async function readFileToBase64(r){const[i,s]=await t.of(e.promises.readFile(r,"base64"));return s||i.toString()}async function readFileToBuffer(r){const[i,s]=await t.of(e.promises.readFile(r,"binary"));return s||Buffer.from(i)}async function readFileToString(r){const[i,s]=await t.of(e.promises.readFile(r,"utf8"));return s||i.toString()}const n="win32"===process.platform;function rimraf(t,r,i){let n=0,o=i,a=r;"function"==typeof a&&(o=a,a={}),s(t,"remove(): missing path"),s.strictEqual(typeof t,"string","remove(): path should be a string"),s.strictEqual(typeof o,"function","remove(): callback function required"),s(a,"remove(): invalid options argument provided"),s.strictEqual(typeof a,"object","remove(): options should be object"),function defaults(t){["unlink","chmod","stat","lstat","rmdir","readdir"].forEach(r=>{t[r]=t[r]||e[r]}),t.maxBusyTries=t.maxBusyTries||3}(a),rimraf_(t,a,(function callbackRimraf(e){if(e){if(("EBUSY"===e.code||"ENOTEMPTY"===e.code||"EPERM"===e.code)&&n<a.maxBusyTries){n++;return void setTimeout(()=>rimraf_(t,a,callbackRimraf),100*n)}if("ENOENT"===e.code)return void o(null)}o(e)}))}function rimraf_(e,t,r){s(e),s(t),s("function"==typeof r),t.lstat(e,(i,s)=>i&&"ENOENT"===i.code?r(null):i&&"EPERM"===i.code&&n?fixWinEPERM(e,t,i,r):s&&s.isDirectory()?rmdir(e,t,i,r):void t.unlink(e,i=>{if(i){if("ENOENT"===i.code)return r(null);if("EPERM"===i.code)return n?fixWinEPERM(e,t,i,r):rmdir(e,t,i,r);if("EISDIR"===i.code)return rmdir(e,t,i,r)}return r(i)}))}function fixWinEPERM(e,t,r,i){return s(e),s(t),s("function"==typeof i),r&&s(r instanceof Error),t.chmod(e,438,s=>{s?"ENOENT"===s.code?i(null):i(r):t.stat(e,(s,n)=>{s?"ENOENT"===s.code?i(null):i(r):n.isDirectory()?rmdir(e,t,r,i):t.unlink(e,i)})}),null}function rmdir(e,t,r,n){return s(e),s(t),r&&s(r instanceof Error),s("function"==typeof n),t.rmdir(e,o=>{!o||"ENOTEMPTY"!==o.code&&"EEXIST"!==o.code&&"EPERM"!==o.code?o&&"ENOTDIR"===o.code?n(r):n(o):function removeSubPath(e,t,r){s(e),s(t),s("function"==typeof r),t.readdir(e,(s,n)=>{if(s)return r(s);let o,a=n.length;if(0===a)return t.rmdir(e,r);n.forEach(s=>{rimraf(i.join(e,s),t,i=>{o||(i?r(o=i):(--a,0===a&&t.rmdir(e,r)))})})})}(e,t,n)}),null}async function remove(e){return new Promise((t,r)=>{rimraf(e,{},e=>{e?r(e):t()})})}function removeNonBlocking(e){remove(e).then(()=>{}).catch(()=>{})}async function isDirExists(e){const[t,r]=await getStatus(e);return!r&&t.isDirectory()}async function isFileExists(e){const[t,r]=await getStatus(e);return!r&&t.isFile()}async function isPathExists(e){const[t]=await getStatus(e);return Boolean(t)}async function writeJSON(e,t,r){let i;try{i=JSON.stringify(t)}catch(e){return e}return writeFile(e,i,r)}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}exports.HileSystemLocal=class HileSystemLocal{constructor(){_defineProperty(this,"absolutePathFrom",absolutePathFrom),_defineProperty(this,"createDirectory",createDirectory),_defineProperty(this,"createFile",createFile),_defineProperty(this,"dirIsExecutable",dirIsExecutable),_defineProperty(this,"dirIsReadable",dirIsReadable),_defineProperty(this,"dirIsVisible",dirIsVisible),_defineProperty(this,"dirIsWritable",dirIsWritable),_defineProperty(this,"getStatus",getStatus),_defineProperty(this,"isDirExists",isDirExists),_defineProperty(this,"isFileExists",isFileExists),_defineProperty(this,"isPathExists",isPathExists),_defineProperty(this,"fileExtension",fileExtension),_defineProperty(this,"fileName",fileName),_defineProperty(this,"fileNameExt",fileNameExt),_defineProperty(this,"filePath",filePath),_defineProperty(this,"fileIsExecutable",fileIsExecutable),_defineProperty(this,"fileIsReadable",fileIsReadable),_defineProperty(this,"fileIsVisible",fileIsVisible),_defineProperty(this,"fileIsWritable",fileIsWritable),_defineProperty(this,"fileTruncate",fileTruncate),_defineProperty(this,"listContents",listContents),_defineProperty(this,"listDirectories",listDirectories),_defineProperty(this,"listFiles",listFiles),_defineProperty(this,"move",move),_defineProperty(this,"pathFrom",pathFrom),_defineProperty(this,"readFileToBase64",readFileToBase64),_defineProperty(this,"readFileToBuffer",readFileToBuffer),_defineProperty(this,"readFileToString",readFileToString),_defineProperty(this,"remove",remove),_defineProperty(this,"removeNonBlocking",removeNonBlocking),_defineProperty(this,"writeFile",writeFile),_defineProperty(this,"writeJSON",writeJSON)}},exports.absolutePathFrom=absolutePathFrom,exports.createDirectory=createDirectory,exports.createFile=createFile,exports.dirIsExecutable=dirIsExecutable,exports.dirIsReadable=dirIsReadable,exports.dirIsVisible=dirIsVisible,exports.dirIsWritable=dirIsWritable,exports.fileExtension=fileExtension,exports.fileIsExecutable=fileIsExecutable,exports.fileIsReadable=fileIsReadable,exports.fileIsVisible=fileIsVisible,exports.fileIsWritable=fileIsWritable,exports.fileName=fileName,exports.fileNameExt=fileNameExt,exports.filePath=filePath,exports.fileTruncate=fileTruncate,exports.getStatus=getStatus,exports.isDirExists=isDirExists,exports.isFileExists=isFileExists,exports.isPathExists=isPathExists,exports.listContents=listContents,exports.listDirectories=listDirectories,exports.listFiles=listFiles,exports.move=move,exports.pathFrom=pathFrom,exports.readFileToBase64=readFileToBase64,exports.readFileToBuffer=readFileToBuffer,exports.readFileToString=readFileToString,exports.remove=remove,exports.removeNonBlocking=removeNonBlocking,exports.writeFile=writeFile,exports.writeJSON=writeJSON;
//# sourceMappingURL=index.js.map
