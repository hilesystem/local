import*as e from"fs";import{promises as i,constants as r}from"fs";import{ofError as t,of as n}from"@r37r0m0d3l/of";import a,{resolve as s,extname as o,parse as c,basename as f,dirname as l,join as u}from"path";import d from"assert";async function createDirectory(e,r="0777",n=!0){const a=await t(i.mkdir(e,{mode:r,recursive:n}));return a||!0}async function getStatus(e){return n(i.stat(e))}async function writeFile(e,r,n){const a=await t(i.writeFile(e,r,n));return a||!0}async function createFile(e,r="0777"){const[n,s]=await getStatus(e);if(!s&&n.isFile())return!0;const o=a.dirname(e);if(s&&"ENOENT"===s.code){const i=await createDirectory(o,r);if(!0!==i)return i;const t=await writeFile(e,"",{mode:r,flag:"w"});return!0===t||t}return n.isDirectory()?await writeFile(e,"",{mode:r,flag:"w"}):await t(i.readdir(o))}async function accessWrapper(e,r){const n=await t(i.access(r,e));return n||!0}async function dirIsExecutable(e){return accessWrapper(r.X_OK,e)}async function dirIsReadable(e){return accessWrapper(r.R_OK,e)}async function dirIsVisible(e){return accessWrapper(r.F_OK,e)}async function dirIsWritable(e){return accessWrapper(r.W_OK,e)}async function fileIsExecutable(e){return accessWrapper(r.X_OK,e)}async function fileIsReadable(e){return accessWrapper(r.R_OK,e)}async function fileIsVisible(e){return accessWrapper(r.F_OK,e)}async function fileIsWritable(e){return accessWrapper(r.W_OK,e)}async function fileTruncate(e,r=0){const n=await t(i.truncate(e,r));return n||!0}function absolutePathFrom(e,...i){let r;return r=Array.isArray(e)?e.map(e=>e.toString()):[e.toString()],i.length&&(r=r.concat(i.map(e=>e.toString()))),s(...r)}function fileExtension(e){return o(e).substring(1)}function fileName(e){return c(e).name}function fileNameExt(e){return f(e)}function filePath(e){return l(e)}function pathFrom(e,...i){let r;return r=Array.isArray(e)?e.map(e=>e.toString()):[e.toString()],i.length&&(r=r.concat(i.map(e=>e.toString()))),u(...r)}async function readFileToBase64(e){const[r,t]=await n(i.readFile(e,"base64"));return t||r.toString()}async function readFileToBuffer(e){const[r,t]=await n(i.readFile(e,"binary"));return t||Buffer.from(r)}async function readFileToString(e){const[r,t]=await n(i.readFile(e,"utf8"));return t||r.toString()}const m="win32"===process.platform;function rimraf(i,r,t){let n=0,a=t,s=r;"function"==typeof s&&(a=s,s={}),d(i,"remove(): missing path"),d.strictEqual(typeof i,"string","remove(): path should be a string"),d.strictEqual(typeof a,"function","remove(): callback function required"),d(s,"remove(): invalid options argument provided"),d.strictEqual(typeof s,"object","remove(): options should be object"),function defaults(i){["unlink","chmod","stat","lstat","rmdir","readdir"].forEach(r=>{i[r]=i[r]||e[r]}),i.maxBusyTries=i.maxBusyTries||3}(s),rimraf_(i,s,(function callbackRimraf(e){if(e){if(("EBUSY"===e.code||"ENOTEMPTY"===e.code||"EPERM"===e.code)&&n<s.maxBusyTries){n++;return void setTimeout(()=>rimraf_(i,s,callbackRimraf),100*n)}if("ENOENT"===e.code)return void a(null)}a(e)}))}function rimraf_(e,i,r){d(e),d(i),d("function"==typeof r),i.lstat(e,(t,n)=>t&&"ENOENT"===t.code?r(null):t&&"EPERM"===t.code&&m?fixWinEPERM(e,i,t,r):n&&n.isDirectory()?rmdir(e,i,t,r):void i.unlink(e,t=>{if(t){if("ENOENT"===t.code)return r(null);if("EPERM"===t.code)return m?fixWinEPERM(e,i,t,r):rmdir(e,i,t,r);if("EISDIR"===t.code)return rmdir(e,i,t,r)}return r(t)}))}function fixWinEPERM(e,i,r,t){d(e),d(i),d("function"==typeof t),r&&d(r instanceof Error),i.chmod(e,438,n=>{n?"ENOENT"===n.code?t(null):t(r):i.stat(e,(n,a)=>{n?"ENOENT"===n.code?t(null):t(r):a.isDirectory()?rmdir(e,i,r,t):i.unlink(e,t)})})}function rmdir(e,i,r,t){d(e),d(i),r&&d(r instanceof Error),d("function"==typeof t),i.rmdir(e,n=>{!n||"ENOTEMPTY"!==n.code&&"EEXIST"!==n.code&&"EPERM"!==n.code?n&&"ENOTDIR"===n.code?t(r):t(n):function removeSubPath(e,i,r){d(e),d(i),d("function"==typeof r),i.readdir(e,(t,n)=>{if(t)return r(t);let s,o=n.length;if(0===o)return i.rmdir(e,r);n.forEach(t=>{rimraf(a.join(e,t),i,t=>{s||(t?r(s=t):(--o,0===o&&i.rmdir(e,r)))})})})}(e,i,t)})}async function remove(e){return new Promise((i,r)=>{rimraf(e,{},e=>{e?r(e):i()})})}function removeNonBlocking(e){remove(e).then(()=>{}).catch(()=>{})}async function isDirExists(e){const[i,r]=await getStatus(e);return!r&&i.isDirectory()}async function isFileExists(e){const[i,r]=await getStatus(e);return!r&&i.isFile()}async function isPathExists(e){const[i]=await getStatus(e);return Boolean(i)}function _defineProperty(e,i,r){return i in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}async function writeJSON(e,i,r){let t;try{t=JSON.stringify(i)}catch(e){return e}return writeFile(e,t,r)}class HileSystemLocal{constructor(){_defineProperty(this,"absolutePathFrom",absolutePathFrom),_defineProperty(this,"createDirectory",createDirectory),_defineProperty(this,"createFile",createFile),_defineProperty(this,"dirIsExecutable",dirIsExecutable),_defineProperty(this,"dirIsReadable",dirIsReadable),_defineProperty(this,"dirIsVisible",dirIsVisible),_defineProperty(this,"dirIsWritable",dirIsWritable),_defineProperty(this,"getStatus",getStatus),_defineProperty(this,"isDirExists",isDirExists),_defineProperty(this,"isFileExists",isFileExists),_defineProperty(this,"isPathExists",isPathExists),_defineProperty(this,"fileExtension",fileExtension),_defineProperty(this,"fileName",fileName),_defineProperty(this,"fileNameExt",fileNameExt),_defineProperty(this,"filePath",filePath),_defineProperty(this,"fileIsExecutable",fileIsExecutable),_defineProperty(this,"fileIsReadable",fileIsReadable),_defineProperty(this,"fileIsVisible",fileIsVisible),_defineProperty(this,"fileIsWritable",fileIsWritable),_defineProperty(this,"fileTruncate",fileTruncate),_defineProperty(this,"pathFrom",pathFrom),_defineProperty(this,"readFileToBase64",readFileToBase64),_defineProperty(this,"readFileToBuffer",readFileToBuffer),_defineProperty(this,"readFileToString",readFileToString),_defineProperty(this,"remove",remove),_defineProperty(this,"removeNonBlocking",removeNonBlocking),_defineProperty(this,"writeFile",writeFile),_defineProperty(this,"writeJSON",writeJSON)}}export{HileSystemLocal,absolutePathFrom,createDirectory,createFile,dirIsExecutable,dirIsReadable,dirIsVisible,dirIsWritable,fileExtension,fileIsExecutable,fileIsReadable,fileIsVisible,fileIsWritable,fileName,fileNameExt,filePath,fileTruncate,getStatus,isDirExists,isFileExists,isPathExists,pathFrom,readFileToBase64,readFileToBuffer,readFileToString,remove,removeNonBlocking,writeFile};
//# sourceMappingURL=index.mjs.map
