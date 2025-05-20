// "use strict";
// treats all code as newer version

// Javascript is dynamically typed language while typescript is statically typed

console.log("Fahad Hussain");

const userId = 12345
// No Change
let userName = "Fahad"
// Can be reAssigned Only
var password = "fhk123"
// Can be reDeclared as well as reAssigned
city = "Islamabad"
// Variable can be assigned without any keyword, implicity assigned as global variable(var)
// But not in newer (strict) version => throws Reference error: city is not defined

// Function Scope: Variable declared inside a function
// Block Scope: Variable declared inside a block such as 'if' statement

console.table([userId, userName, password, city])

//  alert ( "heads up")  // can be only used in browser

let state = null;
// typeof null = object

let something;
// typeof undefined = undefined
