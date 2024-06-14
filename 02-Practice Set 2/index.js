const prompt = require('prompt-sync')();

//1. Use logical operators to find whether the age of a person lies between 10 and 20?
let age = prompt("What is your age?")
if(age>10 && age<20){
  console.log("Age lies between 10 and 20")
}
else{
  console.log("Age does not lie between 10 and 20")
}

//2. Demostrate the use of switch case statements in javascript
let age1 = prompt("What is your age?")
age1 = Number.parseInt(age1)
switch(age1){
  case 9:
    console.log("Under 10")
    break;
  case 10:
    console.log("Exactly 10")
    break;
  case 11:
    console.log("Above 10")
    break;
  default:
    console.log("undefined")
    break;
}

//3. Write a javascript program to find whether a number is divisible by 2 and 3
let number = prompt("Give your number: ")
number = Number.parseInt(number)
if(number%2 == 0 && number%3 == 0){
  console.log("Number is divisible by 2 and 3")
}
else{
  console.log("Number is not divisible by 2 and 3")
}

//4. Write a javascript program to find whether a number is divisible by either 2 or 3
let number1 = prompt("Give your number: ")
number1 = Number.parseInt(number1)
if(number1%2 == 0 || number1%3 == 0){
  console.log("Number is divisible by either 2 or 3")
}
else{
  console.log("Number is not divisible by 2 and 3")
}

//5. Print "You can drive" or "You cannot drive" based on age being greater than 18 using ternary operator
let age2 = prompt("Enter Your Age: ")
age2 = Number.parseInt(age2)
console.log(age>18? "You can drive" : "You can't drive")