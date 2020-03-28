const dirIsExecutable = require("./core/dir/dirIsExecutable.js");
const dirIsReadable = require("./core/dir/dirIsReadable.js");
const dirIsVisible = require("./core/dir/dirIsVisible.js");
const dirIsWritable = require("./core/dir/dirIsWritable.js");

const fileIsExecutable = require("./core/file/fileIsExecutable.js");
const fileIsReadable = require("./core/file/fileIsReadable.js");
const fileIsVisible = require("./core/file/fileIsVisible.js");
const fileIsWritable = require("./core/file/fileIsWritable.js");

const fileTruncate = require("./core/file/fileTruncate.js");

module.exports.dirIsExecutable = dirIsExecutable;
module.exports.dirIsReadable = dirIsReadable;
module.exports.dirIsVisible = dirIsVisible;
module.exports.dirIsWritable = dirIsWritable;

module.exports.fileIsExecutable = fileIsExecutable;
module.exports.fileIsReadable = fileIsReadable;
module.exports.fileIsVisible = fileIsVisible;
module.exports.fileIsWritable = fileIsWritable;

module.exports.fileTruncate = fileTruncate;
