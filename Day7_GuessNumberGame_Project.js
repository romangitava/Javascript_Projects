// Project: GuessNumber Game
const prompt = require("prompt-sync")({sigint:true})

let computerNum = Number.parseInt(Math.random()*100); // To generate number and typecast to integer
console.log(computerNum)
let count_opportunities = 0 // To count how much times user used opportunities to be a winner

function userHints(value, text, sign){
    if (value > 50){
        console.log(`\nJump 50${sign} steps ${text}π¦`)
    }
    else if(value > 40){
        console.log(`\nJump 40${sign} steps ${text}π`)
    }
    else if(value > 30){
        console.log(`\nJump 30${sign} steps ${text}ππΎββοΈ`)
    }
    else if (value > 20){
        console.log(`\nJump 20${sign} steps ${text}π¦`)
    }
    else if (value> 10){
        console.log(`\nJump 10${sign} steps ${text}π€ΎπΎββοΈ`)
    }
    else if (value > 5){
        console.log(`\nJump 5${sign} steps ${text}π€ΎπΎββοΈ`)
    }
    else if (value > 3){
        console.log(`You are very very closed. Take very small jumpπ ${text}`)
    }
    else if ( value > 0){
        console.log(`You are extremely closed. Take extremely small jumpπ’ ${text}`)
    }
}

console.log('\nHere is rule.....You will get only 6 opportunities to be a winner. I choose number between 0 to 100. you have to guess right number\n')
let userWishToStart = prompt('If you want to playβΊ the game Enter here y or yes β‘: ')
while (true){
    count_opportunities+=1
    if (userWishToStart.charAt(0).toUpperCase() === 'Yes' || userWishToStart.charAt(0).toUpperCase() === 'Y'){
        let userInput = Number.parseInt(prompt('\nEnter your guess here: '))
        if (userInput == computerNum){
            if (count_opportunities == 2 || count_opportunities == 1){
                console.log(`\nπβΊππππ Many Many Congratulation, You have won this gameπ€©π€βΊππ₯° in ${count_opportunities} opportunities\n`)
                break
            }
            else{
                console.log(`\nπβΊππππ Congratulation, You have won this game π€©π€βΊππ₯° in ${count_opportunities} opportunities\n`)
                break
            }
        }
        else if(userInput < computerNum){
            console.log(`\nNow, You have ${6 - count_opportunities} opportunitities\n`)
            console.log('\nHints: -β¬π½')
            let getGreaterNum = computerNum - userInput
            userHints(getGreaterNum, 'ahead', '++')
        }
    
        else if (userInput > computerNum){
            console.log(`\nNow, You have ${ 6 - count_opportunities} opportunitities\n`)
            console.log('\nHints: -β¬π½')
            let getLesserNum = userInput - computerNum
            userHints(getLesserNum, 'towards back', '--')
        }
        if (count_opportunities === 6){
            console.log('\nπππ€Missed all opportunitiesπππ²\n')
            break
        }
    }
    
}
