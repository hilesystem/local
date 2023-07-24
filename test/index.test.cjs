const assert = require("node:assert");
const path = require("node:path");
const test = require("node:test");

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
  getLinkStatus,
  getStatus,
  hash,
  hashCrc32,
  hashMd5,
  hashSha1,
  hashSha256,
  hashSha512,
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
  writeFileTail,
  writeJSON,
} = require("../dist/index.cjs");

const FILE_NAME = "index.test.cjs";

const IS_EXECUTABLE = false;

test.describe("Imported functions", () => {
  test.it("absolutePathFrom()", () => {
    assert.strictEqual(
      absolutePathFrom(["path", "to", "file.txt"]),
      __dirname.replace("test", "") + path.normalize("path/to/file.txt"),
    );
  });
  test.it("createDirectory()", async () => {
    const is = await createDirectory("./test/temp/");
    assert.strictEqual(is, true);
  });
  test.it("createFile()", async () => {
    const is = await createFile("./test/temp/cf.txt");
    assert.strictEqual(is, true);
  });
  test.it("dirIsExecutable()", async () => {
    const is = await dirIsExecutable("./test");
    assert.strictEqual(is, true);
  });
  test.it("dirIsReadable()", async () => {
    const is = await dirIsReadable("./test");
    assert.strictEqual(is, true);
  });
  test.it("dirIsVisible()", async () => {
    const is = await dirIsVisible("./test");
    assert.strictEqual(is, true);
  });
  test.it("dirIsWritable()", async () => {
    const is = await dirIsWritable("./test");
    assert.strictEqual(is, true);
  });
  test.it("fileExtension()", () => {
    assert.strictEqual(fileExtension("path/to/file.txt"), "txt");
  });
  test.it("fileName()", () => {
    assert.strictEqual(fileName("path/to/file.txt"), "file");
  });
  test.it("fileNameExt()", () => {
    assert.strictEqual(fileNameExt("path/to/file.txt"), "file.txt");
  });
  test.it("filePath()", () => {
    assert.strictEqual(filePath("path/to/file.txt"), "path/to");
  });
  test.it("fileIsExecutable()", async () => {
    const is = await fileIsExecutable(`./test/${FILE_NAME}`);
    assert.notEqual(is, IS_EXECUTABLE);
  });
  test.it("fileIsReadable()", async () => {
    const is = await fileIsReadable(`./test/${FILE_NAME}`);
    assert.strictEqual(is, true);
  });
  test.it("fileIsVisible()", async () => {
    const is = await fileIsVisible(`./test/${FILE_NAME}`);
    assert.strictEqual(is, true);
  });
  test.it("fileIsWritable()", async () => {
    const is = await fileIsWritable(`./test/${FILE_NAME}`);
    assert.strictEqual(is, true);
  });
  test.it("fileTruncate()", async () => {
    const is = await fileTruncate("./test/test.file");
    assert.strictEqual(is, true);
  });
  test.it("getLinkStatus()", async () => {
    const [status, error] = await getLinkStatus(`./test/${FILE_NAME}`);
    assert.notEqual(status, undefined);
    assert.strictEqual(error, undefined);
  });
  test.it("getStatus()", async () => {
    const [status, error] = await getStatus(`./test/${FILE_NAME}`);
    assert.notEqual(status, undefined);
    assert.strictEqual(error, undefined);
  });
  test.it("isDirExists()", async () => {
    const is = await isDirExists("./test/");
    assert.strictEqual(is, true);
  });
  test.it("isFileExists()", async () => {
    const is = await isFileExists(`./test/${FILE_NAME}`);
    assert.strictEqual(is, true);
  });
  test.it("isPathExists()", async () => {
    const is = await isPathExists("./test/");
    assert.strictEqual(is, true);
  });
  test.it("move()", async () => {
    const testPathFrom = "./test/test_from.file";
    const testPathTo = "./test/test_to.file";
    await createFile(testPathFrom, "0777");
    const result = await move(testPathFrom, testPathTo);
    await remove(testPathFrom);
    await remove(testPathTo);
    assert.strictEqual(result, true);
  });
  test.it("pathFrom()", () => {
    assert.strictEqual(pathFrom(["path", "to", "file.txt"]), path.normalize("path/to/file.txt"));
  });
  test.it("writeFile()", async () => {
    const is = await writeFile("./test/temp.txt", "test");
    assert.strictEqual(is, true);
  });
  test.it("writeFileTail()", async () => {
    const is = await writeFileTail("./test/temp-tail.txt", "tail");
    assert.strictEqual(is, true);
  });
  test.it("writeJSON()", async () => {
    const is = await writeJSON("./test/temp.json", "test");
    assert.strictEqual(is, true);
  });
  test.it("remove()", async () => {
    const result = await remove("./temp");
    assert.strictEqual(result, undefined);
  });
  test.it("removeNonBlocking()", async () => {
    const result = await removeNonBlocking("./temp_that_not_exists");
    assert.strictEqual(result, undefined);
  });
  test.it("removeSilent()", async () => {
    const result = await removeSilent("./temp_that_not_exists");
    assert.strictEqual(result, undefined);
  });
  test.it("readFileToString()", async () => {
    const is = await readFileToString("./test/temp.txt");
    assert.strictEqual(is, "test");
  });
  test.it("readFileToBuffer()", async () => {
    const buf = await readFileToBuffer("./test/temp.txt");
    assert.strictEqual(buf.constructor.name, "Buffer");
  });
  test.it("readFileToBase64()", async () => {
    const is = await readFileToBase64("./test/temp.txt");
    assert.strictEqual(is, "dGVzdA==");
  });
  test.it("listContents()", async () => {
    const contents = await listContents(".");
    assert.strictEqual(Array.isArray(contents), true);
  });
  test.it("listDirectories()", async () => {
    const contents = await listDirectories(".");
    assert.strictEqual(Array.isArray(contents), true);
  });
  test.it("listFiles()", async () => {
    const contents = await listFiles(".");
    assert.strictEqual(Array.isArray(contents), true);
  });
  test.it("dirIsEmpty()", async () => {
    const isEmpty = await dirIsEmpty(".");
    assert.strictEqual(isEmpty, false);
  });
  test.it("hash()", async () => {
    const resultHash = await hash("./test/test.txt", "md5");
    assert.strictEqual(resultHash, "db89bb5ceab87f9c0fcc2ab36c189c2c");
  });
  test.it("hashCrc32()", async () => {
    const resultHash = await hashCrc32("./test/test.txt");
    assert.strictEqual(resultHash, "98b2c5bd");
  });
  test.it("hashMd5()", async () => {
    const resultHash = await hashMd5("./test/test.txt");
    assert.strictEqual(resultHash, "db89bb5ceab87f9c0fcc2ab36c189c2c");
  });
  test.it("hashSha1()", async () => {
    const resultHash = await hashSha1("./test/test.txt");
    assert.strictEqual(resultHash, "cd36b370758a259b34845084a6cc38473cb95e27");
  });
  test.it("hashSha256()", async () => {
    const resultHash = await hashSha256("./test/test.txt");
    assert.strictEqual(resultHash, "2d8c2f6d978ca21712b5f6de36c9d31fa8e96a4fa5d8ff8b0188dfb9e7c171bb");
  });
  test.it("hashSha512()", async () => {
    const resultHash = await hashSha512("./test/test.txt");
    assert.strictEqual(
      resultHash,
      "8ba760cac29cb2b2ce66858ead169174057aa1298ccd581514e6db6dee3285280ee6e3a54c9319071dc8165ff061d77783100d449c937ff1fb4cd1bb516a69b9",
    );
  });
  test.it("size() number", async () => {
    const resultSize = await size("./test/test.txt");
    assert.strictEqual(resultSize, 445);
  });
  test.it("size() string", async () => {
    const resultSize = await size("./test/test.txt", true);
    assert.strictEqual(resultSize, "445");
  });
});

