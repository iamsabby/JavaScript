//1. Create a variale of type string and try to add a number to it.
let a = "Sabby"
let b = 5
console.log("Ans1: "+a + b)

//2. Use typeof operator to find the datatype of the string in last question
console.log("Ans2: "+typeof (a+b))

// 3. Create a const object in javascript. Can you change it to hold a number later?
const c = {
  name: "Sabby",
  regno: 552002,
  age: 22
}
// c = 5

console.log("Ans3: We can't hold it to a number later because it will throw an error (TypeError: Assignment to constant variable.)")

// 4. Try to add a new key to the const object in problem 3. Were you able to do it?
c['section'] = "A"
console.log("Ans4: "+c)

// 5. Write a JS program to create a word-meaning dictionary of 5 words.
const dictionary = {
  Abrogate: "Cancel or revoke.",
  Anachronism: "Something not fitting the time period.",
  Arrant: "Completely and totally.",
  Artless: "Honest and straightforward.",
  Asperity: "Harshness in tone."
}

console.log("Ans5: "+dictionary.Artless)