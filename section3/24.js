const fs = require("fs");

console.log("start");
fs.readFile("./sample.txt", "utf8", function(err, data) {
  console.log(data);
})
console.log("end");
