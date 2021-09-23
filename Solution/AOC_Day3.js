const fs = require('fs');
const { resetWarningCache } = require('prop-types');
let dataArr;
const data = fs.readFileSync('../Source/AOC_Day3_Input.txt', 'utf8')
// (err, data) => {
dataArr = data.toString().split('\n')

dataArr= dataArr.map(index => {

    let temp = index.split('\r')
    return temp[0]
}) 


console.log('length',dataArr[0].length)


// function aocDay3Part1(input){
//             let rightIndex=0
//             let treeCount = []
//             input = input.map(d => {
//                 while(d.length < (input.length * 3)){
//                     d+=d
//                 } 
//                 return d
//             })
//         for (let downIndex = 0; downIndex < input.length; downIndex++) {
//                rightIndex++
//                if(input[downIndex][rightIndex] == "#"){
//                    treeCount.push(`Tree at ${downIndex} ${rightIndex}`)
//                }
               
//                 //console.log(input[downIndex][rightIndex])
//         }
//         console.log(treeCount)
//         return treeCount.length
// }

function aocDay3Part1(input){
        let rightIndex = 0
        let treeCount =0;
        for(let i = 0; i < input.length; i++){
            
            //console.log([i,rightIndex])
            rightIndex+=3
            
            if (rightIndex >= input[i].length){
                rightIndex = rightIndex - input[i].length 
            }
            console.log(`index: ${rightIndex}`)
            if(input[i][rightIndex] == "#"){
                treeCount++
                console.log(`tree at ${i} ${rightIndex}`)
            }
        }
        return treeCount;
}

console.log(aocDay3Part1(dataArr.slice(10)))

//console.log(dataArr.length)

// dataArr = dataArr.map(index=> index.split(""))
// dataArr = dataArr.flat()
// //console.log(dataArr)
// // let countArr =[]
// // for(let i = 0 ; i <dataArr.length; i+=34){
   
// //         countArr.push(dataArr[i])
    

// // }
// // countArr.sort()

// // let hashArr = countArr.slice(0,countArr.indexOf("."))
// //console.log(hashArr.length)
// let fullArr = [
//     dataArr.slice(0,93),
//     dataArr.slice(93,186)
// ] 
// console.log(fullArr)

// let dotArr  = dataArr.split("#")
// let dotCount = dotArr.map(index => index.length)
// console.log(new Set(dotCount))
// dotCount = dotCount.map(num => num.toString() +"\n")
// fs.writeFile("dots.txt", dotCount.join(""), (err)=>console.log(err))
/*
4
1
2
10
5
5
8
4
4
2
13
3
3
*/