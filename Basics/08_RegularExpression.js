// ******************** REGULAR EXPRESSION ***********************

// No UNNECESSARY SPACES

// Looking for text matching and pattern matching
// used for validation

// There ar etwo ways to create regular expressions 
// 1. Regex literal
const regex1 = /abc/;

// 2. Regex constructor (requires double escaping for special characters)
const regex2 = new RegExp("abc");


const emailValidator = new RegExp('^.+@.+\\..+$')

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

// TEST and EXEC are two methods to test the regular expression
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

//     "* allows a match even if nothing is found. It starts from the beginning, and returns as soon as it can find zero or more matches — even empty ones. if * finds any matching values at the start, it returns the longest stretch."

//     "+ requires at least one match. It skips unmatched characters until it finds one or more matching characters, then returns the longest stretch.

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


// ? -> Zero or one time

// Comparing a range of characters
console.log('Comparing Ranges')
console.log(/[a-z ]{2,6}/.exec(string1))


//  ********* COMSATS EMAIL VALIDATOR
const comsats = new RegExp('^.+\-.+\-.+@isbstudent\.comsats\.edu\.pk$')
// Using double slash instead of single is best practice like this
// const comsats = new RegExp('^.+\\-.+\\-.+@isbstudent\\.comsats\\.edu\\.pk$');
// or you can avoid double slashes by using regex literals like this
// const comsats = /^.+\-.+\-.+@isbstudent\.comsats\.edu\.pk$/;


const myEmail = 'SP23-BSE-011@ISBSTUDENT.COMSATS.EDU.PK'
console.log(comsats.test(myEmail.toLowerCase()))

const yourEmail = 'Sp23-BSE-011_ISBSTUDENT.COMSATS.EDU.PK'
const email3 = 'Sp23-BSE-011@ISBSTUDENT.COMSATS.EDU.P'

console.log(comsats.test(yourEmail.toLowerCase()))
console.log(comsats.test(email3.toLowerCase()))




// ***************** FLAGS *************