//Loops and Functions

const prompt = require('prompt-sync')();
//1. Write a program to print the marks of a student in an object using for loop
//obj = { harry: 98, rohan: 70, aakash: 7 }
let obj = {
  harry: 98,
  rohan: 70,
  aakash: 7
}
for (let i = 0; i < Object.keys(obj).length; i++){
  console.log("Marks of "+ Object.keys(obj)[i]+": "+ obj[Object.keys(obj)[i]])
}

//2. Write a program in Q1 using for in loop
for (let i in obj){
  console.log("Marks of "+i+": " + obj[i])
}

//3. Write a program to print "try again" until the user enters the correct number.
let n = 64;
let i
while(i != n){
  i = prompt("Enter the number in the range of 60-70: ")
  if(i!=n){
    console.log("Try Again")
  }
}
console.log("You have entered the correct number.")

//4. Write a function to find mean of 5 numbers.
const mean = (a,b,c,d,e)=>{
  return console.log("Mean of 5 numbers is: "+(a+b+c+d+e)/5)
}
mean(1,2,3,4,5);