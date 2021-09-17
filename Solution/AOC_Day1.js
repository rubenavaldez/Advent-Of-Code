const fs = require('fs')
let dataArr;
const data = fs.readFileSync('../Source/AOC_Day1_Input.txt', 'utf8')
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
//console.log(dataArr);

input = dataArr.map(num => parseInt(num) )
console.log(input)
let answer= []


for(let i = 0; i<input.length; i++){

    for(let j=0; j<input.length; j++){

        if((input[i] + input[j]) == 2020){
              answer.push([input[i],input[j]])  
        }

    }

}
console.log(answer)
//let reducer = (total,value)=>total * value;
//console.log(answer.reduce(reducer))
