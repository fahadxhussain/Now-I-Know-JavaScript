function addTwoNumbers (num1, num2){
    if(typeof num1 == "number" && typeof num2 == "number") // the 'typeof' operator returns string
        {
    return num1 + num2
    }
    else{
        return("Please Provide Valid Inputs")
    }
    // If we do not return anything and store the function in a variable, the variable will be undefined.
}

const result = addTwoNumbers(99, 99)
console.log(result)



function userLoginMessage(username){  //(username = 'John') => Default Value
    if(!username) // => if(username == undefined) so not username means undefined -> username not given
    {
        console.log('Please enter username')
        return
    }

    return `${username} just logged in`
}

console.log(userLoginMessage ('Fahad'))


// Sometimes we do not know the number of arguments to be passed
function calculateCartPrice(...num1){  //(...num1) Rest Operator -> ... -> Returns an array if multiple arguments are passed
    return num1
}
 console.log(calculateCartPrice(400, 500, 1000)) // returns an array
 // For error handling in this function check 16th file


 // Functions with objects
const user = {
    name: 'Fahad',
    age: 21,
    town: 'Pindi mai Rawalpindi'
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and Town is ${anyObject.town}`)
}

handleObject(user)
//or
handleObject({
    name: 'John',
    town: 'Voilence'
})


// ********************** SCOPES ************************

// Curly braces are scope -> if, else and functions

let a = 80
const b = 60
var c = 90

if(true){
    let a = 10
    const b = 20
    var c = 30
}

console.log(a)
console.log(b)
console.log(c) // var is always global -> problem with local scope

// Global Scope is differnet in DOM and Node.js

// Smaller can take data from bigger
function one(){
    const username = 'Fahad'

    function two(){
        const website = 'Youtube'
        console.log(username)
    }

    // console.log(website)
    two()
}

one()

// *********************** INTERSTING ********************

// This concept is called hoisting in JS
// Variables declared with var will give undefined while let and const give reference errors - applied to functions

console.log('AddOne function called before declaration:', addOne(9))
function addOne(num){
    return num + 1
}

addOne(9)


// JS Variables are very powerful. They can hold anything BUT BUT
// We cannot call the variable holding a function before its declaration while we can call the function before declaration
// console.log(addTwo(9)) -> Error

// Becasue "function someFunction(){}" is stored in different call stack
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(9))



//************************* THIS  *************************

// "this" refers to the current context
// The 'this' keyword in JavaScript refers to the context in which a function is called.

const user2 = {
    name: 'Fahad',
    age: 21,
    welcomeMessage: function(){
        console.log(`Welcome to the page ${this.name}`) // 'this' refers to the current context
        console.log(this) // pointing to object
    }
}

user2.welcomeMessage()
user2.name = 'SomeOne Else'
user2.welcomeMessage()

console.log(this) // empty object in node -> Global Context
// In browser the Current Global Context will Show 'Window'


// this keyword does not work in functions
let abc;
function chai(){
    // console.log(this) // pointing to function chai -> returns a lot of values .. will return empty object in arrow function
    let username = 'Fahad'
    if(true){
        console.log('\n\n')
        console.log(this.username) // Undefined beause this.username is created but there is no value of it. this.usename is not pointing to  " let username = 'Fahad' " as it can be directly accessed as "username". It all depends on the context, more on this in the 8th part of Advance JS.
    }
    console.log(this.username) // Undefined 
    // SO, there are quite a lot of complications in using 'this' keyword. Explicitly used with objects
    abc = 'String'
    console.log(abc)
}

chai() 
console.log(abc)

// ****************** ARROW FUNCTION ***************
// Use 'this' of the sorrounding environment plus can return implicitly

const add = (num1, num2) => {
    return num1 + num2
}
console.log(add(3, 10))

// Implicit Return -> No use of curly braces, No use of 'return' keyword
 const implicitReturn = (num1, num2) => num1 + num2
 console.log(implicitReturn(10, 9))

 // To return an object from a function, it should be wrapped in parenthesis
 const objectReturn = () => ({name: 'Fahad', age: 21})
console.log(objectReturn())


//  Arrow function do not bind 'this' for example
console.log('\n\n Arrow Function with this keyword')
const obj = {
  name: "Alice",
  greet: () => {
    console.log(this.name);
  }
};
obj.greet(); // undefined

//  *************** SIMPLEST EXPLANATION ***************
/* Imagine you’re in a room (your object), and you hire someone (a function) to say your name.

    A regular function asks: “Who hired me?” — and uses that person’s name.

    An arrow function says: “I don’t care who hired me — I’ll just use the name from the hallway outside the room.”
    In node JS this hallway is empty so it returns undefined, while in browser it returns the window object which is the global scope

*/


 //**************** IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) **************

 // used in various situations for instance when we want a function to execute
 // automatically as the program runs for example database connection
 // To avoid pollution from Global Scope
;
(function () {
    console.log("DB Connected")
})();

// Semi-colon is necessary in IIFE becasue it sometimes forgets to stop lol


// Passing an argument to immediately invoked function
;
((name) => {
    console.log(`Name is ${name}`)
})('Fahad');