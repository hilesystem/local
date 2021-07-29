import e,{promises as t,constants as r}from"fs";import{ofError as i,of as n,ofAny as s}from"@await-of/of";import{dirname as a,normalize as o,join as c,resolve as l,extname as f,parse as u,basename as d}from"path";import m from"assert";async function createDirectory(e,r="0777",n=!0){const s=await i(t.mkdir(e,{mode:r,recursive:n}));return s||!0}async function getStatus(e){return n(t.stat(e))}async function writeFile(e,r,n){const s=await i(t.writeFile(e,r,n));return s||!0}async function createFile(e,r="0777"){const[n,s]=await getStatus(e);if(!s&&n.isFile())return!0;const o=a(e);if(s&&"ENOENT"===s.code){const t=await createDirectory(o,r);if(!0!==t)return t;const i=await writeFile(e,"",{mode:r,flag:"w"});return!0===i||i}return n.isDirectory()?await writeFile(e,"",{mode:r,flag:"w"}):await i(t.readdir(o))}async function listContents(e){const[r,i]=await s(t.readdir(e));return i||r}const y=[".AppleDB",".AppleDesktop",".AppleDouble",".DS_Store",".DocumentRevisions-V100",".LSOverride",".Spotlight-V100",".TemporaryItems",".Trashes",".VolumeIcon.icns",".apdisk",".com.apple.timemachine.donotpresent",".fseventsd","Network Trash Folder","Temporary Items","$RECYCLE.BIN/","Desktop.ini","Thumbs.db","Thumbs.db:encryptable","desktop.ini","ehthumbs.db","ehthumbs_vista.db",".directory"];async function dirIsEmpty(e,t=!0){let r=await listContents(e);if(!Array.isArray(r))return r;if(0===r.length)return!0;if(!t)return!1;for(let e=0;e<r.length;e+=1)for(let t=0;t<y.length;t+=1)r[e]&&(r[e]===y[t]||r[e].match(RegExp(y[t])))&&(delete r[e],r=r.filter(e=>e));return 0===r.length}async function accessWrapper(e,r){const n=await i(t.access(r,e));return n||!0}async function dirIsExecutable(e){return accessWrapper(r.X_OK,e)}async function dirIsReadable(e){return accessWrapper(r.R_OK,e)}async function dirIsVisible(e){return accessWrapper(r.F_OK,e)}async function dirIsWritable(e){return accessWrapper(r.W_OK,e)}async function fileIsExecutable(e){return accessWrapper(r.X_OK,e)}async function fileIsReadable(e){return accessWrapper(r.R_OK,e)}async function fileIsVisible(e){return accessWrapper(r.F_OK,e)}async function fileIsWritable(e){return accessWrapper(r.W_OK,e)}async function fileTruncate(e,r=0){const n=await i(t.truncate(e,r));return n||!0}function pathFrom(e,...t){let r;return r=Array.isArray(e)?e.map(e=>e.toString()):[e.toString()],t.length&&(r=r.concat(t.map(e=>e.toString()))),o(c(...r))}async function listDirectories(e){const t=await listContents(e);if(!Array.isArray(t))return t;return(await Promise.all(t.map(async t=>{const r=pathFrom(e,t),[i,n]=await getStatus(r);if(!n&&i.isDirectory())return t}))).filter(e=>e)}async function listFiles(e){const t=await listContents(e);if(!Array.isArray(t))return t;return(await Promise.all(t.map(async t=>{const r=pathFrom(e,t),[i,n]=await getStatus(r);if(!n&&!i.isDirectory())return t}))).filter(e=>e)}async function move(e,r){const n=await i(t.rename(e,r));return n||!0}function absolutePathFrom(e,...t){let r;return r=Array.isArray(e)?e.map(e=>e.toString()):[e.toString()],t.length&&(r=r.concat(t.map(e=>e.toString()))),l(...r)}function fileExtension(e){return f(e).substring(1)}function fileName(e){return u(e).name}function fileNameExt(e){return d(e)}function filePath(e){return a(e)}async function readFileToBase64(e){const[r,i]=await n(t.readFile(e,"base64"));return i||r.toString()}async function readFileToBuffer(e){const[r,i]=await n(t.readFile(e,"binary"));return i||Buffer.from(r)}async function readFileToString(e){const[r,i]=await n(t.readFile(e,"utf8"));return i||r.toString()}const p="win32"===process.platform;function rimraf(t,r,i){let n=0,s=i,a=r;"function"==typeof a&&(s=a,a={}),m(t,"remove(): missing path"),m.strictEqual(typeof t,"string","remove(): path should be a string"),m.strictEqual(typeof s,"function","remove(): callback function required"),m(a,"remove(): invalid options argument provided"),m.strictEqual(typeof a,"object","remove(): options should be object"),function defaults(t){["unlink","chmod","stat","lstat","rmdir","readdir"].forEach(r=>{t[r]=t[r]||e[r]}),t.maxBusyTries=t.maxBusyTries||3}(a),rimraf_(t,a,(function callbackRimraf(e){if(e){if(("EBUSY"===e.code||"ENOTEMPTY"===e.code||"EPERM"===e.code)&&n<a.maxBusyTries){n++;return void setTimeout(()=>rimraf_(t,a,callbackRimraf),100*n)}if("ENOENT"===e.code)return void s(null)}s(e)}))}function rimraf_(e,t,r){m(e),m(t),m("function"==typeof r),t.lstat(e,(i,n)=>i&&"ENOENT"===i.code?r(null):i&&"EPERM"===i.code&&p?fixWinEPERM(e,t,i,r):n&&n.isDirectory()?rmdir(e,t,i,r):void t.unlink(e,i=>{if(i){if("ENOENT"===i.code)return r(null);if("EPERM"===i.code)return p?fixWinEPERM(e,t,i,r):rmdir(e,t,i,r);if("EISDIR"===i.code)return rmdir(e,t,i,r)}return r(i)}))}function fixWinEPERM(e,t,r,i){return m(e),m(t),m("function"==typeof i),r&&m(r instanceof Error),t.chmod(e,438,n=>{n?"ENOENT"===n.code?i(null):i(r):t.stat(e,(n,s)=>{n?"ENOENT"===n.code?i(null):i(r):s.isDirectory()?rmdir(e,t,r,i):t.unlink(e,i)})}),null}function rmdir(e,t,r,i){return m(e),m(t),r&&m(r instanceof Error),m("function"==typeof i),t.rmdir(e,n=>{!n||"ENOTEMPTY"!==n.code&&"EEXIST"!==n.code&&"EPERM"!==n.code?n&&"ENOTDIR"===n.code?i(r):i(n):function removeSubPath(e,t,r){m(e),m(t),m("function"==typeof r),t.readdir(e,(i,n)=>{if(i)return r(i);let s,a=n.length;if(0===a)return t.rmdir(e,r);n.forEach(i=>{rimraf(c(e,i),t,i=>{s||(i?r(s=i):(--a,0===a&&t.rmdir(e,r)))})})})}(e,t,i)}),null}async function remove(e){return new Promise(t=>{rimraf(e,{},e=>{e?t(e):t()})})}function removeNonBlocking(e){remove(e).then(()=>{}).catch(()=>{})}async function removeSilent(e,r){try{await t.rm(e,{force:!0,recursive:!0,...r})}catch(e){}}async function isDirExists(e){const[t,r]=await getStatus(e);return!r&&t.isDirectory()}async function isFileExists(e){const[t,r]=await getStatus(e);return!r&&t.isFile()}async function isPathExists(e){const[t]=await getStatus(e);return Boolean(t)}async function writeJSON(e,t,r){let i;try{i=JSON.stringify(t)}catch(e){return e}return writeFile(e,i,r)}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class HileSystemLocal{constructor(){_defineProperty(this,"absolutePathFrom",absolutePathFrom),_defineProperty(this,"createDirectory",createDirectory),_defineProperty(this,"createFile",createFile),_defineProperty(this,"dirIsExecutable",dirIsExecutable),_defineProperty(this,"dirIsReadable",dirIsReadable),_defineProperty(this,"dirIsVisible",dirIsVisible),_defineProperty(this,"dirIsWritable",dirIsWritable),_defineProperty(this,"dirIsEmpty",dirIsEmpty),_defineProperty(this,"getStatus",getStatus),_defineProperty(this,"isDirExists",isDirExists),_defineProperty(this,"isFileExists",isFileExists),_defineProperty(this,"isPathExists",isPathExists),_defineProperty(this,"fileExtension",fileExtension),_defineProperty(this,"fileName",fileName),_defineProperty(this,"fileNameExt",fileNameExt),_defineProperty(this,"filePath",filePath),_defineProperty(this,"fileIsExecutable",fileIsExecutable),_defineProperty(this,"fileIsReadable",fileIsReadable),_defineProperty(this,"fileIsVisible",fileIsVisible),_defineProperty(this,"fileIsWritable",fileIsWritable),_defineProperty(this,"fileTruncate",fileTruncate),_defineProperty(this,"listContents",listContents),_defineProperty(this,"listDirectories",listDirectories),_defineProperty(this,"listFiles",listFiles),_defineProperty(this,"move",move),_defineProperty(this,"pathFrom",pathFrom),_defineProperty(this,"readFileToBase64",readFileToBase64),_defineProperty(this,"readFileToBuffer",readFileToBuffer),_defineProperty(this,"readFileToString",readFileToString),_defineProperty(this,"remove",remove),_defineProperty(this,"removeNonBlocking",removeNonBlocking),_defineProperty(this,"removeSilent",removeSilent),_defineProperty(this,"writeFile",writeFile),_defineProperty(this,"writeJSON",writeJSON)}}export{HileSystemLocal,absolutePathFrom,createDirectory,createFile,dirIsEmpty,dirIsExecutable,dirIsReadable,dirIsVisible,dirIsWritable,fileExtension,fileIsExecutable,fileIsReadable,fileIsVisible,fileIsWritable,fileName,fileNameExt,filePath,fileTruncate,getStatus,isDirExists,isFileExists,isPathExists,listContents,listDirectories,listFiles,move,pathFrom,readFileToBase64,readFileToBuffer,readFileToString,remove,removeNonBlocking,removeSilent,writeFile,writeJSON};
//# sourceMappingURL=index.mjs.map
