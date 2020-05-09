!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports,require("fs"),require("@r37r0m0d3l/of"),require("path")):"function"==typeof define&&define.amd?define(["exports","fs","@r37r0m0d3l/of","path"],i):i((e=e||self).index={},e.fs,e.of,e.path)}(this,(function(e,i,t,r){"use strict";function _defineProperty(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}async function createDirectory(e,r="0777",s=!0){const a=await t.ofError(i.promises.mkdir(e,{mode:r,recursive:s}));return a||!0}async function getStatus(e){return t.of(i.promises.stat(e))}async function writeFile(e,r,s){const a=await t.ofError(i.promises.writeFile(e,r,s));return a||!0}async function createFile(e,s="0777"){const[a,n]=await getStatus(e);if(!n&&a.isFile())return!0;const c=r.dirname(e);if(n&&"ENOENT"===n.code){const i=await createDirectory(c,s);if(!0!==i)return i;const t=await writeFile(e,"",{mode:s,flag:"w"});return!0===t||t}return a.isDirectory()?await writeFile(e,"",{mode:s,flag:"w"}):await t.ofError(i.promises.readdir(c))}async function accessWrapper(e,r){const s=await t.ofError(i.promises.access(r,e));return s||!0}async function dirIsExecutable(e){return accessWrapper(i.constants.X_OK,e)}async function dirIsReadable(e){return accessWrapper(i.constants.R_OK,e)}async function dirIsVisible(e){return accessWrapper(i.constants.F_OK,e)}async function dirIsWritable(e){return accessWrapper(i.constants.W_OK,e)}async function fileIsExecutable(e){return accessWrapper(i.constants.X_OK,e)}async function fileIsReadable(e){return accessWrapper(i.constants.R_OK,e)}async function fileIsVisible(e){return accessWrapper(i.constants.F_OK,e)}async function fileIsWritable(e){return accessWrapper(i.constants.W_OK,e)}async function fileTruncate(e,r=0){const s=await t.ofError(i.promises.truncate(e,r));return s||!0}async function isDirExists(e){const[i,t]=await getStatus(e);return!t&&i.isDirectory()}async function isFileExists(e){const[i,t]=await getStatus(e);return!t&&i.isFile()}async function isPathExists(e){const[i]=await getStatus(e);return Boolean(i)}r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r;e.HileSystemLocal=class HileSystemLocal{constructor(){_defineProperty(this,"createDirectory",createDirectory),_defineProperty(this,"createFile",createFile),_defineProperty(this,"dirIsExecutable",dirIsExecutable),_defineProperty(this,"dirIsReadable",dirIsReadable),_defineProperty(this,"dirIsVisible",dirIsVisible),_defineProperty(this,"dirIsWritable",dirIsWritable),_defineProperty(this,"getStatus",getStatus),_defineProperty(this,"isDirExists",isDirExists),_defineProperty(this,"isFileExists",isFileExists),_defineProperty(this,"isPathExists",isPathExists),_defineProperty(this,"fileIsExecutable",fileIsExecutable),_defineProperty(this,"fileIsReadable",fileIsReadable),_defineProperty(this,"fileIsVisible",fileIsVisible),_defineProperty(this,"fileIsWritable",fileIsWritable),_defineProperty(this,"fileTruncate",fileTruncate),_defineProperty(this,"writeFile",writeFile)}},e.createDirectory=createDirectory,e.createFile=createFile,e.dirIsExecutable=dirIsExecutable,e.dirIsReadable=dirIsReadable,e.dirIsVisible=dirIsVisible,e.dirIsWritable=dirIsWritable,e.fileIsExecutable=fileIsExecutable,e.fileIsReadable=fileIsReadable,e.fileIsVisible=fileIsVisible,e.fileIsWritable=fileIsWritable,e.fileTruncate=fileTruncate,e.getStatus=getStatus,e.isDirExists=isDirExists,e.isFileExists=isFileExists,e.isPathExists=isPathExists,e.writeFile=writeFile,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
