const fs = require("fs");

const person = {
  name: "Mike",
  age: 30,
};

const read = function() {
  fs.readFile("./sample.txt", "utf8", function(err, data) {
    console.log(data);
  });
};

const write = function() {
  fs.writeFile("sample.json", JSON.stringify(person), function() {
    console.log("書き出し完了！");
  });
};

module.exports = {
  read: read,
  write: write,
};
