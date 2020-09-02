const {
  HileSystemLocal,
  absolutePathFrom,
  createDirectory,
  createFile,
  dirIsExecutable,
  dirIsReadable,
  dirIsVisible,
  dirIsWritable,
  fileExtension,
  fileIsExecutable,
  fileIsReadable,
  fileIsVisible,
  fileIsWritable,
  fileName,
  fileNameExt,
  filePath,
  fileTruncate,
  getStatus,
  isDirExists,
  isFileExists,
  isPathExists,
  pathFrom,
  readFileToBuffer,
  readFileToString,
  remove,
  removeNonBlocking,
  writeFile,
} = require("../dist/index.cjs");

const IS_EXECUTABLE = false;

describe("Imported functions", () => {
  it("absolutePathFrom()", () => {
    expect(absolutePathFrom(["path", "to", "file.txt"])).toBe(__dirname.replace("test", "") + "path/to/file.txt");
  });
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
  it("fileExtension()", () => {
    expect(fileExtension("path/to/file.txt")).toBe("txt");
  });
  it("fileName()", () => {
    expect(fileName("path/to/file.txt")).toBe("file");
  });
  it("fileNameExt()", () => {
    expect(fileNameExt("path/to/file.txt")).toBe("file.txt");
  });
  it("filePath()", () => {
    expect(filePath("path/to/file.txt")).toBe("path/to");
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
  it("pathFrom()", () => {
    expect(pathFrom(["path", "to", "file.txt"])).toBe("path/to/file.txt");
  });
  it("writeFile()", async () => {
    const is = await writeFile("./test/temp.txt", "test");
    expect(is).toBe(true);
  });
  it("remove()", async () => {
    const result = await remove("./temp");
    expect(result).toBe(undefined);
  });
  it("removeNonBlocking()", async () => {
    const result = removeNonBlocking("./temp_that_not_exists");
    expect(result).toBe(undefined);
  });
  it("readFileToString()", async () => {
    const is = await readFileToString("./test/temp.txt");
    expect(is).toBe("test");
  });
  it("readFileToBuffer()", async () => {
    const buf = await readFileToBuffer("./test/temp.txt");
    expect(buf.constructor.name).toBe("Buffer");
  });
});

describe("Class with static helpers", () => {
  const hileSystemLocal = new HileSystemLocal();
  it("HileSystemLocal.absolutePathFrom()", () => {
    expect(hileSystemLocal.absolutePathFrom(["path", "to", "file.txt"])).toBe(
      __dirname.replace("test", "") + "path/to/file.txt",
    );
  });
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
  it("HileSystemLocal.fileExtension()", () => {
    expect(hileSystemLocal.fileExtension("path/to/file.txt")).toBe("txt");
  });
  it("HileSystemLocal.fileName()", () => {
    expect(hileSystemLocal.fileName("path/to/file.txt")).toBe("file");
  });
  it("HileSystemLocal.fileNameExt()", () => {
    expect(hileSystemLocal.fileNameExt("path/to/file.txt")).toBe("file.txt");
  });
  it("HileSystemLocal.filePath()", () => {
    expect(hileSystemLocal.filePath("path/to/file.txt")).toBe("path/to");
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
  it("HileSystemLocal.pathFrom()", () => {
    expect(hileSystemLocal.pathFrom(["path", "to", "file.txt"])).toBe("path/to/file.txt");
  });
  it("HileSystemLocal.writeFile()", async () => {
    const is = await hileSystemLocal.writeFile("./test/temp2.txt", "test2");
    expect(is).toBe(true);
  });
  it("HileSystemLocal.remove()", async () => {
    const result = await hileSystemLocal.remove("./temp");
    expect(result).toBe(undefined);
  });
  it("HileSystemLocal.removeNonBlocking()", async () => {
    const result = hileSystemLocal.removeNonBlocking("./temp_that_not_exists");
    expect(result).toBe(undefined);
  });
  it("HileSystemLocal.readFileToString()", async () => {
    const is = await hileSystemLocal.readFileToString("./test/temp.txt");
    expect(is).toBe("test");
  });
  it("HileSystemLocal.readFileToBuffer()", async () => {
    const buf = await hileSystemLocal.readFileToBuffer("./test/temp.txt");
    expect(buf.constructor.name).toBe("Buffer");
  });
});
