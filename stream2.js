const fs = require("fs");

const writeStream = fs.createWriteStream("output.txt", "utf-8");

writeStream.write("This is my new file");
writeStream.end();

writeStream.on("finish", () => {
  console.log("Writing file is finish");
});

writeStream.on("error", () => {
  console.error("Writing file is error");
});
