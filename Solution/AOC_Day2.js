const fs = require('fs')
let dataArr;
const data = fs.readFileSync('../Source/AOC_Day2_Input.txt', 'utf8')
// (err, data) => {
dataArr = data.toString().split('\n')

//console.log(dataArr)
let input = dataArr.map(d => {
        let currentPassword = d.split(" ")
        let obj ={}
        let [least, most] = currentPassword[0].split('-')      
        obj.least = least;
        obj.most = most;
        obj.letter = currentPassword[1][0]
        obj.password = currentPassword[2]
        return obj
})
//console.log(input[0])

function aocDay2Part1(input){
    let answer =[]
    input.forEach(obj => {
            let count =0;
            let currentCode = obj.password.split("")
            for(let i =0; i< currentCode.length; i++){

                if(currentCode[i] == obj.letter){
                    count++
                }
            }
            if(count >= obj.least && count <= obj.most){
                answer.push(obj.password)
            }
    });



    console.log(answer)
    return answer.length
}

// console.log(aocDay2Part1(input)) // 643


function aocDay2Part2(input){
    let answer =[]
    input.forEach(obj => {
        
            let currentCode = obj.password.split("")
           
            if(currentCode[obj.least -1] == obj.letter && currentCode[obj.most-1] !==obj.letter){
               
                answer.push(obj.password)
            }else if(currentCode[obj.least -1] !== obj.letter && currentCode[obj.most-1] ==obj.letter){
                answer.push(obj.password)
            }
    });



   // console.log(answer)
    return answer.length
}

//console.log(aocDay2Part2(input)) // 388