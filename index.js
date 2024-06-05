#! /usr/bin/env node
import inquirer from "inquirer";
const randNum = Math.round(Math.random() * 10); //generate a random number between 1 to 10;
let evenOdd = (num) => num % 2 == 0 ? "Even" : "Odd"; //function to check if number is even or odd
let bigSmall = (num1, num2) => num1 > num2 ? "Bigger" : "Smaller"; //check if input is smaller or bigger from random number
let input = await inquirer.prompt(//wait for user to guess the number
{
    name: "guess",
    type: "number",
    message: "A number is generated from 1 to 10. Enter your guess: "
});
if (input.guess == randNum) { //check if user input is correct
    console.log("CONGRATULATIONS! you guessed it right."); //if correct then print congratulation
}
else {
    console.log("SORRY! incorrect answer.");
    let input2 = await inquirer.prompt(//if wrong, let user try again with a hint
    {
        name: "guess2",
        type: "number",
        message: `HINT: Try again with a ${bigSmall(randNum, input.guess)} and ${evenOdd(randNum)} number: `
    });
    if (input2.guess2 == randNum) {
        console.log("CONGRATULATIONS! you guessed it right."); //if correct then print congratulation
    }
    else {
        console.log(`SORRY! incorrect answer. Correct answer is ${randNum}.`);
    }
}
