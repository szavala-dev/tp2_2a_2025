const fs = require("node:fs");

const readFile = () => {
  const file = fs.readFileSync("./package.json", "utf-8");
  console.log(`🚀 ~ readFile ~ file:`, file);
};

const writeFile = () => {};

module.exports = {
  readFile,
  writeFile,
};
