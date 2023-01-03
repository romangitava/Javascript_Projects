// <Get container> id so thar pixel box can be stored
let getContainer = document.getElementById("container")


/*___________________create element that name is <pixel> using for loop________________*/
for (let range = 0; range<16*40; range++){
    getContainer.insertAdjacentHTML("afterbegin", "<div class='pixel'></div>")
}


// __________________________get all <pixel> classes____________________
let getPixelClasses = document.querySelectorAll(".pixel")

// ______________________________________to write number in a <pexel> classes so that we don't need to count again and again over again______________________________________
// for (let writeNum in getPixelClasses){
//         getPixelClasses[writeNum].innerHTML = writeNum
// }


// ______________________________using for loop to iterate <pixel> classes_____________________
for(let iterate in getPixelClasses){

    /* _____________________________Draw first Pixel Image______________________ */
    if(iterate>4 && iterate<11 || iterate>=19 && iterate<21 || iterate>=27 && iterate<29 || iterate>=34 && iterate<35 || iterate>=45 && iterate<46 || iterate>=49 && iterate<50 || iterate>=62 && iterate<63 || iterate>=65 && iterate<66 || iterate>=78 && iterate<79 || iterate>=80 && iterate<81 || iterate>=95 && iterate<97 || iterate>=111 && iterate<=112 || iterate>=127 && iterate<=128 || iterate>=143 && iterate<=144 || iterate>=159 && iterate<161 || iterate>=164 && iterate<172 || iterate>=175 && iterate<176 || iterate>=177 && iterate<180 || iterate>=182 && iterate<183 || iterate>=185 && iterate<186 || iterate>=188 && iterate<191 || iterate>=194 && iterate<195 || iterate>=198 && iterate<199 || iterate>=201 && iterate<202 || iterate>=205 && iterate<206 || iterate>=210 && iterate<211 || iterate>=221 && iterate<222 || iterate>=227 && iterate<228 || iterate>=236 && iterate<237 || iterate>=244 && iterate<252){
        getPixelClasses[iterate].style.background = "black"
    }
    else if(iterate>=21 && iterate<25 || iterate>=37 && iterate<41 || iterate>=52 && iterate<58 || iterate>=67 && iterate<69 || iterate>=73 && iterate<75 || iterate>=81 && iterate<84 || iterate>=90 && iterate<95 || iterate>=97 && iterate<100 || iterate>=106 && iterate<108 || iterate>=110 && iterate<111 || iterate>=114 && iterate<116 || iterate>=122 && iterate<123 || iterate>=131 && iterate<133 || iterate>=137 && iterate<139 || iterate>=147 && iterate<156 || iterate>=158 && iterate<159 || iterate>=162 && iterate<164 || iterate>=172 && iterate<175){
        getPixelClasses[iterate].style.background = "red"
    }

    /* ________________________________Let's Start Draw Next Pixel Image____________________ */
    
    // for red background
    if(iterate>=373 && iterate<379 || iterate>=388 && iterate<398 || iterate>=484 && iterate<486 || iterate>=487 && iterate<491 || iterate>=499 && iterate<502 || iterate>=503 && iterate<505 || iterate>=506 && iterate<510 || iterate>=514 && iterate<518 || iterate>=522 && iterate<526 || iterate>=532 && iterate<533 || iterate>=539 && iterate<540){
        getPixelClasses[iterate].style.background = "red"
    }

    // for blue backgroud
    else if(iterate>=486 && iterate<487 || iterate>=502 && iterate<503 || iterate>=505 && iterate<506 || iterate >=518 && iterate<522 || iterate>=533 && iterate<534 || iterate>=535 && iterate<537 || iterate>=538 && iterate<539 || iterate>=549 && iterate<555 || iterate>=564 && iterate<572 || iterate>=580 && iterate<583 || iterate>=585 && iterate<588){
        getPixelClasses[iterate].style.background = "rgb(3, 101, 125) "
    }

    // for brown background
    else if(iterate>=404 && iterate<407 || iterate>=419 && iterate<420 || iterate>=421 && iterate<422 || iterate>=435 && iterate<436 || iterate>=437 && iterate<439 || iterate>=451 && iterate<453 || iterate>=595 && iterate<598 || iterate>=602 && iterate<605 || iterate>=610 && iterate<614 || iterate>=618 && iterate<622){
        getPixelClasses[iterate].style.background = "#6c2525"
    }
    
    // for green background 
    else if(iterate>=534 && iterate<535 || iterate>=537 && iterate<538){
        getPixelClasses[iterate].style.background = "green"
    }

    // for other background-color
    else if(iterate>=407 && iterate<410 || iterate>=411 && iterate<412 || iterate>=420 && iterate<421 || iterate>=422 && iterate<426 || iterate>=427 && iterate<430 || iterate>=436 && iterate<437 || iterate>=439 && iterate<443 || iterate>=444 && iterate<447 || iterate>=453 && iterate<458 || iterate>=469 && iterate<477 || iterate>=530 && iterate<532 || iterate>=540 && iterate<542 || iterate>=546 && iterate<549 || iterate>=555 && iterate<558 || iterate>=562 && iterate<564 || iterate>= 572 && iterate<574){
        getPixelClasses[iterate].style.background = "rgb(242, 90, 40)"
    }

    // for black background
    else if(iterate>=410 && iterate<411 || iterate>=426 && iterate<427 || iterate>=443 && iterate<444 || iterate>=458 && iterate<462){
        getPixelClasses[iterate].style.background = "black"
    }
}

