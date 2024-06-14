//1. Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive!
let age = Number.parseInt(prompt("Q1: Enter your age: "))
if (age >= 18) {
  alert("You can drive")
}
else {
  alert("You cannot drive")
}

//2. In Q1 use confirm to ask the user if he wants to see the prompt again
let runAgain = true
while (runAgain) {
  age = Number.parseInt(prompt("Q2: Enter your age: "))
  if (age >= 18) {
    alert("You can drive")
  }
  else {
    alert("You cannot drive")
  }
  runAgain = confirm("Do you want to run again?")
}

//3. In the previous question, use console.error to log the error if the age entered is negative
if (age < 0) {
  console.error("The age you entered is not suitable for drive")
}

//4. Write a program to change the url to google.com (redirection) if user enters a number greater than 4
if (age > 4) {
  location.href = "https://www.google.com"
}

///5. Change the background of the page to yellow, red or any other color based on user input through prompt
let color = prompt("Enter your color:")
document.body.style.background = color