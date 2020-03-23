const fs = require("fs");

const { ofError } = require("@r37r0m0d3l/of");

module.exports = async function accessWrapper(mode, path) {
  const fsError = await ofError(fs.promises.access(path, mode));
  if (!fsError) {
    return true;
  }
  return fsError;
};
