const buttons = document.querySelectorAll(".b").forEach(button=>{
    button.addEventListener("click",()=>{
        input.textContent += button.textContent
    })
})
const module = document.querySelector(".module")
const divide = document.querySelector(".divide")
const multuply = document.querySelector(".multuply")
const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")
var del = document.querySelector(".del")
const cancle = document.querySelector(".cancle")
const equal = document.querySelector(".equal")
var display = document.querySelector(".display")
var input = document.querySelector(".input")

var prevNumber = 0
var tempOperator = ""

function operatorCalculation(optr, button){
    let currNumber = input.textContent
    currNumber = parseFloat(currNumber)
    let operator = optr
    calculation(currNumber, operator)
    input.textContent += button.textContent
    input.textContent = ""
}
divide.addEventListener("click",()=>{
    operatorCalculation("/", divide)
})
module.addEventListener("click",()=>{
    operatorCalculation("%", module)
})
multuply.addEventListener("click",()=>{
    operatorCalculation("*", multuply)
})
minus.addEventListener("click",()=>{
    operatorCalculation("-", minus)
})
plus.addEventListener("click",()=>{
    operatorCalculation("+", plus)
})
del.addEventListener("click",()=>{
    del = input.textContent
    console.log(del.length)
    input.textContent = del.substr(0, (del.length-1))
})
cancle.addEventListener("click",()=>{
    input.textContent = ""
    display.textContent = ""
    prevNumber = 0
    operator = ""
})
equal.addEventListener("click",()=>{
    let currNumber = input.textContent
    currNumber = parseFloat(currNumber)
    let result = 0
    if(tempOperator == "+"){
        result = prevNumber + currNumber
        equalEvaluation(result)
    }
    else if(tempOperator == "-"){
        result = prevNumber - currNumber
        equalEvaluation(result)
    }
    else if(tempOperator == "*"){
        result = prevNumber * currNumber
        equalEvaluation(result)
    }
    else if(tempOperator == "/"){
        result = prevNumber / currNumber
        equalEvaluation(result)
    }
    else if(tempOperator == "%"){
        result = prevNumber % currNumber
        equalEvaluation(result)
    }
})
function equalEvaluation(result){
    display.textContent = result
    input.textContent = ""
    prevNumber = 0
    operator = ""
}
function Evaluation(result,operator){
    display.textContent = result +" "+ operator
    prevNumber = result
    tempOperator = operator
}
function calculation(currNumber, operator){
    if(tempOperator == "+" && prevNumber !=0){
        let result = prevNumber + currNumber
        Evaluation(result, operator)
    }
    else if(tempOperator == "-" && prevNumber !=0) {
        let result = prevNumber - currNumber
        Evaluation(result, operator)
    }
    else if(tempOperator == "*" && prevNumber !=0) {
        let result = prevNumber * currNumber
        Evaluation(result, operator)
    }
    else if(tempOperator == "/" && prevNumber !=0) {
        let result = prevNumber / currNumber
        Evaluation(result, operator)
    }
    else if(tempOperator == "%" && prevNumber !=0) {
        let result = prevNumber % currNumber
        Evaluation(result, operator)
    }
    else {
        prevNumber = currNumber
        display.textContent = currNumber +" "+ operator
        tempOperator = operator
    }
}