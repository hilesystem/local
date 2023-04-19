import e,{promises as t,constants as r}from"fs";import{ofError as i,of as n,ofAny as s}from"@await-of/of";import{dirname as a,normalize as o,join as c,resolve as l,extname as f,parse as u,basename as h}from"path";import{getHashes as d,createHash as y}from"crypto";import p from"os";import m from"assert";async function createDirectory(e,r="0777",n=!0){const s=await i(t.mkdir(e,{mode:r,recursive:n}));return s||!0}async function getStatus(e){return n(t.stat(e))}async function writeFile(e,r,n){const s=await i(t.writeFile(e,r,n));return s||!0}async function createFile(e,r="0777"){const[n,s]=await getStatus(e);if(!s&&n.isFile())return!0;const o=a(e);if(s&&"ENOENT"===s.code){const t=await createDirectory(o,r);if(!0!==t)return t;const i=await writeFile(e,"",{mode:r,flag:"w"});return!0===i||i}return n.isDirectory()?await writeFile(e,"",{mode:r,flag:"w"}):await i(t.readdir(o))}const b=new RegExp(["^npm-debug\\.log$","^\\..*\\.swp$","^\\.DS_Store$","^\\.AppleDouble$","^\\.LSOverride$","^Icon\\r$","^\\._.*","^\\.Spotlight-V100(?:$|\\/)","\\.Trashes","^__MACOSX$","~$","^Thumbs\\.db$","^ehthumbs\\.db$","^Desktop\\.ini$","@eaDir$","^\\$RECYCLE.BIN$","^System Volume Information$"].join("|"));function isNotSystemJunk(e){return!function isSystemJunk(e){return b.test(e)}(e)}async function listContents(e,r=!0){const[i,n]=await s(t.readdir(e));return n||(r?i.filter(isNotSystemJunk):i)}const E=[".AppleDB",".AppleDesktop",".AppleDouble",".DS_Store",".DocumentRevisions-V100",".LSOverride",".Spotlight-V100",".TemporaryItems",".Trashes",".VolumeIcon.icns",".apdisk",".com.apple.timemachine.donotpresent",".fseventsd","Network Trash Folder","Temporary Items","$RECYCLE.BIN/","Desktop.ini","Thumbs.db","Thumbs.db:encryptable","desktop.ini","ehthumbs.db","ehthumbs_vista.db",".directory"];async function dirIsEmpty(e,t=!0){let r=await listContents(e);if(!Array.isArray(r))return r;if(0===r.length)return!0;if(!t)return!1;for(let e=0;e<r.length;e+=1)for(let t=0;t<E.length;t+=1)r[e]&&(r[e]===E[t]||r[e].match(RegExp(E[t])))&&(delete r[e],r=r.filter(e=>e));return 0===r.length}async function accessWrapper(e,r){const n=await i(t.access(r,e));return n||!0}async function dirIsExecutable(e){return accessWrapper(r.X_OK,e)}async function dirIsReadable(e){return accessWrapper(r.R_OK,e)}async function dirIsVisible(e){return accessWrapper(r.F_OK,e)}async function dirIsWritable(e){return accessWrapper(r.W_OK,e)}async function hash(e,r){if(!d().includes(r))throw new TypeError(`Digest algorithm [${r}] is not supported.`);return y(r).update(await t.readFile(e)).digest("hex")}async function hashCrc32(e){return function crc32(e){let t,r=[];for(let e=0;e<256;e++){t=e;for(let e=0;e<8;e++)t=1&t?3988292384^t>>>1:t>>>1;r[e]=t}let i=-1,n=0;for(;n<e.length;n++)i=i>>>8^r[255&(i^e.charCodeAt(n))];return(-1^i)>>>0}((await t.readFile(e)).toString("binary")).toString(16)}async function hashMd5(e){return hash(e,"md5")}async function hashSha1(e){return hash(e,"sha1")}async function hashSha256(e){return hash(e,"sha256")}async function hashSha512(e){return hash(e,"sha512")}async function size(e,r=!1){const i=await t.stat(e);return r?i.size.toLocaleString("en").replace(/,/g,"_"):i.size}async function fileIsExecutable(e){return accessWrapper(r.X_OK,e)}async function fileIsReadable(e){return accessWrapper(r.R_OK,e)}async function fileIsVisible(e){return accessWrapper(r.F_OK,e)}async function fileIsWritable(e){return accessWrapper(r.W_OK,e)}async function fileTruncate(e,r=0){const n=await i(t.truncate(e,r));return n||!0}function pathFrom(e,...t){let r;return r=Array.isArray(e)?e.map(e=>e.toString()):[e.toString()],t.length&&(r=r.concat(t.map(e=>e.toString()))),o(c(...r))}async function listDirectories(e){const t=await listContents(e);if(!Array.isArray(t))return t;return(await Promise.all(t.map(async t=>{const r=pathFrom(e,t),[i,n]=await getStatus(r);if(!n&&i.isDirectory())return t}))).filter(e=>e)}async function listFiles(e){const t=await listContents(e);if(!Array.isArray(t))return t;return(await Promise.all(t.map(async t=>{const r=pathFrom(e,t),[i,n]=await getStatus(r);if(!n&&!i.isDirectory())return t}))).filter(e=>e)}async function move(e,r){const n=await i(t.rename(e,r));return n||!0}const S=p.homedir();function absolutePath(e){return S?String(e).replace(/^~(?=$|\/|\\)/,S):String(e)}function absolutePathFrom(e,...t){let r;return r=Array.isArray(e)?e.map(e=>e.toString()):[e.toString()],t.length&&(r=r.concat(t.map(e=>e.toString()))),absolutePath(l(...r))}function fileExtension(e){return f(e).substring(1)}function fileName(e){return u(e).name}function fileNameExt(e){return h(e)}function filePath(e){return a(e)}async function readFileToBase64(e){const[r,i]=await n(t.readFile(e,"base64"));return i||r.toString()}async function readFileToBuffer(e){const[r,i]=await n(t.readFile(e,"binary"));return i||Buffer.from(r)}async function readFileToString(e){const[r,i]=await n(t.readFile(absolutePath(e),"utf8"));return i||r.toString()}const P="win32"===process.platform;function rimraf(t,r,i){let n=0,s=i,a=r;"function"==typeof a&&(s=a,a={}),m(t,"remove(): missing path"),m.strictEqual(typeof t,"string","remove(): path should be a string"),m.strictEqual(typeof s,"function","remove(): callback function required"),m(a,"remove(): invalid options argument provided"),m.strictEqual(typeof a,"object","remove(): options should be object"),function defaults(t){["unlink","chmod","stat","lstat","rmdir","readdir"].forEach(r=>{t[r]=t[r]||e[r]}),t.maxBusyTries=t.maxBusyTries||3}(a),rimraf_(t,a,(function callbackRimraf(e){if(e){if(("EBUSY"===e.code||"ENOTEMPTY"===e.code||"EPERM"===e.code)&&n<a.maxBusyTries){n++;return void setTimeout(()=>rimraf_(t,a,callbackRimraf),100*n)}if("ENOENT"===e.code)return void s(null)}s(e)}))}function rimraf_(e,t,r){m(e),m(t),m("function"==typeof r),t.lstat(e,(i,n)=>i&&"ENOENT"===i.code?r(null):i&&"EPERM"===i.code&&P?fixWinEPERM(e,t,i,r):n&&n.isDirectory()?rmdir(e,t,i,r):void t.unlink(e,i=>{if(i){if("ENOENT"===i.code)return r(null);if("EPERM"===i.code)return P?fixWinEPERM(e,t,i,r):rmdir(e,t,i,r);if("EISDIR"===i.code)return rmdir(e,t,i,r)}return r(i)}))}function fixWinEPERM(e,t,r,i){return m(e),m(t),m("function"==typeof i),r&&m(r instanceof Error),t.chmod(e,438,n=>{n?"ENOENT"===n.code?i(null):i(r):t.stat(e,(n,s)=>{n?"ENOENT"===n.code?i(null):i(r):s.isDirectory()?rmdir(e,t,r,i):t.unlink(e,i)})}),null}function rmdir(e,t,r,i){return m(e),m(t),r&&m(r instanceof Error),m("function"==typeof i),t.rmdir(e,n=>{!n||"ENOTEMPTY"!==n.code&&"EEXIST"!==n.code&&"EPERM"!==n.code?n&&"ENOTDIR"===n.code?i(r):i(n):function removeSubPath(e,t,r){m(e),m(t),m("function"==typeof r),t.readdir(e,(i,n)=>{if(i)return r(i);let s,a=n.length;if(0===a)return t.rmdir(e,r);n.forEach(i=>{rimraf(c(e,i),t,i=>{s||(i?r(s=i):(--a,0===a&&t.rmdir(e,r)))})})})}(e,t,i)}),null}async function remove(e){return new Promise(t=>{rimraf(e,{},e=>{e?t(e):t()})})}function removeNonBlocking(e){remove(e).then(()=>{}).catch(()=>{})}async function removeSilent(e,r){try{await t.rm(e,{force:!0,recursive:!0,...r})}catch(e){}}async function isDirExists(e){const[t,r]=await getStatus(e);return!r&&t.isDirectory()}async function isFileExists(e){const[t,r]=await getStatus(e);return!r&&t.isFile()}async function isPathExists(e){const[t]=await getStatus(e);return Boolean(t)}function isObjectLike(e){return null!==e&&"object"==typeof e&&!Array.isArray(e)}function collectionSortKeys(e,t=!0){if(!isObjectLike(e))return Array.isArray(e)?e.map(e=>collectionSortKeys(e,t)):e;const r=function objectKeys(e){return Object.keys(e).sort((e,t)=>e.localeCompare(t))}(e);return r.length?r.reduce((r,i)=>(t&&isObjectLike(e[i])||t&&Array.isArray(e[i])?r[i]=collectionSortKeys(e[i],t):r[i]=e[i],r),{}):e}async function writeJSON(e,t,r,i){let n,s=t;try{i?(i.sort&&(s=isObjectLike(t)?collectionSortKeys(JSON.parse(JSON.stringify(t))):Array.isArray(t)?JSON.parse(JSON.stringify(t)):t),i.space&&(n=JSON.stringify(s,null,i.space))):n=JSON.stringify(s)}catch(e){return e}return writeFile(e,n,r)}function _defineProperty(e,t,r){return(t=function _toPropertyKey(e){var t=function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class HileSystemLocal{constructor(){_defineProperty(this,"absolutePathFrom",absolutePathFrom),_defineProperty(this,"createDirectory",createDirectory),_defineProperty(this,"createFile",createFile),_defineProperty(this,"dirIsExecutable",dirIsExecutable),_defineProperty(this,"dirIsReadable",dirIsReadable),_defineProperty(this,"dirIsVisible",dirIsVisible),_defineProperty(this,"dirIsWritable",dirIsWritable),_defineProperty(this,"dirIsEmpty",dirIsEmpty),_defineProperty(this,"getStatus",getStatus),_defineProperty(this,"isDirExists",isDirExists),_defineProperty(this,"isFileExists",isFileExists),_defineProperty(this,"isPathExists",isPathExists),_defineProperty(this,"fileExtension",fileExtension),_defineProperty(this,"fileName",fileName),_defineProperty(this,"fileNameExt",fileNameExt),_defineProperty(this,"filePath",filePath),_defineProperty(this,"fileIsExecutable",fileIsExecutable),_defineProperty(this,"fileIsReadable",fileIsReadable),_defineProperty(this,"fileIsVisible",fileIsVisible),_defineProperty(this,"fileIsWritable",fileIsWritable),_defineProperty(this,"fileTruncate",fileTruncate),_defineProperty(this,"hash",hash),_defineProperty(this,"hashCrc32",hashCrc32),_defineProperty(this,"hashMd5",hashMd5),_defineProperty(this,"hashSha1",hashSha1),_defineProperty(this,"hashSha256",hashSha256),_defineProperty(this,"hashSha512",hashSha512),_defineProperty(this,"listContents",listContents),_defineProperty(this,"listDirectories",listDirectories),_defineProperty(this,"listFiles",listFiles),_defineProperty(this,"move",move),_defineProperty(this,"pathFrom",pathFrom),_defineProperty(this,"readFileToBase64",readFileToBase64),_defineProperty(this,"readFileToBuffer",readFileToBuffer),_defineProperty(this,"readFileToString",readFileToString),_defineProperty(this,"remove",remove),_defineProperty(this,"removeNonBlocking",removeNonBlocking),_defineProperty(this,"removeSilent",removeSilent),_defineProperty(this,"size",size),_defineProperty(this,"writeFile",writeFile),_defineProperty(this,"writeJSON",writeJSON)}}export{HileSystemLocal,absolutePathFrom,createDirectory,createFile,dirIsEmpty,dirIsExecutable,dirIsReadable,dirIsVisible,dirIsWritable,fileExtension,fileIsExecutable,fileIsReadable,fileIsVisible,fileIsWritable,fileName,fileNameExt,filePath,fileTruncate,getStatus,hash,hashCrc32,hashMd5,hashSha1,hashSha256,hashSha512,isDirExists,isFileExists,isPathExists,listContents,listDirectories,listFiles,move,pathFrom,readFileToBase64,readFileToBuffer,readFileToString,remove,removeNonBlocking,removeSilent,size,writeFile,writeJSON};
//# sourceMappingURL=index.mjs.map