test.describe("Class with static helpers", () => {
  const hileSystemLocal = new HileSystemLocal();
  test.it("HileSystemLocal.absolutePathFrom()", () => {
    assert.strictEqual(
      hileSystemLocal.absolutePathFrom(["path", "to", "file.txt"]),
      __dirname.replace("test", "") + path.normalize("path/to/file.txt"),
    );
  });
  test.it("HileSystemLocal.createDirectory()", async () => {
    const is = await hileSystemLocal.createDirectory("./test/temp2/");
    assert.strictEqual(is, true);
  });
  test.it("HileSystemLocal.createFile()", async () => {
    const is = await hileSystemLocal.createFile("./test/temp2/cf.txt");
    assert.strictEqual(is, true);
  });
  test.it("HileSystemLocal.dirIsExecutable()", async () => {
    const is = await hileSystemLocal.dirIsExecutable("./test");
    assert.strictEqual(is, true);
  });
  test.it("HileSystemLocal.dirIsReadable()", async () => {
    const is = await hileSystemLocal.dirIsReadable("./test");
    assert.strictEqual(is, true);
  });
  test.it("HileSystemLocal.dirIsVisible()", async () => {
    const is = await hileSystemLocal.dirIsVisible("./test");
    assert.strictEqual(is, true);
  });
  test.it("HileSystemLocal.dirIsWritable()", async () => {
    const is = await hileSystemLocal.dirIsWritable("./test");
    assert.strictEqual(is, true);
  });
  test.it("HileSystemLocal.fileExtension()", () => {
    assert.strictEqual(hileSystemLocal.fileExtension("path/to/file.txt"), "txt");
  });
  test.it("HileSystemLocal.fileName()", () => {
    assert.strictEqual(hileSystemLocal.fileName("path/to/file.txt"), "file");
  });
  test.it("HileSystemLocal.fileNameExt()", () => {
    assert.strictEqual(hileSystemLocal.fileNameExt("path/to/file.txt"), "file.txt");
  });
  test.it("HileSystemLocal.filePath()", () => {
    assert.strictEqual(hileSystemLocal.filePath("path/to/file.txt"), "path/to");
  });
  test.it("HileSystemLocal.fileIsExecutable()", async () => {
    const is = await hileSystemLocal.fileIsExecutable(`./test/${FILE_NAME}`);
    assert.notEqual(is, IS_EXECUTABLE);
  });
  test.it("HileSystemLocal.fileIsReadable()", async () => {
    const is = await hileSystemLocal.fileIsReadable(`./test/${FILE_NAME}`);
    assert.strictEqual(is, true);
  });
  test.it("HileSystemLocal.fileIsVisible()", async () => {
    const is = await hileSystemLocal.fileIsVisible(`./test/${FILE_NAME}`);
    assert.strictEqual(is, true);
  });
  test.it("HileSystemLocal.fileIsWritable()", async () => {
    const is = await hileSystemLocal.fileIsWritable(`./test/${FILE_NAME}`);
    assert.strictEqual(is, true);
  });
  test.it("HileSystemLocal.fileTruncate()", async () => {
    const is = await hileSystemLocal.fileTruncate("./test/test.file");
    assert.strictEqual(is, true);
  });
  test.it("HileSystemLocal.getLinkStatus()", async () => {
    const [status, error] = await hileSystemLocal.getLinkStatus(`./test/${FILE_NAME}`);
    assert.notEqual(status, undefined);
    assert.strictEqual(error, undefined);
  });
  test.it("HileSystemLocal.getStatus()", async () => {
    const [status, error] = await hileSystemLocal.getStatus(`./test/${FILE_NAME}`);
    assert.notEqual(status, undefined);
    assert.strictEqual(error, undefined);
  });
  test.it("HileSystemLocal.isDirExists()", async () => {
    const is = await hileSystemLocal.isDirExists("./test/");
    assert.strictEqual(is, true);
  });
  test.it("HileSystemLocal.isFileExists()", async () => {
    const is = await hileSystemLocal.isFileExists(`./test/${FILE_NAME}`);
    assert.strictEqual(is, true);
  });
  test.it("HileSystemLocal.isPathExists()", async () => {
    const is = await hileSystemLocal.isPathExists("./test/");
    assert.strictEqual(is, true);
  });
  test.it("HileSystemLocal.move()", async () => {
    const testPathFrom = "./test/test_from.file";
    const testPathTo = "./test/test_to.file";
    await hileSystemLocal.createFile(testPathFrom, "0777");
    const result = await hileSystemLocal.move(testPathFrom, testPathTo);
    await hileSystemLocal.remove(testPathFrom);
    await hileSystemLocal.remove(testPathTo);
    assert.strictEqual(result, true);
  });
  test.it("HileSystemLocal.pathFrom()", () => {
    assert.strictEqual(hileSystemLocal.pathFrom(["path", "to", "file.txt"]), path.normalize("path/to/file.txt"));
  });
  test.it("HileSystemLocal.writeFile()", async () => {
    const is = await hileSystemLocal.writeFile("./test/temp2.txt", "test2");
    assert.strictEqual(is, true);
  });
  test.it("HileSystemLocal.writeFileTail()", async () => {
    const is = await hileSystemLocal.writeFileTail("./test/temp-tail.txt", "tail");
    assert.strictEqual(is, true);
  });
  test.it("HileSystemLocal.writeJSON()", async () => {
    const is = await hileSystemLocal.writeJSON("./test/temp2.json", "test2");
    assert.strictEqual(is, true);
  });
  test.it("HileSystemLocal.remove()", async () => {
    const result = await hileSystemLocal.remove("./temp");
    assert.strictEqual(result, undefined);
  });
  test.it("HileSystemLocal.removeNonBlocking()", async () => {
    const result = hileSystemLocal.removeNonBlocking("./temp_that_not_exists");
    assert.strictEqual(result, undefined);
  });
  test.it("HileSystemLocal.removeSilent()", async () => {
    const result = await hileSystemLocal.removeSilent("./temp_that_not_exists");
    assert.strictEqual(result, undefined);
  });
  test.it("HileSystemLocal.readFileToString()", async () => {
    const is = await hileSystemLocal.readFileToString("./test/temp.txt");
    assert.strictEqual(is, "test");
  });
  test.it("HileSystemLocal.readFileToBuffer()", async () => {
    const buf = await hileSystemLocal.readFileToBuffer("./test/temp.txt");
    assert.strictEqual(buf.constructor.name, "Buffer");
  });
  test.it("HileSystemLocal.readFileToBase64()", async () => {
    const is = await hileSystemLocal.readFileToBase64("./test/temp.txt");
    assert.strictEqual(is, "dGVzdA==");
  });
  test.it("HileSystemLocal.listContents()", async () => {
    const contents = await hileSystemLocal.listContents(".");
    assert.strictEqual(Array.isArray(contents), true);
  });
  test.it("HileSystemLocal.listDirectories()", async () => {
    const contents = await hileSystemLocal.listDirectories(".");
    assert.strictEqual(Array.isArray(contents), true);
  });
  test.it("HileSystemLocal.listFiles()", async () => {
    const contents = await hileSystemLocal.listFiles(".");
    assert.strictEqual(Array.isArray(contents), true);
  });
  test.it("HileSystemLocal.dirIsEmpty()", async () => {
    const isEmpty = await hileSystemLocal.dirIsEmpty(".");
    assert.strictEqual(isEmpty, false);
  });
  test.it("HileSystemLocal.hash()", async () => {
    const resultHash = await hileSystemLocal.hash("./test/test.txt", "md5");
    assert.strictEqual(resultHash, "db89bb5ceab87f9c0fcc2ab36c189c2c");
  });
  test.it("HileSystemLocal.hashCrc32()", async () => {
    const resultHash = await hileSystemLocal.hashCrc32("./test/test.txt");
    assert.strictEqual(resultHash, "98b2c5bd");
  });
  test.it("HileSystemLocal.hashMd5()", async () => {
    const resultHash = await hileSystemLocal.hashMd5("./test/test.txt");
    assert.strictEqual(resultHash, "db89bb5ceab87f9c0fcc2ab36c189c2c");
  });
  test.it("HileSystemLocal.hashSha1()", async () => {
    const resultHash = await hileSystemLocal.hashSha1("./test/test.txt");
    assert.strictEqual(resultHash, "cd36b370758a259b34845084a6cc38473cb95e27");
  });
  test.it("HileSystemLocal.hashSha256()", async () => {
    const resultHash = await hileSystemLocal.hashSha256("./test/test.txt");
    assert.strictEqual(resultHash, "2d8c2f6d978ca21712b5f6de36c9d31fa8e96a4fa5d8ff8b0188dfb9e7c171bb");
  });
  test.it("HileSystemLocal.hashSha512()", async () => {
    const resultHash = await hileSystemLocal.hashSha512("./test/test.txt");
    assert.strictEqual(
      resultHash,
      "8ba760cac29cb2b2ce66858ead169174057aa1298ccd581514e6db6dee3285280ee6e3a54c9319071dc8165ff061d77783100d449c937ff1fb4cd1bb516a69b9",
    );
  });
  test.it("HileSystemLocal.size() number", async () => {
    const resultSize = await hileSystemLocal.size("./test/test.txt");
    assert.strictEqual(resultSize, 445);
  });
  test.it("HileSystemLocal.size() string", async () => {
    const resultSize = await hileSystemLocal.size("./test/test.txt", true);
    assert.strictEqual(resultSize, "445");
  });
});
