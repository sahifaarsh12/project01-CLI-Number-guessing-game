#! /usr/bin/env node
import inquirer from "inquirer"
//comp will generate a random number
//user input for guessing number
//compare user input with comp random number and show a result
const randomNumber= Math.floor(Math.random()* 6 + 1 )
const answers = await inquirer.prompt([
    {
        name : "userGuessednumber",
        type:"number",
        message:"Please guess a number between 1-6:",
    },
])
if(answers.userGuessednumber===randomNumber){
    console.log("Congratulations! you guessed right number ")
}else{
    console.log("You guessed wrong number")
}