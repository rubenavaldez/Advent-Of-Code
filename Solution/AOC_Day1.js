const fs = require('fs')
let dataArr;
const data = fs.readFileSync('../Source/AOC_Day1_Input.txt', 'utf8')
// (err, data) => {
dataArr = data.toString().split('\n')
input = dataArr.map(num => parseInt(num))
//console.log("start" + dataArr)
//console.log(dataArr)

//removes \n
// dataArr = dataArr.map(str => {
//     temp = str.split("")
//     temp.pop()
//     return temp.join("")

// })
//console.log(dataArr[0]);

//console.log(input[0])
let answer = []

//Part one Solution 
// for(let i = 0; i<input.length; i++){
//     for(let j=0; j<input.length; j++){

//         //console.log(`${input[i]} + ${input[j]} = ${input[j]+ input[j]}`)
//         if((input[i] + input[j]) == 2020){

//               answer.push(input[i])  
//               //console.log([input[i],input[j]])  
//         }

//     }

// }
//console.log(answer)
//let reducer = (total,value)=>total * value;
//console.log(answer.reduce(reducer))
// 464475

//Part Two

//Part one Solution 
function aocDay1PartTwo(input){
for (let i = 0; i < input.length; i++) {
    for (let j = 1; j < input.length; j++) {
        for (let k = 2; k < input.length; k++) {
            //console.log(`${input[i]} * ${input[j]} * ${input[k]}= ${input[j] * input[i] * input[k]}`)
            if ((input[i] + input[j] + input[k]) == 2020) {

                return input[i] * input[j] * input[k]
                //console.log([input[i],input[j]])  
            }

        }


    }

}
}
//console.log(input[0] + input[1] + input[2])
console.log(aocDay1PartTwo(input)) // 267520550
// let reducer = (total,value)=>total + value;
// console.log(answer.reduce(reducer))