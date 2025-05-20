let num1 = 5
let negNum1 = -num1
console.log(negNum1)

// addition with  a string will always concatenate 
let num2 = 3
let str1 = "5"

let result1 = num2 + str1
console.log(typeof(result1))
console.log(result1)

// first will add num2 with num 1 and concatenate with str1 
let str2 = num1 + num2 + str1
console.log(str2)

// concatenate num1 with str1 and then num 2 with them As addition with  a string will always concatenate 
let str3 = str1 + num1 + num2
console.log(str3)

// So th best thing is to use parenthesis for the preferance you want to do 
// For Example
let str4 = str1 + (num1 + num2) //Add the two numbers and then concatenate with the string
console.log(str4)

console.log(-true)

let gameCounter = 100
console.log(gameCounter++)

console.log(gameCounter)
console.log(++gameCounter)