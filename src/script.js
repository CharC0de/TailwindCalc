
const repeatButtons = document.querySelectorAll(".repeatBtn")
const numEnd = document.querySelectorAll(".endNum")
const inputField = document.getElementById("input")
let numcount = 0;
let calcArr = []
    arr=[]
    calcArr[numcount] =[]
    

    const minus = document.getElementById("calcButnMinus")
    const plus = document.getElementById("calcButnPlus")
    const mult = document.getElementById("calcButnEqualsMult")
    const divide = document.getElementById("calcButnDivide")
    
    numEnd.forEach((item) => {
        item.addEventListener("click",function(){
            console.log(calcArr[numcount].length > 1)
        if(calcArr[numcount].length > 1){
            numcount++
            calcArr[numcount] =[]
            calcArr[numcount].push(item.innerHTML)
            console.log(calcArr[numcount])
        }
        });
    });

    repeatButtons.forEach((item) => {
        item.addEventListener("click", function() {
            //inputField.innerHTML+=item.innerHTML
            console.log(item.innerHTML)
            calcArr[numcount].push(item.innerHTML)
            arr.push(item.innerHTML)
            console.log(calcArr)
            console.log(arr)
          });
    });
    

    
    

