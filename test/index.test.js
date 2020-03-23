const { dirIsReadable, dirIsWritable, fileIsReadable, fileIsWritable } = require("../dist/local.cjs");

describe("Imported functions", () => {
  it("dirIsReadable()", async () => {
    const is = await dirIsReadable("./test");
    expect(is).toBe(true);
  });
  it("dirIsWritable()", async () => {
    const is = await dirIsWritable("./test");
    expect(is).toBe(true);
  });
  it("fileIsReadable()", async () => {
    const is = await fileIsReadable("./test/index.test.js");
    expect(is).toBe(true);
  });
  it("fileIsWritable()", async () => {
    const is = await fileIsWritable("./test/index.test.js");
    expect(is).toBe(true);
  });
});
