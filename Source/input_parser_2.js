const fs = require('fs')
let dataArr;
const data = fs.readFileSync('./AOC_Day9_Input.txt', 'utf8')
// (err, data) => {
dataArr = data.toString().split('\n')
//console.log("start" + dataArr)
//console.log(dataArr)

//removes \n
dataArr = dataArr.map(str => {
    temp = str.split("")
    temp.pop()
    return temp.join("")

})
console.log(dataArr);