console.log("str"+"str")

const repeatButtons = document.querySelectorAll(".repeatBtn")
const numEnd = document.querySelectorAll(".endNum")
const inputField = document.getElementById("input")
const outputField = document.getElementById("output")
const calculate = document.getElementById("calcButnEqual")
const dot = document.getElementById("calcButnDot")
const clear = document.getElementById("calcButnClear")
let numcount = 0
let calcArr = []
arr = []
calcArr[numcount] = []

console.log(calcArr)
const minus = document.getElementById("calcButnMinus")
const plus = document.getElementById("calcButnPlus")
const mult = document.getElementById("calcButnMult")
const divide = document.getElementById("calcButnDivide")
numEnd.forEach((item) => {
  item.addEventListener("click", function () {
    console.log(calcArr[numcount].length > 1 || numcount == 0)

    if (
      calcArr[numcount].length > 1 ||
      (numcount === 0 && calcArr[numcount].length > 0)
    ) {
      if (calcArr[numcount][calcArr[numcount].length - 1] !== ".") {
        numcount += 1
        calcArr[numcount] = []
        console.log(item.innerHTML)
        calcArr[numcount].push(item.innerHTML)
        console.log(calcArr[numcount])
        inputField.innerHTML+=item.innerHTML
      }
    }
  })
})

repeatButtons.forEach((item) => {
  item.addEventListener("click", function () {
    //inputField.innerHTML+=item.innerHTML
    console.log(item.innerHTML)
    console.log(numcount)
    calcArr[numcount].push(item.innerHTML)
    arr.push(item.innerHTML)
    console.log(calcArr[numcount])
    console.log(calcArr)
    console.log(arr)
    inputField.innerHTML+=item.innerHTML
  })
})

dot.addEventListener("click", function () {
  if (calcArr[numcount].length > 1 || (numcount === 0 && calcArr[numcount].length > 0)) {
    calcArr[numcount].push(dot.innerHTML)
    console.log(calcArr)
    inputField.innerHTML+=dot.innerHTML
  }
})

calculate.addEventListener("click", function () {
  result = calcArr.map((char) => {
    return char.join("")
  })
  result = result.join("")
  console.log(calcArr)
  console.log(eval(calcArr))
  inputField.innerHTML=""
  outputField.innerHTML=eval(result)
  calcArr=calcArr.map((char)=>{return []}).filter((char,i)=>{return i===0})
  numcount = 0
  console.log(calcArr)
})

clear.addEventListener("click", function (){
    
    calcArr[numcount].pop()
    if( calcArr[numcount].length===0){
        calcArr.pop()
        numcount-=1
    }
    inputField.innerHTML=inputField.innerHTML.slice(0,-1)
    console.log(calcArr)
})

c