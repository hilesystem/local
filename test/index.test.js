const {
  HileSystemLocal,
  createDirectory,
  createFile,
  dirIsExecutable,
  dirIsReadable,
  dirIsVisible,
  dirIsWritable,
  getStatus,
  isDirExists,
  isFileExists,
  isPathExists,
  fileIsExecutable,
  fileIsReadable,
  fileIsVisible,
  fileIsWritable,
  fileTruncate,
  writeFile,
} = require("../dist/index.cjs");

const IS_EXECUTABLE = true;

describe("Imported functions", () => {
  it("createDirectory()", async () => {
    const is = await createDirectory("./test/temp/");
    expect(is).toBe(true);
  });
  it("createFile()", async () => {
    const is = await createFile("./test/temp/cf.txt");
    expect(is).toBe(true);
  });
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
  it("getStatus()", async () => {
    const [status, error] = await getStatus("./test/index.test.js");
    expect(status).not.toBe(undefined);
    expect(error).toBe(undefined);
  });
  it("isDirExists()", async () => {
    const is = await isDirExists("./test/");
    expect(is).toBe(true);
  });
  it("isFileExists()", async () => {
    const is = await isFileExists("./test/index.test.js");
    expect(is).toBe(true);
  });
  it("isPathExists()", async () => {
    const is = await isPathExists("./test/");
    expect(is).toBe(true);
  });
  it("writeFile()", async () => {
    const is = await writeFile("./test/temp.txt", "test");
    expect(is).toBe(true);
  });
});

describe("Class with static helpers", () => {
  const hileSystemLocal = new HileSystemLocal();
  it("HileSystemLocal.createDirectory()", async () => {
    const is = await hileSystemLocal.createDirectory("./test/temp2/");
    expect(is).toBe(true);
  });
  it("HileSystemLocal.createFile()", async () => {
    const is = await hileSystemLocal.createFile("./test/temp2/cf.txt");
    expect(is).toBe(true);
  });
  it("HileSystemLocal.dirIsExecutable()", async () => {
    const is = await hileSystemLocal.dirIsExecutable("./test");
    expect(is).toBe(true);
  });
  it("HileSystemLocal.dirIsReadable()", async () => {
    const is = await hileSystemLocal.dirIsReadable("./test");
    expect(is).toBe(true);
  });
  it("HileSystemLocal.dirIsVisible()", async () => {
    const is = await hileSystemLocal.dirIsVisible("./test");
    expect(is).toBe(true);
  });
  it("HileSystemLocal.dirIsWritable()", async () => {
    const is = await hileSystemLocal.dirIsWritable("./test");
    expect(is).toBe(true);
  });
  it("HileSystemLocal.fileIsExecutable()", async () => {
    const is = await hileSystemLocal.fileIsExecutable("./test/index.test.js");
    expect(is).not.toBe(IS_EXECUTABLE);
  });
  it("HileSystemLocal.fileIsReadable()", async () => {
    const is = await hileSystemLocal.fileIsReadable("./test/index.test.js");
    expect(is).toBe(true);
  });
  it("HileSystemLocal.fileIsVisible()", async () => {
    const is = await hileSystemLocal.fileIsVisible("./test/index.test.js");
    expect(is).toBe(true);
  });
  it("HileSystemLocal.fileIsWritable()", async () => {
    const is = await hileSystemLocal.fileIsWritable("./test/index.test.js");
    expect(is).toBe(true);
  });
  it("HileSystemLocal.fileTruncate()", async () => {
    const is = await hileSystemLocal.fileTruncate("./test/test.file");
    expect(is).toBe(true);
  });
  it("HileSystemLocal.getStatus()", async () => {
    const [status, error] = await hileSystemLocal.getStatus("./test/index.test.js");
    expect(status).not.toBe(undefined);
    expect(error).toBe(undefined);
  });
  it("HileSystemLocal.isDirExists()", async () => {
    const is = await hileSystemLocal.isDirExists("./test/");
    expect(is).toBe(true);
  });
  it("HileSystemLocal.isFileExists()", async () => {
    const is = await hileSystemLocal.isFileExists("./test/index.test.js");
    expect(is).toBe(true);
  });
  it("HileSystemLocal.isPathExists()", async () => {
    const is = await hileSystemLocal.isPathExists("./test/");
    expect(is).toBe(true);
  });
  it("HileSystemLocal.writeFile()", async () => {
    const is = await hileSystemLocal.writeFile("./test/temp2.txt", "test2");
    expect(is).toBe(true);
  });
});
