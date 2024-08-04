// Everything in JS is a Object

//Singleton
//Object.create -> termed as constructor method -> Singleton formed in this method


const mySymbol = Symbol('Something')
console.log(typeof (mySymbol))

// Object literals
const user = {
    name: 'Fahad',
    'full name': 'Fahad Hussain', // Cannot be accessed with dot notation
    [mySymbol]: 'NotSomething',// To point to the upper Symbol, we write it in square brackets To actually refer it as symbol and not a string
    age: 21,
    town: 'Pindi mai Rawalpindi',
    isLoggedIn: true
}

// Function inside an Object
user.greetings = function(){
    console.log(`Hello! Greetings to ${this['full name']}`) // or user.name
}
user.greetings()

// Dot notation
console.log(user.name)

// Square Notation
console.log(user['name'])
console.log(user["full name"])
console.log(user[mySymbol])
console.log(typeof (user[mySymbol]))

Object.freeze(user)
user.town = "Islamabad" // Wont change anything
console.log(user.town)
console.log(user)

// ************* PART 2 *************

const fbUser =  {
    email: 'fhk@gmail.com',
    fullName: {
        firstName: 'Fahad',
        lastName: 'Hussain'
    },
    town: 'Pindi mai Rawalpindi'
}

const obj1 = { 1:'a', 2:'b' }
const obj2 = { 3:'c', 4:'d' }

const obj3 = { obj1, obj2}
console.log(obj3)

const obj4 = Object.assign(obj1, obj2)
console.log(obj4)

const obj5 = Object.assign({}, obj1, obj2) // {} -> target
console.log(obj5)

// Spreading of Object
const obj6 = { ...obj1, ...obj2 }
console.log(obj6)

//Usually we recieve an array of objects from database

const data = [
    {
        id: 923,
        name: 'Fahad'
    },
    {
        id: 123,
        name: 'Naeem'
    },
    {
        id: 998,
        name: 'Ihtisham'
    }
]
console.log("\n********** USER *************\n")
console.log(user)

console.log("\n Array of Keys")
console.log(Object.keys(user)) // returns an array which can be iterated upon
// But I wonder why the symbol is ignored

console.log("\n Array of Values")
console.log(Object.values(user)) 

console.log(Object.entries(user)) // multiple key-value pair arrays

console.log(user.hasOwnProperty('full name'))


//*************** PART 03 *******************
// De-Structuring of object / Arrays -> Used in React

const course = {
    courseName: 'JavaScript',
    coursePrice: 1000,
    courseInstructor: 'Chai Aur Code'
}


// Extracting values from Object so that we dont have to use dot notation everytime -> this is basically Destructuring of Objects
const {courseInstructor} = course
console.log(courseInstructor)

const {courseInstructor: instructor} = course
console.log(instructor)

//JSON // Data from APIs is recieved in the following JSON format
// The keys are also quoted becasue its not a pure Object, gives error when written without quotes

// {
//     "name" : "Fahad Hussain",
//     "semester": 4,
//     "course": "SE"
// }

//Array format also called as JSON
// [
//     {},
//     {},
//     {}
// ]

// JSON Formatters are used to format data recieved from APIs