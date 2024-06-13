const prompt = require("prompt-sync")();
//1. Create an array of numbers and take input from the user to add numbers to this array.
let arr = [1, 2, 3, 4, 5];
let a = Number.parseInt(prompt("Enter a number: "));
arr.push(a);
console.log(arr);

//2. Keep adding numbers to the array in 1 until 0 is added to the array.
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let i
while (i != 0){
  i = Number.parseInt(prompt("Enter any number: "))
  arr1.push(i)
  console.log(arr1)
}

//3. Filter for numbers divisible by 10 from a given array.
let arr2 = [20, 4, 5, 6, 7, 8, 9, 1, 19, 24, 48];
let newArr = arr2.filter((value)=>{
  return value%10 == 0
})
console.log(newArr)

//4. Create an array of square of given numbers.
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr1 = arr3.map((value)=>{
  return value*value
})
console.log(newArr1)

//5. Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calculated)
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = arr4.reduce((x1,x2)=>{
    return x1*x2
  })
console.log(n)