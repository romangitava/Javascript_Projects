//_________________________ get <next-btn> class to slide towards ahead ____________________
let getNextBtn = document.getElementsByClassName("next-btn")[0]


// get <slide> classes
let getSlideClasses = document.querySelectorAll(".slide")

// add events on next button
getNextBtn.addEventListener("click", function(){


    // using loop to find where is <active> class
    for (let i = 0; i<getSlideClasses.length; i++){

        // condition to find <active> class
        if(getSlideClasses[i].classList.contains("active")){

            // store index of <active> class
            var getIndexOfSlideClass = i // here why i use var because if you use let here you can't access index of slice outside this loop
            getSlideClasses[i].classList.remove("active")

            // remove <dot-slide> class this feature I added after 5hours don't be confuse why i write here <getDotInsideTheContainer> class here Why I write this line go at the end and see where I wrote I am gonna add one more feature in it from there your cofusion will be cleared but I prefer firstly you should skip this line if you skip it there is no problem. If you skip this line you will understand clearly whereever I wrote line with <getDotInsideTheContainer> you can skip them. I'll write some where you have to skip the code

            //skip start
            getDotInsideTheDotContainer[i].classList.remove("dot-slide")

            // skip end
            break
            
            
        }


    }

    // condition if <getIndexOfSlideClass>+1 is more than length of getSlideClass then it'll go in if statement otherwise go in else statement
    if(getIndexOfSlideClass+1 >= getSlideClasses.length){

        // get the length of a <slide> class
        getSlideClasses[getSlideClasses.length-1].classList.remove("active")
        getDotInsideTheDotContainer[getDotInsideTheDotContainer.length-1].classList.remove("dot-slide")
        // I added this because I want to repeat it again and again over again that's why I added this line 
        getSlideClasses[0].classList.add("active")


        // you can skip it start
        
        getDotInsideTheDotContainer[0].classList.add("dot-slide")

        // skip end
        
    }
    else{
        // get <getIndexOfSlideClass> variable to get index of <active> class
        getSlideClasses[getIndexOfSlideClass+1].classList.add("active")

        // skip start
        getDotInsideTheDotContainer[getIndexOfSlideClass+1].classList.add("dot-slide")
        // skip end
    }
})




//_________________________ get <prev-btn> class to slide towards back ____________________
 let getPrevArrow = document.getElementsByClassName("prev-btn")[0]


// add click events on a Previous arrow
getPrevArrow.addEventListener("click", function(){
    for (let i = 0; i<getSlideClasses.length; i++){

        if(getSlideClasses[i].classList.contains("active")){
            
            // get the current index of <active> class
            var getCurrentIndexOfActiveClass = i // Why? I use var here
            getSlideClasses[i].classList.remove("active")

            // skip start
            getDotInsideTheDotContainer[i].classList.remove("dot-slide")
            // skip end
            break
        }
    }

    
    // condition if <getCurrentIndexOfSlideClass>-1 is more than length of 0 that means negative number then it'll go in if statement otherwise go in else statement 
    if(getCurrentIndexOfActiveClass-1 >= 0){
        // get the length of a <slide> class

        getSlideClasses[getCurrentIndexOfActiveClass-1].classList.add("active")

        // skip start 
        getDotInsideTheDotContainer[getCurrentIndexOfActiveClass-1].classList.add("dot-slide")
    }
    
    else{
        getSlideClasses[0].classList.remove("active")

        // I added this because I want to repeat it again and again over again that's why I added this line
        getSlideClasses[getSlideClasses.length-1].classList.add("active")

        // skip start 
        getDotInsideTheDotContainer[getDotInsideTheDotContainer.length-1].classList.add("dot-slide")
        // skip end
    }
})








// ________________________________I am gonna add one more feature in it_____________________

// get <dots-container> class
let getDotContainer = document.getElementsByClassName("dots-container")[0]


// using for loop to insert element how much elements <container> class has
for (let j = 0; j<getSlideClasses.length; j++){
    getDotContainer.insertAdjacentHTML("afterbegin", "<div class='dot'></div>")
}

// get <dot> class
let getDotClasses = document.querySelectorAll(".dot")

// using for loop to inserts elements inside the <dot> class
for (let g = 0; g<getDotClasses.length; g++){
    getDotClasses[g].innerHTML = "<div class='dot-in-container'></div>"
    // console.log(i)
}

// get <dot-inside-container> classes
let getDotInsideTheDotContainer = document.querySelectorAll(".dot-in-container")

// by deafult I added <dot-slide> so that when the is refresh it can work
getDotInsideTheDotContainer[0].classList.add("dot-slide")


// add click event on a <dot> class

// using for loop to know where user is clicked

for (let knowClickEvent = 0; knowClickEvent<getDotClasses.length; knowClickEvent++){
    getDotClasses[knowClickEvent].addEventListener("click", function(){

        // this loop is for removing <dot-slide> and <active> class to find the index so that we can remove images and dots on the particular index
        for (let knowWhereDotSlide = 0; knowWhereDotSlide<getDotInsideTheDotContainer.length; knowWhereDotSlide++){

            // condition if <getDotInsideTheContainer[index]> class has <dot-slide> class
            if(getDotInsideTheDotContainer[knowWhereDotSlide].classList.contains("dot-slide")){
                // remove that
                getDotInsideTheDotContainer[knowWhereDotSlide].classList.remove("dot-slide")
                getSlideClasses[knowWhereDotSlide].classList.remove("active")
                break 
            }
        }


        // this loop is to find  the index so that we can remove that


        // add <dot-slide> class on a perticular index where user is clicked
        getDotInsideTheDotContainer[knowClickEvent].classList.add("dot-slide")
        
        // add <active> class on a perticular index where user is clicked
        getSlideClasses[knowClickEvent].classList.add("active")


    })
}