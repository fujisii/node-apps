const express = require('express');
const path = require("path");
const app = express();

// postでbodyを扱えるようにする
app.use(express.urlencoded({ extended: false }));
// publicディレクトリの指定
app.use(express.static(path.join(__dirname, "public")));

// app.get('/', function (req, res) {
//   console.log(req);
//   res.send("<h1>トップページ！！</h1>");
// });

app.post('/api/v1/quiz', function (req, res) {
  const answer = req.body.answer;
  res.send(answer);
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
