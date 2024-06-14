//String Method

//1. What will the following print in javascript?
// console.log("har\"".length)
console.log("har\"")

//2. Explore the includes, startsWith & endsWith functions of a string.
let name1 = "Sabby"
let sentence = "Sabby is a 4th year CS-Student"
console.log(sentence.includes(name1)) 
console.log(sentence.startsWith(name1)) 
console.log(sentence.endsWith("CS-Student")) 

//3. Write a program to convert a given string to lowercase.
let str = "HELLO"
console.log(str.toLowerCase())

//4. Extract the amount out of this string "Please give Rs 1000"
let str1 = "Please give Rs 1000"
let amount = Number.parseInt(str1.slice("Please give Rs ".length))
console.log(amount)
console.log(typeof amount)

//5. Try to change 4th character of a given string were you able to do it?
str1[3] = "q";
console.log(str1)
//NO