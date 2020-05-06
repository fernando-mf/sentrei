const {
  resolve
} = require("path");
const {
  existsSync,
  lstatSync,
  readdirSync
} = require("fs");

function readWeekFiles() {
  const fileList = [];
  const dirPath = resolve('./src/week');
  const isDir = existsSync(dirPath) && lstatSync(dirPath).isDirectory();
  if (!isDir) {
    return fileList;
  }

  const files = readdirSync(dirPath);
  files.forEach(item => {
    const currentFile = item.slice(0, 3);
    fileList.push([
      `/week/${currentFile}`,
      `Week ${currentFile}`,
    ]);
  });
  return fileList.reverse();
}

module.exports = readWeekFiles;
