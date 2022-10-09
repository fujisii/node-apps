const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send("トップページ");
});

app.get('/about', function (req, res) {
  res.send("Aboutページ");
});

app.listen(3000)