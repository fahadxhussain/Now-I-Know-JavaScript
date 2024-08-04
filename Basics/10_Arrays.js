// JavaScript arrays are resizable and can contain differnt datatypes
// Arraya copy operations create shallow copies
const myArray = [0, 1, 2, 3, 4, 5]
const copyArray = myArray // Shallow copy -> Same reference
copyArray.push(6)
console.log(myArray)

const anotherArray = new Array(1,2,3,4)
console.log(anotherArray)

myArray.unshift(87) // shifts all values  -> mostly avoided
console.log(myArray)
myArray.shift() // Shift and pop are kind of opposite functions. Shift removes element from start while pop do it from end.
console.log(myArray)

console.log(myArray.includes(99))
console.log(myArray.indexOf(99))
console.log(`Array.join:  ${myArray.join()}`) // Returns elements of array joined in a String

// slice and splice
console.log("\nOrigional Array: \n" , myArray)

// slice copy the elements from the origional array
// [startIndex, endIndex)
const newArray = myArray.slice(1,3)
console.log(newArray)
console.log("Origional Array after Slice: \n", myArray ,"\n")

// splice takes the values from the origional array -> remove from origional
// [startIndex, endIndex]
const newArray2 = myArray.splice(1,3)
console.log(newArray2)
console.log("Origional Array after: \n", myArray) 
console.log("\n\n ")

// ******************** PART 2 ***************************

const marvelHeroes = ['Spiderman', 'IronMan', 'CaptainAmerica', 'BlackWidow']
const DCHeroes = ['Batman', 'Superman', 'WonderWoman', 'Flash']

// marvelHeroes.push(DCHeroes) // array inside an array -> problem
// console.log(marvelHeroes)

marvelHeroes.concat(DCHeroes) // Instead of '.push' we use '.concat' to avoid array inside an array
console.log(marvelHeroes)
console.log(marvelHeroes.concat(DCHeroes))

//OR

const concatenatedArray = marvelHeroes.concat(DCHeroes).concat(marvelHeroes)
console.log(concatenatedArray)

// Spreading -> easy + can join more thn two arrays at once
const allHeroes = [...marvelHeroes, ...DCHeroes]
console.log("All Heroes After Spreading \n", allHeroes)

// Flating an Array 
// returns a new array with all sub-array elements concatenated
// recursively upto specified depth
const mixedArray = [1, 1, 1, [2, 2, 2, [3, 3, 3]]] // array within array within array
const trueArray = mixedArray.flat(Infinity /* depth */ ) 
console.log(trueArray)

console.log(mixedArray.flat(1)) // flat upto level 1 -> means first array inside the main array is spread

// Converting to array

console.log(Array.isArray("Fahad"))
console.log(Array.from("Fahad")) // converts elements into array
console.log(Array.from("Fahad" + "Hussain")) 

console.log(Array.from({name : 'Fahad'})) // return empty: important -> we should specify key or value
//console.log(Object.keys(user))
//console.log(Object.values(user))

console.log(Array.of("Fahad", "Hussain")) // form array from set of elements