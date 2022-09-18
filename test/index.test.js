const {
  HileSystemLocal,
  absolutePathFrom,
  createDirectory,
  createFile,
  dirIsEmpty,
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
  hash,
  hashCrc32,
  hashMd5,
  hashSha1,
  hashSha256,
  isDirExists,
  isFileExists,
  isPathExists,
  listContents,
  listDirectories,
  listFiles,
  move,
  pathFrom,
  readFileToBase64,
  readFileToBuffer,
  readFileToString,
  remove,
  removeNonBlocking,
  removeSilent,
  size,
  writeFile,
  writeJSON,
} = require("../dist/index.cjs");

const { normalize } = require("path");

const IS_EXECUTABLE = false;

describe("Imported functions", () => {
  it("absolutePathFrom()", () => {
    expect(absolutePathFrom(["path", "to", "file.txt"])).toBe(__dirname.replace("test", "") + normalize("path/to/file.txt"));
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
  it("move()", async () => {
    const testPathFrom = "./test/test_from.file";
    const testPathTo = "./test/test_to.file";
    await createFile(testPathFrom, "0777");
    const result = await move(testPathFrom, testPathTo);
    await remove(testPathFrom);
    await remove(testPathTo);
    expect(result).toBe(true);
  });
  it("pathFrom()", () => {
    expect(pathFrom(["path", "to", "file.txt"])).toBe(normalize("path/to/file.txt"));
  });
  it("writeFile()", async () => {
    const is = await writeFile("./test/temp.txt", "test");
    expect(is).toBe(true);
  });
  it("writeJSON()", async () => {
    const is = await writeJSON("./test/temp.json", "test");
    expect(is).toBe(true);
  });
  it("remove()", async () => {
    const result = await remove("./temp");
    expect(result).toBe(undefined);
  });
  it("removeNonBlocking()", async () => {
    const result = await removeNonBlocking("./temp_that_not_exists");
    expect(result).toBe(undefined);
  });
  it("removeSilent()", async () => {
    const result = await removeSilent("./temp_that_not_exists");
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
  it("readFileToBase64()", async () => {
    const is = await readFileToBase64("./test/temp.txt");
    expect(is).toBe("dGVzdA==");
  });
  it("listContents()", async () => {
    const contents = await listContents(".");
    expect(Array.isArray(contents)).toBe(true);
  });
  it("listDirectories()", async () => {
    const contents = await listDirectories(".");
    expect(Array.isArray(contents)).toBe(true);
  });
  it("listFiles()", async () => {
    const contents = await listFiles(".");
    expect(Array.isArray(contents)).toBe(true);
  });
  it("dirIsEmpty()", async () => {
    const isEmpty = await dirIsEmpty(".");
    expect(isEmpty).toBe(false);
  });
  it("hash()", async () => {
    const resultHash = await hash("./test/test.txt", "md5");
    expect(resultHash).toBe("db89bb5ceab87f9c0fcc2ab36c189c2c");
  });
  it("hashCrc32()", async () => {
    const resultHash = await hashCrc32("./test/test.txt");
    expect(resultHash).toBe("98b2c5bd");
  });
  it("hashMd5()", async () => {
    const resultHash = await hashMd5("./test/test.txt");
    expect(resultHash).toBe("db89bb5ceab87f9c0fcc2ab36c189c2c");
  });
  it("hashSha1()", async () => {
    const resultHash = await hashSha1("./test/test.txt");
    expect(resultHash).toBe("cd36b370758a259b34845084a6cc38473cb95e27");
  });
  it("hashSha256()", async () => {
    const resultHash = await hashSha256("./test/test.txt");
    expect(resultHash).toBe("2d8c2f6d978ca21712b5f6de36c9d31fa8e96a4fa5d8ff8b0188dfb9e7c171bb");
  });
  it("size() number", async () => {
    const resultSize = await size("./test/test.txt");
    expect(resultSize).toBe(445);
  });
  it("size() string", async () => {
    const resultSize = await size("./test/test.txt", true);
    expect(resultSize).toBe("445");
  });
});

describe("Class with static helpers", () => {
  const hileSystemLocal = new HileSystemLocal();
  it("HileSystemLocal.absolutePathFrom()", () => {
    expect(hileSystemLocal.absolutePathFrom(["path", "to", "file.txt"])).toBe(
      __dirname.replace("test", "") + normalize("path/to/file.txt"),
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
  it("HileSystemLocal.move()", async () => {
    const testPathFrom = "./test/test_from.file";
    const testPathTo = "./test/test_to.file";
    await hileSystemLocal.createFile(testPathFrom, "0777");
    const result = await hileSystemLocal.move(testPathFrom, testPathTo);
    await hileSystemLocal.remove(testPathFrom);
    await hileSystemLocal.remove(testPathTo);
    expect(result).toBe(true);
  });
  it("HileSystemLocal.pathFrom()", () => {
    expect(hileSystemLocal.pathFrom(["path", "to", "file.txt"])).toBe(normalize("path/to/file.txt"));
  });
  it("HileSystemLocal.writeFile()", async () => {
    const is = await hileSystemLocal.writeFile("./test/temp2.txt", "test2");
    expect(is).toBe(true);
  });
  it("HileSystemLocal.writeJSON()", async () => {
    const is = await hileSystemLocal.writeJSON("./test/temp2.json", "test2");
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
  it("HileSystemLocal.removeSilent()", async () => {
    const result = await hileSystemLocal.removeSilent("./temp_that_not_exists");
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
  it("HileSystemLocal.readFileToBase64()", async () => {
    const is = await hileSystemLocal.readFileToBase64("./test/temp.txt");
    expect(is).toBe("dGVzdA==");
  });
  it("HileSystemLocal.listContents()", async () => {
    const contents = await hileSystemLocal.listContents(".");
    expect(Array.isArray(contents)).toBe(true);
  });
  it("HileSystemLocal.listDirectories()", async () => {
    const contents = await hileSystemLocal.listDirectories(".");
    expect(Array.isArray(contents)).toBe(true);
  });
  it("HileSystemLocal.listFiles()", async () => {
    const contents = await hileSystemLocal.listFiles(".");
    expect(Array.isArray(contents)).toBe(true);
  });
  it("HileSystemLocal.dirIsEmpty()", async () => {
    const isEmpty = await hileSystemLocal.dirIsEmpty(".");
    expect(isEmpty).toBe(false);
  });
  it("HileSystemLocal.hash()", async () => {
    const resultHash = await hileSystemLocal.hash("./test/test.txt", "md5");
    expect(resultHash).toBe("db89bb5ceab87f9c0fcc2ab36c189c2c");
  });
  it("HileSystemLocal.hashCrc32()", async () => {
    const resultHash = await hileSystemLocal.hashCrc32("./test/test.txt");
    expect(resultHash).toBe("98b2c5bd");
  });
  it("HileSystemLocal.hashMd5()", async () => {
    const resultHash = await hileSystemLocal.hashMd5("./test/test.txt");
    expect(resultHash).toBe("db89bb5ceab87f9c0fcc2ab36c189c2c");
  });
  it("HileSystemLocal.hashSha1()", async () => {
    const resultHash = await hileSystemLocal.hashSha1("./test/test.txt");
    expect(resultHash).toBe("cd36b370758a259b34845084a6cc38473cb95e27");
  });
  it("HileSystemLocal.hashSha256()", async () => {
    const resultHash = await hileSystemLocal.hashSha256("./test/test.txt");
    expect(resultHash).toBe("2d8c2f6d978ca21712b5f6de36c9d31fa8e96a4fa5d8ff8b0188dfb9e7c171bb");
  });
  it("HileSystemLocal.size() number", async () => {
    const resultSize = await hileSystemLocal.size("./test/test.txt");
    expect(resultSize).toBe(445);
  });
  it("HileSystemLocal.size() string", async () => {
    const resultSize = await hileSystemLocal.size("./test/test.txt", true);
    expect(resultSize).toBe("445");
  });
});
