const fs = require("fs");

console.log("start");

const request = process.argv[2];
if (request === "read") {
  fs.readFile("./sample.txt", "utf8", function(err, data) {
    console.log(data);
  });
} else if (request === "write") {
  fs.writeFile("sample.txt","Hello world", function() {
    console.log("書き出し完了！");
  });
} else {
  console.error("エラー：readまたはwriteの引数を入れてください");
}

console.log("end");