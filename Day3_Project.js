// Faulty Calculator
/*
It gives wrong answer of few numbers Like: If user enter 23 * 5 = 105 or 26 / 7 = 2.457
or 86 + 854 = 950 or 865 - 264 = 611 left these numbers if user enter other numbers that
will get right answer. So let's start building--
*/

console.log('\n\n\t\t\t\tWelcome To Calculator\t')
const prompt = require("prompt-sync")({sigint:true})
let get_First_Number = Number.parseFloat(prompt('\nEnter first num here: '))
let get_Second_Number = Number.parseFloat(prompt('Enter second num here: '))

getSign = prompt('Enter sign ➕ ➖ ✖ ➗ here: ')

if (get_First_Number == 23 && get_Second_Number == 5 && getSign == '*' || get_First_Number == 5 && get_Second_Number == 23 && getSign == '*'){
    console.log('The answer is 105')
}
else if (get_First_Number == 26 && get_Second_Number == 7 && getSign == '/' || get_First_Number == 7 && get_Second_Number == 26 && getSign == '/'){
    console.log('The answer is 2.457')
}
else if (get_First_Number == 86 && get_Second_Number == 854 && getSign == '+' || get_First_Number == 854 && get_Second_Number == 86 && getSign == '+'){
    console.log('The answer is 950')
}
else if (get_First_Number == 865 && get_Second_Number == 264 && getSign == '-' || get_First_Number == 264 && get_Second_Number == 865 && getSign == '-'){
    console.log('The answer is 611')
}

else if (getSign == '+'){
    console.log('\nThe answer is', get_First_Number + get_Second_Number + "\n")
}
else if (getSign == '-'){
    console.log('\nThe answer is', get_First_Number - get_Second_Number + "\n")
}
else if (getSign == '*'){
    console.log('\nThe answer is', get_First_Number * get_Second_Number + "\n")
}
else if (getSign == '/'){
    console.log('\nThe answer is', get_First_Number / get_Second_Number + "\n")
}

else{
    console.log('\nYou entered unexpected keyword\n')
}