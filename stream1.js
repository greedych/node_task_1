const fs = require("fs");

const readStream = fs.createReadStream("largeFile.txt", "utf-8");

readStream.on("data", (chunk) => {
  console.log("Data: ", chunk);
});

readStream.on("end", () => {
  console.log("Readind file is end");
});

readStream.on("error", (err) => {
  console.log("Readind file is error: ", err);
});
