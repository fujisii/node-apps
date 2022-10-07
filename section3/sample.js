const fs = require("fs");

console.log("start");
fs.writeFile("sample.txt","Hello world", function() {
  console.log("書き出し完了！");
});
console.log("end");
