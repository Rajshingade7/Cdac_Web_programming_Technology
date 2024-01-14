var fs = require("fs");

var data = fs.readFileSync('myata.txt');//By default all node methods are asynchronized

console.log(data.toString());
console.log("Program Ended");