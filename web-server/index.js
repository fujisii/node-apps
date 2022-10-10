const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send("<h1>トップページ</h1>");
});

app.get('/api/v1/users', function (req, res) {
  res.send({
    name: "Mike",
    age: 30
  });
});

app.listen(3000, function(){
  console.log("I am running!");
});
