// *************** FOR loop *****************

// for => used when number of iteration are known or we have some value for iteration
// has its own Scope
console.log('\n')

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element) 
}

// Why do we use different variables for index in nested loop?
// No out of bound exception in JS. Its returns undefined

// Break And Continue
// Break : Eliminates the loop
// Continue: Eliminates the current Iteration and move to the next Iteration

for (let i = 0; i < 10; i++) {
    if(i == 5)
        continue;

    if(i == 7)
        break;
    console.log(`Value of i is: ${i}`)   
}

// ******************** WHILE *************************
let condition = true
let count = 0

while(condition){
    console.log('Will be executed as long as the condition is true')
    count++
    if(count == 5)
        {
            condition = false
        }
}

//********************** DO WHILE ***********************
console.log('\n')
let score = 11
do{
    console.log(`The score is:  ${score}`)
    score = score + 2
} while(score <=10)



console.log('************* LOOPS ON ARRAYS ***************')

console.log('\n\n LOOPS ON ARRAYS \n\n')
// Most common because most of the data is retrieved in the form of arrays
// FOR OF loop

const myArray = [1, 2, 3, 4, 5]

for (const num of myArray) {
    console.log(num)
}
// Can be used for strings aswell 

const hello = "HELLO WORLD"
for (const character of hello) {
    console.log(character)
}

// MAPS -> a special object that keeps key value pair in the origional insertion order
// No duplicate value
// Maps are iteratable but 'for in' loop cant be used over them because for in
// iterates over the keys only.

const map = new Map()
map.set('PAK', 'Pakistan')
map.set('UK', 'United Kingdom')
map.set('SA', 'Saudi Arabia')
map.set('PAK', 'Pakistan')
// console.log(map)

// Key Value pair as array with each iteration
for (const key of map) {
    console.log(key)
}

// Simple Destructuring of arrays
// For Example:
console.log('********** Destructuring of Arrays ***********') 
const numaArray = [1, 2, 3, 10]
   const [one, second] = numaArray
   console.log(one, second)

   const [, , ,ten] = numaArray
   console.log(ten)

// To get values without array, we Destructure the array
// With each iteration it takes a key, value array from map and destructure it
for (const [key, value] of map) {
    console.log(key, ': ', value)
}

// OBJECTS
// for of does not work on Objects directly
// Using FOR IN loop
const myObject = {
    game1 : 'Need for speed',
    game2 : 'IGI 2'
}


// Printing keys
for (const key in myObject) {
    console.log(key)
}

// Printing Values
for (const key in myObject) {
    console.log(myObject[key])
}

// Printing Both
for (const key in myObject) {
    console.log(`${key} : ${myObject[key]}`)
}


// Using FOR IN loop on Array
const heroes = ['Batman', 'Superman', 'Thor', 'Ironman', 'CaptainAmerica', 'WonderWoman']
// Printing  keys : Indexes
for (const key in heroes) {
    console.log(key)
}

// Printing Values
for (const key in heroes) {
    console.log(heroes[key])
}


console.log("*************** FOR OF LOOP ON OBJECTS *****************")
// for of loop can not be used on objects directly

console.log('\n\n for of is used on iteratable things only \n')

const obj = { a: 1, b: 2, c: 3 };

for (const key of Object.keys(obj)) {
  console.log(`${key}: ${obj[key]}`);
}

console.log('\n\n\n ', Object.keys(obj))
// Basically I made an array of keys of the object with the Object.keys(obj) method

// https://chatgpt.com/share/67cc97c9-7924-8004-97dc-2820316cf323



console.log('************** FOR EACH ******************')
// For each does not returns anything into a variable whether you return it or not
// For each does not change the origional array

console.log('\n\n')

heroes.forEach( function (arbitraryNameForEachElementOfArray) {
    // any Operation in the body of this callback function
    // Performed on each element of the array 
} )

heroes.forEach( (arbitraryNameForEachElementOfArray) => {
    // Arrow function as callback function
    // This is how we use callback functions and 
    // This is how callbacks are different from calling other functions
    // within a function -> callbacks are passed as parameters
})

function printMe(item){
    console.log(item)
}

// Printing each value
heroes.forEach(printMe) // printMe as callback function | Do not execute here

// forEach has access to currentItem, Index and also the overall array
heroes.forEach( (item, index, arr) => {
    // console.log(item, index, arr)
})

console.log('************ OBJECTS inside Arrays ****************')
console.log("\n\n")
const languages = [
    {
        name : 'JavaScript',
        shortcut : 'js'
    },
    {
        name : 'Java',
        shortcut : 'java'
    },
    {
        name : 'python',
        shortcut : 'py'
    }
]

languages.forEach( (eachObject) => {
    console.log(eachObject.name)
} )

const values = heroes.forEach( (item) => {
    // console.log(item)
} )
// console.log(values) // undefined because foreach does not return anything even if you write return
console.log('\n\n')

console.log('************* FILTER, MAP AND REDUCE ***************')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Filter function can return values -> usually an array
const newNumbers = numbers.filter( (num) => num>4 )
console.log(newNumbers)

const otherNumbers = numbers.filter( (num) => {
    return num > 4  // we should explicitly return in this format
} )

console.log(otherNumbers)

console.log('\n\n')

console.log('************ MINI BOOK SEARCH *************')

const books = [
    {
        bookname : 'Book One',
        published : 1995,
        genre : 'Fiction'
    },
    {
        bookname : 'Book Two',
        published : 1998,
        genre : 'History'
    },
    {
        bookname : 'Book Three',
        published : 2001,
        genre : 'Fiction'
    },
    {
        bookname : 'Book Four',
        published : 2005,
        genre : 'History'
    }
];

// Data is filtered in the same way when retrieved from database
let searchedBooks = books.filter( (book) => book.genre === 'Fiction' )
console.log(searchedBooks)

searchedBooks = books.filter( (book) => book.published >=1998 && book.genre == 'History' )
console.log(searchedBooks)

searchedBooks = books.filter( (book) => {
    return book.published >=1998 && book.genre == 'Fiction'
} )
console.log(searchedBooks)

console.log('************ MAP FUNCTION *************')
// Almost same as 'for each' method but it can return values
const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const mappedArray =  newArray.map( (num) => num * 10 )
console.log(mappedArray)


console.log('************** CHAINING *****************')

// Combining multiple methods
const chainedArray = newArray
                    .map( (num) => num * 10 ) // num = element of array
                    .map(  (num) => num +1 )  // num = element of array operated by the first map function
                    .filter( (num) => num >=40 ) // value from last function will be returned ultimately
console.log(chainedArray)


console.log('*********** REDUCE FUNCTION ************')
let initialValue = 0
const reduced = newArray.reduce( (accumulator, valueFromArray) => accumulator + valueFromArray, initialValue );
console.log(reduced)

// initialValue does not change, accumulator does
// but first time accumulator takes its value from initial value


const shoppingCart = [
    {
        course : 'Programming',
        price: 1000
    },
    {
        course : 'Web-Development',
        price: 1500
    },
    {
        course : 'DataBase',
        price: 999
    }
]

const total = shoppingCart.reduce( (accumulator, valueFromArray) => {
    return accumulator + valueFromArray.price} , 0 )
    
console.log(total)

console.log('\n') 