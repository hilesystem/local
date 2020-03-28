const {
  HileSystemLocal,
  dirIsExecutable,
  dirIsReadable,
  dirIsVisible,
  dirIsWritable,
  fileIsExecutable,
  fileIsReadable,
  fileIsVisible,
  fileIsWritable,
  fileTruncate,
} = require("../dist/local.cjs");

const IS_EXECUTABLE = true;

describe("Imported functions", () => {
  it("dirIsExecutable()", async () => {
    const is = await dirIsExecutable("./test");
    expect(is).toBe(true);
  });
  it("dirIsReadable()", async () => {
    const is = await dirIsReadable("./test");
    expect(is).toBe(true);
  });
  it("dirIsVisible()", async () => {
    const is = await dirIsVisible("./test");
    expect(is).toBe(true);
  });
  it("dirIsWritable()", async () => {
    const is = await dirIsWritable("./test");
    expect(is).toBe(true);
  });
  it("fileIsExecutable()", async () => {
    const is = await fileIsExecutable("./test/index.test.js");
    expect(is).not.toBe(IS_EXECUTABLE);
  });
  it("fileIsReadable()", async () => {
    const is = await fileIsReadable("./test/index.test.js");
    expect(is).toBe(true);
  });
  it("fileIsVisible()", async () => {
    const is = await fileIsVisible("./test/index.test.js");
    expect(is).toBe(true);
  });
  it("fileIsWritable()", async () => {
    const is = await fileIsWritable("./test/index.test.js");
    expect(is).toBe(true);
  });
  it("fileTruncate()", async () => {
    const is = await fileTruncate("./test/test.file");
    expect(is).toBe(true);
  });
});

describe("Class with static helpers", () => {
  it("HileSystemLocal.dirIsExecutable()", async () => {
    const is = await HileSystemLocal.dirIsExecutable("./test");
    expect(is).toBe(true);
  });
  it("HileSystemLocal.dirIsReadable()", async () => {
    const is = await HileSystemLocal.dirIsReadable("./test");
    expect(is).toBe(true);
  });
  it("HileSystemLocal.dirIsVisible()", async () => {
    const is = await HileSystemLocal.dirIsVisible("./test");
    expect(is).toBe(true);
  });
  it("HileSystemLocal.dirIsWritable()", async () => {
    const is = await HileSystemLocal.dirIsWritable("./test");
    expect(is).toBe(true);
  });
  it("HileSystemLocal.fileIsExecutable()", async () => {
    const is = await fileIsExecutable("./test/index.test.js");
    expect(is).not.toBe(IS_EXECUTABLE);
  });
  it("HileSystemLocal.fileIsReadable()", async () => {
    const is = await HileSystemLocal.fileIsReadable("./test/index.test.js");
    expect(is).toBe(true);
  });
  it("HileSystemLocal.fileIsVisible()", async () => {
    const is = await HileSystemLocal.fileIsVisible("./test/index.test.js");
    expect(is).toBe(true);
  });
  it("HileSystemLocal.fileIsWritable()", async () => {
    const is = await HileSystemLocal.fileIsWritable("./test/index.test.js");
    expect(is).toBe(true);
  });
  it("HileSystemLocal.fileTruncate()", async () => {
    const is = await HileSystemLocal.fileTruncate("./test/test.file");
    expect(is).toBe(true);
  });
});