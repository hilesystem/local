import{promises as e,constants as r}from"fs";import i,{ofError as t}from"@r37r0m0d3l/of";function _defineProperty(e,r,i){return r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}async function createDirectory(r,i="0777",a=!0){const s=await t(e.mkdir(r,{mode:i,recursive:a}));return s||!0}async function accessWrapper(r,t){const a=await i.ofError(e.access(t,r));return a||!0}async function dirIsExecutable(e){return accessWrapper(r.X_OK,e)}async function dirIsReadable(e){return accessWrapper(r.R_OK,e)}async function dirIsVisible(e){return accessWrapper(r.F_OK,e)}async function dirIsWritable(e){return accessWrapper(r.W_OK,e)}async function fileIsExecutable(e){return accessWrapper(r.X_OK,e)}async function fileIsReadable(e){return accessWrapper(r.R_OK,e)}async function fileIsVisible(e){return accessWrapper(r.F_OK,e)}async function fileIsWritable(e){return accessWrapper(r.W_OK,e)}async function fileTruncate(r,t=0){const a=await i.ofError(e.truncate(r,t));return a||!0}async function writeFile(r,i,a){const s=await t(e.writeFile(r,i,a));return s||!0}class HileSystemLocal{}_defineProperty(HileSystemLocal,"createDirectory",createDirectory),_defineProperty(HileSystemLocal,"dirIsExecutable",dirIsExecutable),_defineProperty(HileSystemLocal,"dirIsReadable",dirIsReadable),_defineProperty(HileSystemLocal,"dirIsVisible",dirIsVisible),_defineProperty(HileSystemLocal,"dirIsWritable",dirIsWritable),_defineProperty(HileSystemLocal,"fileIsExecutable",fileIsExecutable),_defineProperty(HileSystemLocal,"fileIsReadable",fileIsReadable),_defineProperty(HileSystemLocal,"fileIsVisible",fileIsVisible),_defineProperty(HileSystemLocal,"fileIsWritable",fileIsWritable),_defineProperty(HileSystemLocal,"fileTruncate",fileTruncate),_defineProperty(HileSystemLocal,"writeFile",writeFile);export{HileSystemLocal,createDirectory,dirIsExecutable,dirIsReadable,dirIsVisible,dirIsWritable,fileIsExecutable,fileIsReadable,fileIsVisible,fileIsWritable,fileTruncate,writeFile};
//# sourceMappingURL=local.mjs.map
