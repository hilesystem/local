"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var e=require("fs"),r=require("@r37r0m0d3l/of"),t=require("path"),i=_interopDefault(t),s=_interopDefault(require("assert"));async function createDirectory(t,i="0777",s=!0){const n=await r.ofError(e.promises.mkdir(t,{mode:i,recursive:s}));return n||!0}async function getStatus(t){return r.of(e.promises.stat(t))}async function writeFile(t,i,s){const n=await r.ofError(e.promises.writeFile(t,i,s));return n||!0}async function createFile(t,s="0777"){const[n,o]=await getStatus(t);if(!o&&n.isFile())return!0;const a=i.dirname(t);if(o&&"ENOENT"===o.code){const e=await createDirectory(a,s);if(!0!==e)return e;const r=await writeFile(t,"",{mode:s,flag:"w"});return!0===r||r}return n.isDirectory()?await writeFile(t,"",{mode:s,flag:"w"}):await r.ofError(e.promises.readdir(a))}async function accessWrapper(t,i){const s=await r.ofError(e.promises.access(i,t));return s||!0}async function dirIsExecutable(r){return accessWrapper(e.constants.X_OK,r)}async function dirIsReadable(r){return accessWrapper(e.constants.R_OK,r)}async function dirIsVisible(r){return accessWrapper(e.constants.F_OK,r)}async function dirIsWritable(r){return accessWrapper(e.constants.W_OK,r)}async function fileIsExecutable(r){return accessWrapper(e.constants.X_OK,r)}async function fileIsReadable(r){return accessWrapper(e.constants.R_OK,r)}async function fileIsVisible(r){return accessWrapper(e.constants.F_OK,r)}async function fileIsWritable(r){return accessWrapper(e.constants.W_OK,r)}async function fileTruncate(t,i=0){const s=await r.ofError(e.promises.truncate(t,i));return s||!0}function absolutePathFrom(e,...r){let i;return i=Array.isArray(e)?e.map(e=>e.toString()):[e.toString()],r.length&&(i=i.concat(r.map(e=>e.toString()))),t.resolve(...i)}function fileExtension(e){return t.extname(e).substring(1)}function fileName(e){return t.parse(e).name}function fileNameExt(e){return t.basename(e)}function filePath(e){return t.dirname(e)}function pathFrom(e,...r){let i;return i=Array.isArray(e)?e.map(e=>e.toString()):[e.toString()],r.length&&(i=i.concat(r.map(e=>e.toString()))),t.join(...i)}async function readFileToBase64(t){const[i,s]=await r.of(e.promises.readFile(t,"base64"));return s||i.toString()}async function readFileToBuffer(t){const[i,s]=await r.of(e.promises.readFile(t,"binary"));return s||Buffer.from(i)}async function readFileToString(t){const[i,s]=await r.of(e.promises.readFile(t,"utf8"));return s||i.toString()}const n="win32"===process.platform;function rimraf(r,t,i){let n=0,o=i,a=t;"function"==typeof a&&(o=a,a={}),s(r,"remove(): missing path"),s.strictEqual(typeof r,"string","remove(): path should be a string"),s.strictEqual(typeof o,"function","remove(): callback function required"),s(a,"remove(): invalid options argument provided"),s.strictEqual(typeof a,"object","remove(): options should be object"),function defaults(r){["unlink","chmod","stat","lstat","rmdir","readdir"].forEach(t=>{r[t]=r[t]||e[t]}),r.maxBusyTries=r.maxBusyTries||3}(a),rimraf_(r,a,(function callbackRimraf(e){if(e){if(("EBUSY"===e.code||"ENOTEMPTY"===e.code||"EPERM"===e.code)&&n<a.maxBusyTries){n++;return void setTimeout(()=>rimraf_(r,a,callbackRimraf),100*n)}if("ENOENT"===e.code)return void o(null)}o(e)}))}function rimraf_(e,r,t){s(e),s(r),s("function"==typeof t),r.lstat(e,(i,s)=>i&&"ENOENT"===i.code?t(null):i&&"EPERM"===i.code&&n?fixWinEPERM(e,r,i,t):s&&s.isDirectory()?rmdir(e,r,i,t):void r.unlink(e,i=>{if(i){if("ENOENT"===i.code)return t(null);if("EPERM"===i.code)return n?fixWinEPERM(e,r,i,t):rmdir(e,r,i,t);if("EISDIR"===i.code)return rmdir(e,r,i,t)}return t(i)}))}function fixWinEPERM(e,r,t,i){return s(e),s(r),s("function"==typeof i),t&&s(t instanceof Error),r.chmod(e,438,s=>{s?"ENOENT"===s.code?i(null):i(t):r.stat(e,(s,n)=>{s?"ENOENT"===s.code?i(null):i(t):n.isDirectory()?rmdir(e,r,t,i):r.unlink(e,i)})}),null}function rmdir(e,r,t,n){return s(e),s(r),t&&s(t instanceof Error),s("function"==typeof n),r.rmdir(e,o=>{!o||"ENOTEMPTY"!==o.code&&"EEXIST"!==o.code&&"EPERM"!==o.code?o&&"ENOTDIR"===o.code?n(t):n(o):function removeSubPath(e,r,t){s(e),s(r),s("function"==typeof t),r.readdir(e,(s,n)=>{if(s)return t(s);let o,a=n.length;if(0===a)return r.rmdir(e,t);n.forEach(s=>{rimraf(i.join(e,s),r,i=>{o||(i?t(o=i):(--a,0===a&&r.rmdir(e,t)))})})})}(e,r,n)}),null}async function remove(e){return new Promise((r,t)=>{rimraf(e,{},e=>{e?t(e):r()})})}function removeNonBlocking(e){remove(e).then(()=>{}).catch(()=>{})}async function isDirExists(e){const[r,t]=await getStatus(e);return!t&&r.isDirectory()}async function isFileExists(e){const[r,t]=await getStatus(e);return!t&&r.isFile()}async function isPathExists(e){const[r]=await getStatus(e);return Boolean(r)}async function writeJSON(e,r,t){let i;try{i=JSON.stringify(r)}catch(e){return e}return writeFile(e,i,t)}function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}exports.HileSystemLocal=class HileSystemLocal{constructor(){_defineProperty(this,"absolutePathFrom",absolutePathFrom),_defineProperty(this,"createDirectory",createDirectory),_defineProperty(this,"createFile",createFile),_defineProperty(this,"dirIsExecutable",dirIsExecutable),_defineProperty(this,"dirIsReadable",dirIsReadable),_defineProperty(this,"dirIsVisible",dirIsVisible),_defineProperty(this,"dirIsWritable",dirIsWritable),_defineProperty(this,"getStatus",getStatus),_defineProperty(this,"isDirExists",isDirExists),_defineProperty(this,"isFileExists",isFileExists),_defineProperty(this,"isPathExists",isPathExists),_defineProperty(this,"fileExtension",fileExtension),_defineProperty(this,"fileName",fileName),_defineProperty(this,"fileNameExt",fileNameExt),_defineProperty(this,"filePath",filePath),_defineProperty(this,"fileIsExecutable",fileIsExecutable),_defineProperty(this,"fileIsReadable",fileIsReadable),_defineProperty(this,"fileIsVisible",fileIsVisible),_defineProperty(this,"fileIsWritable",fileIsWritable),_defineProperty(this,"fileTruncate",fileTruncate),_defineProperty(this,"pathFrom",pathFrom),_defineProperty(this,"readFileToBase64",readFileToBase64),_defineProperty(this,"readFileToBuffer",readFileToBuffer),_defineProperty(this,"readFileToString",readFileToString),_defineProperty(this,"remove",remove),_defineProperty(this,"removeNonBlocking",removeNonBlocking),_defineProperty(this,"writeFile",writeFile),_defineProperty(this,"writeJSON",writeJSON)}},exports.absolutePathFrom=absolutePathFrom,exports.createDirectory=createDirectory,exports.createFile=createFile,exports.dirIsExecutable=dirIsExecutable,exports.dirIsReadable=dirIsReadable,exports.dirIsVisible=dirIsVisible,exports.dirIsWritable=dirIsWritable,exports.fileExtension=fileExtension,exports.fileIsExecutable=fileIsExecutable,exports.fileIsReadable=fileIsReadable,exports.fileIsVisible=fileIsVisible,exports.fileIsWritable=fileIsWritable,exports.fileName=fileName,exports.fileNameExt=fileNameExt,exports.filePath=filePath,exports.fileTruncate=fileTruncate,exports.getStatus=getStatus,exports.isDirExists=isDirExists,exports.isFileExists=isFileExists,exports.isPathExists=isPathExists,exports.pathFrom=pathFrom,exports.readFileToBase64=readFileToBase64,exports.readFileToBuffer=readFileToBuffer,exports.readFileToString=readFileToString,exports.remove=remove,exports.removeNonBlocking=removeNonBlocking,exports.writeFile=writeFile,exports.writeJSON=writeJSON;
//# sourceMappingURL=index.cjs.map
