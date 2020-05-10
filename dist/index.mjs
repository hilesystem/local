import*as e from"fs";import{promises as i,constants as t}from"fs";import{ofError as r,of as n}from"@r37r0m0d3l/of";import s,{extname as a,parse as o,basename as c,dirname as f}from"path";import l from"assert";async function createDirectory(e,t="0777",n=!0){const s=await r(i.mkdir(e,{mode:t,recursive:n}));return s||!0}async function getStatus(e){return n(i.stat(e))}async function writeFile(e,t,n){const s=await r(i.writeFile(e,t,n));return s||!0}async function createFile(e,t="0777"){const[n,a]=await getStatus(e);if(!a&&n.isFile())return!0;const o=s.dirname(e);if(a&&"ENOENT"===a.code){const i=await createDirectory(o,t);if(!0!==i)return i;const r=await writeFile(e,"",{mode:t,flag:"w"});return!0===r||r}return n.isDirectory()?await writeFile(e,"",{mode:t,flag:"w"}):await r(i.readdir(o))}async function accessWrapper(e,t){const n=await r(i.access(t,e));return n||!0}async function dirIsExecutable(e){return accessWrapper(t.X_OK,e)}async function dirIsReadable(e){return accessWrapper(t.R_OK,e)}async function dirIsVisible(e){return accessWrapper(t.F_OK,e)}async function dirIsWritable(e){return accessWrapper(t.W_OK,e)}async function fileIsExecutable(e){return accessWrapper(t.X_OK,e)}async function fileIsReadable(e){return accessWrapper(t.R_OK,e)}async function fileIsVisible(e){return accessWrapper(t.F_OK,e)}async function fileIsWritable(e){return accessWrapper(t.W_OK,e)}async function fileTruncate(e,t=0){const n=await r(i.truncate(e,t));return n||!0}function fileExtension(e){return a(e).substring(1)}function fileName(e){return o(e).name}function fileNameExt(e){return c(e)}function filePath(e){return f(e)}const u="win32"===process.platform;function rimraf(i,t,r){let n=0;"function"==typeof t&&(r=t,t={}),l(i,"remove(): missing path"),l.strictEqual(typeof i,"string","remove(): path should be a string"),l.strictEqual(typeof r,"function","remove(): callback function required"),l(t,"remove(): invalid options argument provided"),l.strictEqual(typeof t,"object","remove(): options should be object"),function defaults(i){["unlink","chmod","stat","lstat","rmdir","readdir"].forEach(t=>{i[t]=i[t]||e[t]}),i.maxBusyTries=i.maxBusyTries||3}(t),rimraf_(i,t,(function callbackRimraf(e){if(e){if(("EBUSY"===e.code||"ENOTEMPTY"===e.code||"EPERM"===e.code)&&n<t.maxBusyTries){return n++,setTimeout(()=>rimraf_(i,t,callbackRimraf),100*n)}"ENOENT"===e.code&&(e=null)}r(e)}))}function rimraf_(e,i,t){l(e),l(i),l("function"==typeof t),i.lstat(e,(r,n)=>r&&"ENOENT"===r.code?t(null):r&&"EPERM"===r.code&&u?fixWinEPERM(e,i,r,t):n&&n.isDirectory()?rmdir(e,i,r,t):void i.unlink(e,r=>{if(r){if("ENOENT"===r.code)return t(null);if("EPERM"===r.code)return u?fixWinEPERM(e,i,r,t):rmdir(e,i,r,t);if("EISDIR"===r.code)return rmdir(e,i,r,t)}return t(r)}))}function fixWinEPERM(e,i,t,r){l(e),l(i),l("function"==typeof r),t&&l(t instanceof Error),i.chmod(e,438,n=>{n?r("ENOENT"===n.code?null:t):i.stat(e,(n,s)=>{n?r("ENOENT"===n.code?null:t):s.isDirectory()?rmdir(e,i,t,r):i.unlink(e,r)})})}function rmdir(e,i,t,r){l(e),l(i),t&&l(t instanceof Error),l("function"==typeof r),i.rmdir(e,n=>{!n||"ENOTEMPTY"!==n.code&&"EEXIST"!==n.code&&"EPERM"!==n.code?n&&"ENOTDIR"===n.code?r(t):r(n):function removeSubPath(e,i,t){l(e),l(i),l("function"==typeof t),i.readdir(e,(r,n)=>{if(r)return t(r);let a,o=n.length;if(0===o)return i.rmdir(e,t);n.forEach(r=>{rimraf(s.join(e,r),i,r=>{if(!a)return r?t(a=r):void(0==--o&&i.rmdir(e,t))})})})}(e,i,r)})}async function remove(e){return new Promise((i,t)=>{rimraf(e,{},e=>{e?t(e):i()})})}async function isDirExists(e){const[i,t]=await getStatus(e);return!t&&i.isDirectory()}async function isFileExists(e){const[i,t]=await getStatus(e);return!t&&i.isFile()}async function isPathExists(e){const[i]=await getStatus(e);return Boolean(i)}function _defineProperty(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}class HileSystemLocal{constructor(){_defineProperty(this,"createDirectory",createDirectory),_defineProperty(this,"createFile",createFile),_defineProperty(this,"dirIsExecutable",dirIsExecutable),_defineProperty(this,"dirIsReadable",dirIsReadable),_defineProperty(this,"dirIsVisible",dirIsVisible),_defineProperty(this,"dirIsWritable",dirIsWritable),_defineProperty(this,"getStatus",getStatus),_defineProperty(this,"isDirExists",isDirExists),_defineProperty(this,"isFileExists",isFileExists),_defineProperty(this,"isPathExists",isPathExists),_defineProperty(this,"fileExtension",fileExtension),_defineProperty(this,"fileName",fileName),_defineProperty(this,"fileNameExt",fileNameExt),_defineProperty(this,"filePath",filePath),_defineProperty(this,"fileIsExecutable",fileIsExecutable),_defineProperty(this,"fileIsReadable",fileIsReadable),_defineProperty(this,"fileIsVisible",fileIsVisible),_defineProperty(this,"fileIsWritable",fileIsWritable),_defineProperty(this,"fileTruncate",fileTruncate),_defineProperty(this,"remove",remove),_defineProperty(this,"writeFile",writeFile)}}export{HileSystemLocal,createDirectory,createFile,dirIsExecutable,dirIsReadable,dirIsVisible,dirIsWritable,fileExtension,fileIsExecutable,fileIsReadable,fileIsVisible,fileIsWritable,fileName,fileNameExt,filePath,fileTruncate,getStatus,isDirExists,isFileExists,isPathExists,remove,writeFile};
//# sourceMappingURL=index.mjs.map
