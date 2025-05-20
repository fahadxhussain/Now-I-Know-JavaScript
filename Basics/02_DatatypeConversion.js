let num1 = '123'
let num2 = '123abc'
let num3 = null
let num4 = undefined


console.log(typeof (num1))
console.log(typeof (num2))
console.log(typeof (num3))
console.log(typeof (num4))
console.table([num1, num2, num3, num4])

let value1 = Number(num1)
let value2 = Number(num2)
let value3 = Number(num3) 
let value4 = Number(num4)

console.log(typeof (value1))
console.log(typeof (value2))
console.log(typeof (value3)) 
console.log(typeof (value4))

console.log(value1)
console.log(value2) // Not a number
console.log(value3, typeof value3)// Null will become zero 0 
console.log(value4) // undefined is not a number

console.table([value1,value2, value3, value4])

// NaN is for the value which cannot be converted into number


let isLoggedIn = 1
let isLoggedIn2 = "fhk"
let isLoggedIn3 = ""

let loggedIn1 = Boolean(isLoggedIn)
let loggedIn2 = Boolean(isLoggedIn2)
let loggedIn3 = Boolean(isLoggedIn3)

console.table([loggedIn1, loggedIn2, loggedIn3 ])
// 0 => false , 1=> true
// "" => false, "something" =>true

// undefined converted to string will be type string having a value of undefined
let string = String(num4)
console.log(typeof(string))
console.log(string)


// undefined converted to boolean will be type boolean having a value of false
let boolean = Boolean(num4)
console.log(typeof(boolean))
console.log(boolean)

// Null converted to boolean will be type boolean with value of false
boolean = Boolean(num3)
console.log(typeof boolean)
console.log(boolean)


console.log(String(num3))
console.log(typeof(String(num3)))

