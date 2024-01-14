var fs = require("fs");
console.log("hello brother");

fs.readFile('mydta.txt', function (err, data) {//
    //It will throw error if we entered wrong name of the file so thats why node js is non blocking programming tool
    if (err) return console.error(err);
    console.log(data.toString());
});
//Here this code is asynchronous previous is synchronous cause we used sync function
console.log("Program Ended");
