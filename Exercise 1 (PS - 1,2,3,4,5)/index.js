//1. Write a javascript program to generate a random number and store it in a variable. The program then takes an input from the user to tell them whether the guess was correct, greater or lesser than the original number.
// 100 - (no of guesses) is the score of the user. The program is expected to terminate once the number is guessed. Number should be between 1 - 100.

const prompt = require("prompt-sync")();

let a = Math.floor(Math.random() * 100)
let i
var count = 0
while(i != a){
  // let count = 0
  i = prompt("Enter your number: ")
  count++
  if(i<a){
    console.log(i + " < Hidden number")
  }
  else if(i>a){
    console.log(i + " > Hidden number")
  }
  else{
    console.log("You guessed the right number "+ a)
    console.log("Your score is: "+(100 - count)+ "%")
  }
}