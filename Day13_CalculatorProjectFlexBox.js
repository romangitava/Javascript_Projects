// Get Added
let getPlus = document.getElementsByClassName("box")[0]
getPlus.addEventListener("click", printPlus)

// Get first input
let getFirstValue = document.getElementById("getNum")

// Get second input
let getSecondValue = document.getElementById("getSecondNum")

// Get Result Box
let getResultBox = document.getElementsByClassName("result")[0]
// For to get plus
function printPlus(){
    getPlusFResult = Number.parseInt(getFirstValue.value) + Number.parseInt(getSecondValue.value)
    getResultBox.innerHTML = getPlusFResult   
}


// Get Multiplied 
let getMulSign = document.getElementsByClassName("bo1")[0]
getMulSign.addEventListener("click", printMul)

function printMul(){
    getMulResult = Number.parseInt(getFirstValue.value) * Number.parseInt(getSecondValue.value)
    getResultBox.innerHTML = getMulResult
}

// Get Subtracted
let getMinusSign = document.getElementsByClassName("b1")[0]
getMinusSign.addEventListener("click", printSub)

function printSub(){
    getSubResult = Number.parseInt(getFirstValue.value) - Number.parseInt(getSecondValue.value)
    getResultBox.innerHTML = getSubResult
}

// Get Divided
let getDivSign = document.getElementsByClassName("b2")[0]
getDivSign.addEventListener("click", printDivResult)

function printDivResult(){
    getDivResult = Number.parseInt(getFirstValue.value) / Number.parseInt(getSecondValue.value)
    let typecast = String(getDivResult)
    let findDot = typecast.indexOf(".")
    getResultBox.innerHTML = typecast.slice(0, findDot+6)

}