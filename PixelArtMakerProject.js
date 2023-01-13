// get <container-grid> element to insert elements inside it
const getContainerOfGrid = document.getElementById("container-grid")


// // get grid-height-cell
let getHeightOfGrid = document.getElementById("get-height")

// // get grid-width-cell
let getWidthOfGrid = document.getElementById("get-width")


// get button to create a grid 
const getButtonToCreateGrid = document.getElementById("create-grid")

const getColor = document.getElementsByClassName("getColor")[0]


let drawPixel = false


getButtonToCreateGrid.addEventListener("click", function(){
    // to give the column length of grid which is entered by user
    getContainerOfGrid.style.gridTemplateColumns = `repeat(${getHeightOfGrid.value}, 1fr)`
    
    
    // to give the row length of grid which is entered by user
    getContainerOfGrid.style.gridTemplateRows = `repeat(${getWidthOfGrid.value}, 5vh)`
    
    // make cells using for loop
    for (let createCells = 0; createCells<getHeightOfGrid.value * getWidthOfGrid.value; createCells++){
        
        let createCells = document.createElement("div")
        createCells.classList.add("box")

        createCells.addEventListener("mouseover", function(){
            if(!drawPixel) return
            createCells.style.background = getColor.value
        })
        
        createCells.addEventListener("click", function(){
            createCells.style.background = getColor.value

        })

        getContainerOfGrid.append(createCells)

    }

// get cells
let getCellsToRemoveShadow = document.querySelectorAll(".box")

// get button to erase backgroundColor
let getButtonToRemoveBackground = document.getElementById("erase")
getButtonToRemoveBackground.addEventListener("click", function(){
    console.log("cii")
    console.log(getCellsToRemoveShadow.length)
    for (let removeShadow = 0; removeShadow<getCellsToRemoveShadow.length; removeShadow++){
        getCellsToRemoveShadow[removeShadow].style.boxShadow = "-0px -0px 0px 0px black"
    }
})


let getClearButton = document.getElementById("clear")
getClearButton.addEventListener("click", function(){
    document.body.style.background = "white"
    document.getElementById("main-heading").style.color = "black"
    document.getElementById("container-gridSet").style.color = "black"

})



})

window.addEventListener("mousedown", function(){
    drawPixel = true
})

window.addEventListener("mouseup", function(){
    drawPixel = false
})