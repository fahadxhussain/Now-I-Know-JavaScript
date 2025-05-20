// There are 3 most common types of errors -> MDN Documents

// 1. Refrence Error
// When a non existent variable is refrenced
// For example

// console.log(string1)

// 2. Syntax Error


// 3. Type Error
// When an operation can not be performed or performed incorrectly because
// the value is not of the expected type

// It can be calling a method on a wrong datatype
// for example calling .toUpperCase on a number



// ********************** ERROR HANDLING *******************
// To prevent the program from crashing incase of any error

try{
    var num = 20
    num.toUpperCase()
} catch (err) {
    console.log('Abhy pagal hai tu?')
}

try{
    var num = 20
    num.toUpperCase()
} catch (err) {
    console.log(err instanceof TypeError)
    console.log(err.message)
}