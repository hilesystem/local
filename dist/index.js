"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var e=require("fs"),t=_interopDefault(e),r=require("@await-of/of"),i=require("path"),s=require("crypto"),n=_interopDefault(require("os")),o=_interopDefault(require("assert"));async function createDirectory(t,i="0777",s=!0){const n=await r.ofError(e.promises.mkdir(t,{mode:i,recursive:s}));return n||!0}async function getStatus(t){return r.of(e.promises.stat(t))}async function writeFile(t,i,s){const n=await r.ofError(e.promises.writeFile(t,i,s));return n||!0}async function createFile(t,s="0777"){const[n,o]=await getStatus(t);if(!o&&n.isFile())return!0;const a=i.dirname(t);if(o&&"ENOENT"===o.code){const e=await createDirectory(a,s);if(!0!==e)return e;const r=await writeFile(t,"",{mode:s,flag:"w"});return!0===r||r}return n.isDirectory()?await writeFile(t,"",{mode:s,flag:"w"}):await r.ofError(e.promises.readdir(a))}const a=new RegExp(["^npm-debug\\.log$","^\\..*\\.swp$","^\\.DS_Store$","^\\.AppleDouble$","^\\.LSOverride$","^Icon\\r$","^\\._.*","^\\.Spotlight-V100(?:$|\\/)","\\.Trashes","^__MACOSX$","~$","^Thumbs\\.db$","^ehthumbs\\.db$","^Desktop\\.ini$","@eaDir$","^\\$RECYCLE.BIN$","^System Volume Information$"].join("|"));function isNotSystemJunk(e){return!function isSystemJunk(e){return a.test(e)}(e)}async function listContents(t,i=!0){const[s,n]=await r.ofAny(e.promises.readdir(t));return n||(i?s.filter(isNotSystemJunk):s)}const c=[".AppleDB",".AppleDesktop",".AppleDouble",".DS_Store",".DocumentRevisions-V100",".LSOverride",".Spotlight-V100",".TemporaryItems",".Trashes",".VolumeIcon.icns",".apdisk",".com.apple.timemachine.donotpresent",".fseventsd","Network Trash Folder","Temporary Items","$RECYCLE.BIN/","Desktop.ini","Thumbs.db","Thumbs.db:encryptable","desktop.ini","ehthumbs.db","ehthumbs_vista.db",".directory"];async function dirIsEmpty(e,t=!0){let r=await listContents(e);if(!Array.isArray(r))return r;if(0===r.length)return!0;if(!t)return!1;for(let e=0;e<r.length;e+=1)for(let t=0;t<c.length;t+=1)r[e]&&(r[e]===c[t]||r[e].match(RegExp(c[t])))&&(delete r[e],r=r.filter(e=>e));return 0===r.length}async function accessWrapper(t,i){const s=await r.ofError(e.promises.access(i,t));return s||!0}async function dirIsExecutable(t){return accessWrapper(e.constants.X_OK,t)}async function dirIsReadable(t){return accessWrapper(e.constants.R_OK,t)}async function dirIsVisible(t){return accessWrapper(e.constants.F_OK,t)}async function dirIsWritable(t){return accessWrapper(e.constants.W_OK,t)}async function hash(t,r){if(!s.getHashes().includes(r))throw new TypeError(`Digest algorithm [${r}] is not supported.`);return s.createHash(r).update(await e.promises.readFile(t)).digest("hex")}async function hashCrc32(t){return function crc32(e){let t,r=[];for(let e=0;e<256;e++){t=e;for(let e=0;e<8;e++)t=1&t?3988292384^t>>>1:t>>>1;r[e]=t}let i=-1,s=0;for(;s<e.length;s++)i=i>>>8^r[255&(i^e.charCodeAt(s))];return(-1^i)>>>0}((await e.promises.readFile(t)).toString("binary")).toString(16)}async function hashMd5(e){return hash(e,"md5")}async function hashSha1(e){return hash(e,"sha1")}async function hashSha256(e){return hash(e,"sha256")}async function hashSha512(e){return hash(e,"sha512")}async function size(t,r=!1){const i=await e.promises.stat(t);return r?i.size.toLocaleString("en").replace(/,/g,"_"):i.size}async function fileIsExecutable(t){return accessWrapper(e.constants.X_OK,t)}async function fileIsReadable(t){return accessWrapper(e.constants.R_OK,t)}async function fileIsVisible(t){return accessWrapper(e.constants.F_OK,t)}async function fileIsWritable(t){return accessWrapper(e.constants.W_OK,t)}async function fileTruncate(t,i=0){const s=await r.ofError(e.promises.truncate(t,i));return s||!0}function pathFrom(e,...t){let r;return r=Array.isArray(e)?e.map(e=>e.toString()):[e.toString()],t.length&&(r=r.concat(t.map(e=>e.toString()))),i.normalize(i.join(...r))}async function listDirectories(e){const t=await listContents(e);if(!Array.isArray(t))return t;return(await Promise.all(t.map(async t=>{const r=pathFrom(e,t),[i,s]=await getStatus(r);if(!s&&i.isDirectory())return t}))).filter(e=>e)}async function listFiles(e){const t=await listContents(e);if(!Array.isArray(t))return t;return(await Promise.all(t.map(async t=>{const r=pathFrom(e,t),[i,s]=await getStatus(r);if(!s&&!i.isDirectory())return t}))).filter(e=>e)}async function move(t,i){const s=await r.ofError(e.promises.rename(t,i));return s||!0}const l=n.homedir();function absolutePath(e){return l?String(e).replace(/^~(?=$|\/|\\)/,l):String(e)}function absolutePathFrom(e,...t){let r;return r=Array.isArray(e)?e.map(e=>e.toString()):[e.toString()],t.length&&(r=r.concat(t.map(e=>e.toString()))),absolutePath(i.resolve(...r))}function fileExtension(e){return i.extname(e).substring(1)}function fileName(e){return i.parse(e).name}function fileNameExt(e){return i.basename(e)}function filePath(e){return i.dirname(e)}async function readFileToBase64(t){const[i,s]=await r.of(e.promises.readFile(t,"base64"));return s||i.toString()}async function readFileToBuffer(t){const[i,s]=await r.of(e.promises.readFile(t,"binary"));return s||Buffer.from(i)}async function readFileToString(t){const[i,s]=await r.of(e.promises.readFile(absolutePath(t),"utf8"));return s||i.toString()}const f="win32"===process.platform;function rimraf(e,r,i){let s=0,n=i,a=r;"function"==typeof a&&(n=a,a={}),o(e,"remove(): missing path"),o.strictEqual(typeof e,"string","remove(): path should be a string"),o.strictEqual(typeof n,"function","remove(): callback function required"),o(a,"remove(): invalid options argument provided"),o.strictEqual(typeof a,"object","remove(): options should be object"),function defaults(e){["unlink","chmod","stat","lstat","rmdir","readdir"].forEach(r=>{e[r]=e[r]||t[r]}),e.maxBusyTries=e.maxBusyTries||3}(a),rimraf_(e,a,(function callbackRimraf(t){if(t){if(("EBUSY"===t.code||"ENOTEMPTY"===t.code||"EPERM"===t.code)&&s<a.maxBusyTries){s++;return void setTimeout(()=>rimraf_(e,a,callbackRimraf),100*s)}if("ENOENT"===t.code)return void n(null)}n(t)}))}function rimraf_(e,t,r){o(e),o(t),o("function"==typeof r),t.lstat(e,(i,s)=>i&&"ENOENT"===i.code?r(null):i&&"EPERM"===i.code&&f?fixWinEPERM(e,t,i,r):s&&s.isDirectory()?rmdir(e,t,i,r):void t.unlink(e,i=>{if(i){if("ENOENT"===i.code)return r(null);if("EPERM"===i.code)return f?fixWinEPERM(e,t,i,r):rmdir(e,t,i,r);if("EISDIR"===i.code)return rmdir(e,t,i,r)}return r(i)}))}function fixWinEPERM(e,t,r,i){return o(e),o(t),o("function"==typeof i),r&&o(r instanceof Error),t.chmod(e,438,s=>{s?"ENOENT"===s.code?i(null):i(r):t.stat(e,(s,n)=>{s?"ENOENT"===s.code?i(null):i(r):n.isDirectory()?rmdir(e,t,r,i):t.unlink(e,i)})}),null}function rmdir(e,t,r,s){return o(e),o(t),r&&o(r instanceof Error),o("function"==typeof s),t.rmdir(e,n=>{!n||"ENOTEMPTY"!==n.code&&"EEXIST"!==n.code&&"EPERM"!==n.code?n&&"ENOTDIR"===n.code?s(r):s(n):function removeSubPath(e,t,r){o(e),o(t),o("function"==typeof r),t.readdir(e,(s,n)=>{if(s)return r(s);let o,a=n.length;if(0===a)return t.rmdir(e,r);n.forEach(s=>{rimraf(i.join(e,s),t,i=>{o||(i?r(o=i):(--a,0===a&&t.rmdir(e,r)))})})})}(e,t,s)}),null}async function remove(e){return new Promise(t=>{rimraf(e,{},e=>{e?t(e):t()})})}function removeNonBlocking(e){remove(e).then(()=>{}).catch(()=>{})}async function removeSilent(t,r){try{await e.promises.rm(t,{force:!0,recursive:!0,...r})}catch(e){}}async function isDirExists(e){const[t,r]=await getStatus(e);return!r&&t.isDirectory()}async function isFileExists(e){const[t,r]=await getStatus(e);return!r&&t.isFile()}async function isPathExists(e){const[t]=await getStatus(e);return Boolean(t)}function isObjectLike(e){return null!==e&&"object"==typeof e&&!Array.isArray(e)}function collectionSortKeys(e,t=!0){if(!isObjectLike(e))return Array.isArray(e)?e.map(e=>collectionSortKeys(e,t)):e;const r=function objectKeys(e){return Object.keys(e).sort((e,t)=>e.localeCompare(t))}(e);return r.length?r.reduce((r,i)=>(t&&isObjectLike(e[i])||t&&Array.isArray(e[i])?r[i]=collectionSortKeys(e[i],t):r[i]=e[i],r),{}):e}async function writeJSON(e,t,r,i){let s,n=t;try{i?(i.sort&&(n=isObjectLike(t)?collectionSortKeys(JSON.parse(JSON.stringify(t))):Array.isArray(t)?JSON.parse(JSON.stringify(t)):t),i.space&&(s=JSON.stringify(n,null,i.space))):s=JSON.stringify(n)}catch(e){return e}return writeFile(e,s,r)}function _defineProperty(e,t,r){return(t=function _toPropertyKey(e){var t=function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}exports.HileSystemLocal=class HileSystemLocal{constructor(){_defineProperty(this,"absolutePathFrom",absolutePathFrom),_defineProperty(this,"createDirectory",createDirectory),_defineProperty(this,"createFile",createFile),_defineProperty(this,"dirIsExecutable",dirIsExecutable),_defineProperty(this,"dirIsReadable",dirIsReadable),_defineProperty(this,"dirIsVisible",dirIsVisible),_defineProperty(this,"dirIsWritable",dirIsWritable),_defineProperty(this,"dirIsEmpty",dirIsEmpty),_defineProperty(this,"getStatus",getStatus),_defineProperty(this,"isDirExists",isDirExists),_defineProperty(this,"isFileExists",isFileExists),_defineProperty(this,"isPathExists",isPathExists),_defineProperty(this,"fileExtension",fileExtension),_defineProperty(this,"fileName",fileName),_defineProperty(this,"fileNameExt",fileNameExt),_defineProperty(this,"filePath",filePath),_defineProperty(this,"fileIsExecutable",fileIsExecutable),_defineProperty(this,"fileIsReadable",fileIsReadable),_defineProperty(this,"fileIsVisible",fileIsVisible),_defineProperty(this,"fileIsWritable",fileIsWritable),_defineProperty(this,"fileTruncate",fileTruncate),_defineProperty(this,"hash",hash),_defineProperty(this,"hashCrc32",hashCrc32),_defineProperty(this,"hashMd5",hashMd5),_defineProperty(this,"hashSha1",hashSha1),_defineProperty(this,"hashSha256",hashSha256),_defineProperty(this,"hashSha512",hashSha512),_defineProperty(this,"listContents",listContents),_defineProperty(this,"listDirectories",listDirectories),_defineProperty(this,"listFiles",listFiles),_defineProperty(this,"move",move),_defineProperty(this,"pathFrom",pathFrom),_defineProperty(this,"readFileToBase64",readFileToBase64),_defineProperty(this,"readFileToBuffer",readFileToBuffer),_defineProperty(this,"readFileToString",readFileToString),_defineProperty(this,"remove",remove),_defineProperty(this,"removeNonBlocking",removeNonBlocking),_defineProperty(this,"removeSilent",removeSilent),_defineProperty(this,"size",size),_defineProperty(this,"writeFile",writeFile),_defineProperty(this,"writeJSON",writeJSON)}},exports.absolutePathFrom=absolutePathFrom,exports.createDirectory=createDirectory,exports.createFile=createFile,exports.dirIsEmpty=dirIsEmpty,exports.dirIsExecutable=dirIsExecutable,exports.dirIsReadable=dirIsReadable,exports.dirIsVisible=dirIsVisible,exports.dirIsWritable=dirIsWritable,exports.fileExtension=fileExtension,exports.fileIsExecutable=fileIsExecutable,exports.fileIsReadable=fileIsReadable,exports.fileIsVisible=fileIsVisible,exports.fileIsWritable=fileIsWritable,exports.fileName=fileName,exports.fileNameExt=fileNameExt,exports.filePath=filePath,exports.fileTruncate=fileTruncate,exports.getStatus=getStatus,exports.hash=hash,exports.hashCrc32=hashCrc32,exports.hashMd5=hashMd5,exports.hashSha1=hashSha1,exports.hashSha256=hashSha256,exports.hashSha512=hashSha512,exports.isDirExists=isDirExists,exports.isFileExists=isFileExists,exports.isPathExists=isPathExists,exports.listContents=listContents,exports.listDirectories=listDirectories,exports.listFiles=listFiles,exports.move=move,exports.pathFrom=pathFrom,exports.readFileToBase64=readFileToBase64,exports.readFileToBuffer=readFileToBuffer,exports.readFileToString=readFileToString,exports.remove=remove,exports.removeNonBlocking=removeNonBlocking,exports.removeSilent=removeSilent,exports.size=size,exports.writeFile=writeFile,exports.writeJSON=writeJSON;
//# sourceMappingURL=index.js.map
