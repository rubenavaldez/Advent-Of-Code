const fs = require('fs')
let dataArr;
// Change inputt2.txt to the input for your challenge
fs.readFile('./input2.txt', (err, data) => {
  dataArr = data.toString().split('\n')
  console.log(dataArr)
})