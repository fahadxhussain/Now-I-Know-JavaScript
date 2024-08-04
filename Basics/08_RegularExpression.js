// ******************** REGULAR EXPRESSION ***********************

// No UNNECESSARY SPACES

// Looking for text matching and pattern matching
// used for validation

const emailValidator = new RegExp('^.+@.\..+$')

// ^ -> Start
// . -> Something
// @ -> @
// \. -> Literal . dot
// $ end

const email1 = 'invalid@'
const email2 = 'valid@gmail.com'

let check = emailValidator.test(email1)
console.log(check)

check = emailValidator.test(email2)
console.log(check)

// TEST and EXE are two methods to test the regular expression
// test is used to check if something is valid


//  ************** INDETIFIERS ***********************


// Identifiers are characters or phrases you want to match
// What you are actually trying to match
// Case Sensitive

console.log('\n IDENTIFIERS \n')
const regex = new RegExp('g')

const string1 = 'HeLLo there'
const string2 = 'Good Morning'

let checkStr = regex.test(string1)
console.log(checkStr)
checkStr = regex.test(string2)
console.log(checkStr)



// The Slash Method
console.log('\n Slash Method \n')
console.log(/g/.test(string1))
console.log(/g/.test(string2))



// *************** CHARACTER GROUP *****************


// Anything closed in square brackets [ ]
console.log('\n Chracter Group \n')
const alphabetGroup = new RegExp(/[A-Za-z0-9]/) // Space is also matched

// \d -> all numbers => [0-9]
// \s -> any whitespace characters
// \w -> all alphaNumeric

console.log(alphabetGroup.test(string1))
console.log(/(Good|Bad)/.test(string1))
console.log(/(Good|Bad)/.test(string2)) // Dont add fucking unnecessary space


// ****************** QUANTIFIERS *****************

console.log('\n QUANTIFIERS \n')
// We use " exec() " method with quantifiers
// exec( )  Returns an array of matched characters

console.log('\n Using "*" \n')
// * -> Match these characters Zero or more times as long as they are there linearly

console.log(/[0-9]*/.exec(string1))
console.log(/[A-Z]*/.exec(string1))
console.log(/[a-z]*/.exec(string1))
console.log(/[A-Za-z]*/.exec(string1))

// Lets add a spsce as well
console.log(/[A-Za-z ]*/.exec(string1))


console.log('\n Using "+" \n')
// + -> Match these characters one or more times as long as they are there linearly
// returns null
console.log(/[0-9]+/.exec(string1))
console.log(/[A-Z]+/.exec(string1))
console.log(/[a-z]+/.exec(string1))
console.log(/[A-Za-z]+/.exec(string1))


// ? -> Zero or one times

// Comparing a range of characters
console.log(/[a-z ]{2,6}/.exec(string1))


// ***************** FLAGS *************