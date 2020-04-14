"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("fs"),r=require("@r37r0m0d3l/of");function _defineProperty(e,r,i){return r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}async function createDirectory(i,s="0777",t=!0){const a=await r.ofError(e.promises.mkdir(i,{mode:s,recursive:t}));return a||!0}async function accessWrapper(i,s){const t=await r.ofError(e.promises.access(s,i));return t||!0}async function dirIsExecutable(r){return accessWrapper(e.constants.X_OK,r)}async function dirIsReadable(r){return accessWrapper(e.constants.R_OK,r)}async function dirIsVisible(r){return accessWrapper(e.constants.F_OK,r)}async function dirIsWritable(r){return accessWrapper(e.constants.W_OK,r)}async function fileIsExecutable(r){return accessWrapper(e.constants.X_OK,r)}async function fileIsReadable(r){return accessWrapper(e.constants.R_OK,r)}async function fileIsVisible(r){return accessWrapper(e.constants.F_OK,r)}async function fileIsWritable(r){return accessWrapper(e.constants.W_OK,r)}async function fileTruncate(i,s=0){const t=await r.ofError(e.promises.truncate(i,s));return t||!0}async function writeFile(i,s,t){const a=await r.ofError(e.promises.writeFile(i,s,t));return a||!0}class HileSystemLocal{}_defineProperty(HileSystemLocal,"createDirectory",createDirectory),_defineProperty(HileSystemLocal,"dirIsExecutable",dirIsExecutable),_defineProperty(HileSystemLocal,"dirIsReadable",dirIsReadable),_defineProperty(HileSystemLocal,"dirIsVisible",dirIsVisible),_defineProperty(HileSystemLocal,"dirIsWritable",dirIsWritable),_defineProperty(HileSystemLocal,"fileIsExecutable",fileIsExecutable),_defineProperty(HileSystemLocal,"fileIsReadable",fileIsReadable),_defineProperty(HileSystemLocal,"fileIsVisible",fileIsVisible),_defineProperty(HileSystemLocal,"fileIsWritable",fileIsWritable),_defineProperty(HileSystemLocal,"fileTruncate",fileTruncate),_defineProperty(HileSystemLocal,"writeFile",writeFile),exports.HileSystemLocal=HileSystemLocal,exports.createDirectory=createDirectory,exports.dirIsExecutable=dirIsExecutable,exports.dirIsReadable=dirIsReadable,exports.dirIsVisible=dirIsVisible,exports.dirIsWritable=dirIsWritable,exports.fileIsExecutable=fileIsExecutable,exports.fileIsReadable=fileIsReadable,exports.fileIsVisible=fileIsVisible,exports.fileIsWritable=fileIsWritable,exports.fileTruncate=fileTruncate,exports.writeFile=writeFile;
//# sourceMappingURL=local.cjs.map
