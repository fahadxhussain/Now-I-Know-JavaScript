// Control flow is controlling the flow of program by putting some conditions
// Basically if(){} else{} and switch(){}
// They have their own Scope

// If you write a lot of if else, your code is not good enough :(

console.log('\n')

if(true){
    console.log('Block will be executed')
}

if(false){
    console.log('Block will not be executed')
}



// Consider the key (key) as key and the case blocks as locks... lol
// Any lock opened with the key, its code will be executed
const a = 10
switch (a){
    case a<10:
        console.log('1')
    case a==10:
      console.log('10')
}

const month = 3

switch(month){
    case 1:
        console.log("Jan")
        break; 

    case 2:
        console.log("Feb")
        break;

    case 3:
        console.log("March") // once a case is matched, none of the cases below it are compared - all are executed if no break statement is used
        
    case 4:
        console.log("April")

    default:
        console.log("I dont know")
    
}

const day = "sat"
switch(day){
    case "fri":
        console.log("Friday")
        break;

    case "sat":
        console.log("Saturday")
        break;

    case "sun":
        console.log("Sunday")
        break;

    default:
        console.log("Monday")

}

// Implicit scope
const balance = 1000
if(balance > 500)
    console.log("Balance")
// Single line after if statement acts as implicit scope

// ********************* TRUTHY and FALSY *************************

// FALSY VALUES
// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// TRUTHY VALUES
// "0", 'false', " " -> anything as a string(except empty string) is truthy
// [] -> empty array, {} -> empty object, function(){} -> empty function

const userEmail = "fhk@gmail.com" // Not undefined -> truthy
let userCreditCard = "" // empty String -> falsy
// undefined -> falsy
// empty Array -> truthy


if(userEmail){
    console.log("User email is Present")
}

if(userCreditCard){
    console.log('User credit card is Present')
}

const array = []
if(array.length === 0)
    {
        console.log('Array is empty')
    }

const emptyObj = {}
// Object.keys(object) returns array of keys
if(Object.keys(emptyObj).length === 0){
    console.log('Object is empty')
}


// *************** NULLISH COALESCING OPERATOR *****************
// (??) -> based on null and udefined

// Used for safety when taking data from databse or to avoid errors
let val1
val1 = 5 ?? 10
console.log(val1)
val1 = null ?? 10 // 10 is simple here but usually there are complex functions
console.log(val1)

val1 = undefined ?? 15
console.log(val1)


// ***************** TERNARY OPERATOR *******************
// Condition ? truthy : falsy
// no "if"
const number  = 10;

(number>10) ? console.log('Number is greater than 10') : console.log('Number is not greater than 10')


console.log('\n')