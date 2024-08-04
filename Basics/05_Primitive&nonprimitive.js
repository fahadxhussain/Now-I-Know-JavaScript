// On the basis of how different datatypes are stored  and how they can be accessed, there are two types of datatypes
// 1. Primitive
/*
    7 types: String, number, boolean, null, undefined, Symbol, BigInt
    Primitive are called by value
*/

const bigInt = 343434387489574574776759796n // Adding n converts a number to BinInt
const Id = Symbol('123') // typeOf Symbol -> Symbol
const anotherId = Symbol('123')
console.log(Id == anotherId) //false
console.log(Id === anotherId) // false
//Becasue Symbol keyword make it a unique datatype, even if the values are same, they are not same

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

const language = new String('Jacascript')

console.log(name[0])
console.log(language[0])

console.log(name.__proto__)
console.log(language.__proto__)
// const name = 'Fahad' -> this syntax is also converted into object syntax behind the scenes

console.log(language.charAt(7))
console.log(language.indexOf('p'))

console.log(language.replace('a', 'p'))