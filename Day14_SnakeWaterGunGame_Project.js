// Snake Water Gun Game Project In Javascript 

const prompt = require("prompt-sync")({sigint:true})

// program to get a element from an array
function getRandomItem(arr){

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];
    return item
}

console.log('\nRule: You will get only 8 opportunities. At the end of the game I will shopw your final result.\nWelcome to Snake Water Gun Game\n\nPress --->\nS - Snake\nG - Gun\nW - Water')

// loop to continue the game until we want
let gameDraw = 0
let userWin = 0
let computerWin = 0
let countOpportunity = 0
let unexpectedKeyword = 0
while (true){
    countOpportunity +=1
    // This is array to generate random element
    const array = ['S', 'W', 'G'];
    const computerInput = getRandomItem(array)
    console.log(computerInput)

    // Get Input from user
    let getUserInput= prompt('\nEnter here: ')

    // First Condition:)) If User and Computer input is equal, it will go in this statement
    if (getUserInput.charAt(0).toUpperCase()  == computerInput){
        console.log('Match Draw') 
        console.log(`You entered ${getUserInput} and Computer entered ${computerInput}`);       
        gameDraw +=1
        console.log(`Now, You have ${7 - countOpportunity} opportunities`)
    }

    // Second Condition:)) If User Input is S - Snake and Computer Input is W, it will in this statement
    else if (getUserInput.charAt(0).toUpperCase() == 'S' && computerInput == 'W'){
        console.log('\n😎🤑😝You won🤩😋😍\n');
        console.log(`You entered ${getUserInput} and Computer entered ${computerInput}`);
        userWin +=1
        console.log(`Now, You have ${7 - countOpportunity} opportunities`)

    }

    // Third Condition:)) If User Input is W - Water and Computer Input is S, it will in this statement
    else if (getUserInput.charAt(0).toUpperCase() == 'W' && computerInput == 'S'){
        console.log('\n😎🤑😝Computer won🤩😋😍\n')
        console.log(`You entered ${getUserInput} and Computer entered ${computerInput}`);
        computerWin +=1
        console.log(`Now, You have ${7 - countOpportunity} opportunities`)
    }

    // Forth Condition:)) If User Input is W - Water and Computer Input is G, it will in this statement
    else if (getUserInput.charAt(0).toUpperCase() == 'W' && computerInput == 'G'){
        console.log('\n😎🤑😝You won🤩😋😍\n')
        console.log(`You entered ${getUserInput} and Computer entered ${computerInput}`);
        userWin +=1
        console.log(`Now, You have ${7 - countOpportunity} opportunities`)
    }

    // Fifth Condition:)) If User Input is G - Gun and Computer Input is W, it will in this statement
    else if (getUserInput.charAt(0).toUpperCase() == 'G' && computerInput == 'W'){
        console.log('\n😎🤑😝Computer won🤩😋😍\n')
        console.log(`You entered ${getUserInput} and Computer entered ${computerInput}`);
        computerWin +=1
        console.log(`Now, You have ${7 - countOpportunity} opportunities`)
    }


    // Sixth Condition:)) If User Input is G - Gun and Computer Input is S, it will in this statement
    else if (getUserInput.charAt(0).toUpperCase() == 'G' && computerInput == 'S'){
        console.log('\n😎🤑😝You won🤩😋😍\n')
        console.log(`You entered ${getUserInput} and Computer entered ${computerInput}`);
        userWin +=1
        console.log(`Now, You have ${7 - countOpportunity} opportunities`)
    }

    // Seventh Condition:)) If User Input is S - Snake and Computer Input is G, it will in this statement
    else if (getUserInput.charAt(0).toUpperCase() == 'S' && computerInput == 'G'){
        console.log('\n😎🤑😝Computer won🤩😋😍\n')
        console.log(`You entered ${getUserInput} and Computer entered ${computerInput}`);
        computerWin +=1
        console.log(`Now, You have ${7 - countOpportunity} opportunities`)
    } 

    // Eigth Condition:)) If User entered unexpected keyword, it will in this statement
    else{
        console.log('\nSorry! You entered unexpected keyword, Please Try again!!\n')
        console.log(`Now, You have ${7 - countOpportunity} opportunities`)
        unexpectedKeyword +=1
    }
    if (countOpportunity  == 7){
        console.log('\n-----------------Final Result-------------')
        console.log('\n\nResult:)) Now, Game Over\nLet\'s see Final Result, Who is winner')
        console.log(`\nGame Draw ${gameDraw} times\nComputer has won ${computerWin} times\nYou have won ${userWin} times\nEntered unexpected Keyword ${unexpectedKeyword} times\n\n`)
        if (userWin > computerWin){
            console.log('Final Result --->\n🍫💲🍟🌭😊🥰Congratulation, You are winner🥞🍔🍟🎂🍰\n')
            break
        }
        else if (userWin < computerWin){
            console.log('Final Result --->\n🍫💲🍟🌭😊🥰Computer is winner🥞🍔🍟🎂🍰\n')
            break
        }
        else{
            console.log('\nYour and Computer scores are equal. No one is a winner or Match Draw.\n')
            break
        }
        
    }

           
    

}
