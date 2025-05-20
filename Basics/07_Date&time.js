let myDate = new Date()
console.log(Date.now())
console.log(myDate.getTime())
console.log(myDate)
console.log(typeof(myDate))


console.log("\n********** CONVERSIONS **********\n")

console.log("To String: " + myDate.toString())
console.log("To DateString: " + myDate.toDateString())
console.log("To ISOString: " + myDate.toISOString())
console.log("To LocaleString: " + myDate.toLocaleString())
console.log("To LocaleDateString: " + myDate.toLocaleDateString())
console.log("To JSON: " + myDate.toJSON())
console.log("\n")

let createdDate = new Date(2024, 0, 19) // Month Starts from zero
console.log(createdDate.toDateString())

let anotherDate = new Date("2024-01-19") // But here its normal
console.log(anotherDate.toLocaleString())

let indianDate = new Date("01-19-2024") // mm-dd-yyyy
console.log(indianDate.toLocaleString())


console.log("\n ****** TIME ******\n")
 
let myTimeStamp = Date.now() // Milliseconds from 1970
console.log(myTimeStamp)
console.log(createdDate.getTime()) // Time elapsed in Millisecond from 1970 to that date
console.log("To Seconds: " , Math.floor((createdDate.getTime())/1000))
// Use , comma for printing different datatypes

// To get the time elapsed from that date to current
let currentDate = new Date();
let timeElapsedToCurrent = currentDate.getTime() - createdDate.getTime();
console.log(timeElapsedToCurrent);

//Get Month
console.log("Month: " ,createdDate.getMonth() + 1 ) // +1 because month starts from 0

let newDate = new Date()
newDate = newDate.toLocaleString('default', {
    weekday: "long",
    era: "short",
    day: "2-digit"
})

console.log(newDate)

console.log("\n")