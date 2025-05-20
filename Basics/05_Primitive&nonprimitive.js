// On the basis of how different datatypes are stored  and how they can be accessed, there are two types of datatypes
// 1. Primitive
/*
    7 types: String, number, boolean, null, undefined, Symbol, BigInt
    Primitive are called by value with the exception of Symbols which act as if they are passed by reference because each symbol creates a unique identity - they are compared like References not like numbers or strings
*/

const bigInt = 343434387489574574776759796n // Adding n converts a number to BigInt
const Id = Symbol('123') // typeOf Symbol -> Symbol
// Symbol is used for uniqueness, Figma make extensive used of Symbol
const anotherId = Symbol('123')

console.log('Testing Symbol')
console.log(Id == Id)
console.log(Id === Id)

console.log(Id == anotherId) //false
console.log(Id === anotherId) // false

//Becasue Symbol keyword make it a unique datatype, even if the values are same, they are not same

//  TO compare the description (value) of two symbols we use symbol.description
console.log('Comparing Description')
console.log(Id.description == anotherId.description)

const one = Symbol.for('1')
const two = Symbol.for('1')

console.log(one == two)

// .for('abc') basically look up for the reference of the key passed in this case 'abc'. it looks the reference in the global symbol registry. If there is one against the key it returns it, if not it creates one.
// Thats why true above but not true in the case below

const three = Symbol.for('three')
const four = Symbol.for('four')
console.log(three == four)

// 2. Non-Primitive or Reference type
/*
    Arrays, Objects, Functions
    
*/

// ****************************************************************
// STACK and HEAP memory

// Stack (Primitive) -> Copy of the value
// Heap (Non-Primitive) -> Reference

const name = 'Fahad'
console.log(`Hello! this is ${name}`) //String Interpolations

//Almost same string methods as  JAVA

const language = new String('Javascript')

console.log(name[0])
console.log(language[0])

console.log(name.__proto__)
console.log(language.__proto__) // returns empty object here, but not in web-console
// const name = 'Fahad' -> this syntax is also converted into object syntax behind the scenes
// Thats why the phrase "Everything in JS is an Object"

//  For more on proto https://chatgpt.com/share/6798bd02-548c-800e-a307-b78fad30bd2a

console.log(language.charAt(7))
console.log(language.indexOf('p'))

console.log(language.replace('a', 'p'))
console.log(language.replaceAll('a', 'p'))

let url = 'https://cms.comsats.edu.pk:8083%20/Login/Index';
url = url.replace('%20','');
console.log(url)
console.log(typeof bigInt)

console.log(name.slice(-5,3))
