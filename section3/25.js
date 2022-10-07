console.log("start");

// 「node argv.js apple」と実行すると
// process.argvの3つ目の配列に「apple」が情報として格納される
console.log(process.argv[2]);

console.log("end");