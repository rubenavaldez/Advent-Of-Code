const fs = require('fs')
let dataArr;
const data = fs.readFileSync('../Source/AOC_Day3_Input.txt', 'utf8')
// (err, data) => {
dataArr = data.toString().split('\n')


console.log(dataArr)

function aocDay3Part1(input){
            let rightIndex=0
            let treeCount = []
            input = input.map(d => {
                while(d.length < (input.length * 3)){
                    d+=d
                } 
                return d
            })
        for (let downIndex = 0; downIndex < input.length; downIndex++) {
               rightIndex++
               if(input[downIndex][rightIndex] == "#"){
                   treeCount.push(`Tree at ${downIndex} ${rightIndex}`)
               }
               
                //console.log(input[downIndex][rightIndex])
        }
        console.log(treeCount)
        return treeCount.length
}

console.log(aocDay3Part1(dataArr))