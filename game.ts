#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a random n number
// 2) User input for guessing number
// 3) Compare user input with computer generated number and show result

const randomNumber= Math.floor(Math.random() *6 + 1);

const answers = await inquirer.prompt([{
    name: "Your_Guess_Number",
    type: "number",
    message: "Please guess a Number between 1-6:",
}]);
if(answers.Your_Guess_Number === randomNumber){
    console.log("Congratulations! You guessed the correct number!");
}
else{
    console.log("Sorry! You guessed the wrong number!");
}