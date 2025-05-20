/* A Promise is an  object representing the eventual completion or failure of an asynchronous operation */

/* Let Me Explain: In the first promise we used setTimeout function for asynchronous programming. But it will give us a result only if the function is run properly and executed. Hence we use promise to give us some kind of result in case of successful execution, some other result in case of unsuccessful attempt, and also we can set a default value in the form of finally() */

// Promises are mostly consumed
// For example

// fetch('https://something.com').then().catch().finally()
// .then -> When response is recieved
// .catch() -> incase of error
// .finally() -> always run

// HOW TO MAKE PROMISES

const promiseOne = new Promise( function(resolve, reject){
    // Do an Async Task for example
    // DB Calls, Cryptography, Network Calls, GeoLocation, File reading and writing, Event Listeners
    // SetTimeout

    setTimeout(function(){
        console.log('Async Task is Complete')
        resolve() // Connects "resolve" with ".then" | If 'resolve()' is not written, 'then()' will not be executed -> promise consumed
    }, 1000)

} )
// Relation with "resolve"
promiseOne.then(function(){
    console.log('Promise Consumed');
})


// Directly using ".then()" and "Resolve" without saving promise in a variable
new Promise( function(resolve, reject){
    setTimeout(function(){
        console.log('Another Async Task Completed')
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 Resolved, Promise Consumed")
})


// Passing data to ".then()" through "resolve()"
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:'fahadxhussain', email:'fahadxhussain@gmail'}) // Data passed to ".then()" mostly in the form of objects or Strings.

    }, 1000)
})

promiseThree.then(function(userData){
    console.log(userData)
    console.log(`Taking values from Object: ${userData.username} ${userData.email}`)
} )


// Promise with ERROR or Rejected Promise | Error -> only when the request could not be sent -> HTTP errors are included in the resolve block
// If any  response even Error 404 is recieved, it is not an error
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true

        if(!error){
            resolve({username:"Fahadxhussain", password:'12345'})
        } else{
            reject('ERROR: Chal Bay Jahil')
        }

    }, 2000)
})

promiseFour
.then(function(userData){
    console.log(userData)
})
.catch(function(message){
    console.log(message)
})


// Chaining
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false

        if(!error){
            resolve({username:"Fahadxhussain", password:'12345'})
        } else{
            reject('ERROR: Chal Bay Jahil')
        }

    }, 2000)
})

promiseFive
.then(function(userData){
    console.log(userData)
    return userData.username; // returned to the next ".then()" method -> Chaining
})
.then((username)=>{
    console.log(username)
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log('Han Bhai Hogaya Jo Hona Tha. I mean Promise is either Resolved or Rejected')
})


// Using Async Await instead of .then()
const promiseSix =  new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true

        if(!error){
            resolve({username:"bachpanKaPyar", password:"janemerijaneman"})
        } else{
            reject('ERROR: Bachpan Ka Pyar went WRONG')
        }

    }, 2000)
})  

// await pauses the entire async function until the promise is resolved or rejected. await will wait as long as needed (unless there's a timeout or rejection).
// Pauses the execution of async code until the promise is resolved. await stops the function at that line and waits for the promise to finish.
// A bit issue with catching of error but sometimes this method is required: For example dataBase connectivity
// Writing try/catch inside async await
async function consumePromiseSix () {
    try{
        const response = await promiseSix 
        console.log(response)
    }
    catch(err){
        console.log(err)
    }  
}
consumePromiseSix()

//The then keyword is used with Promises and allows you to specify what should happen after a Promise is fulfilled. On the other hand, the await keyword can only be used within an asynchronous function and suspends the execution of the function until the specified Promise is resolved.
// Key Point : Await suspends the execution of entire function until resolved
// For concurrent operations, we dont use async await -> When running multiple tasks at the same time, don’t await them one by one — use Promise.all() instead.


async function getAllUsers(){
    try{
        console.log("\n\n\n\n Fetched Before Await \n\n\n")
        const response = await fetch('https://jsonplaceholder.typicode.com/users') //  fetch Returns a Promise -> fetch is used instead of XML request for network requests
        const data = await response.json() // Becasue converting it also takes time IMPORTANT 
        console.log("\n\n\n\n Fetched Through Await \n\n\n")
        console.log(data)
    }
    catch(error){
        console.log("E: ", error) 
    }
}

// fetch() returns a promise. fetch() is specifically used for network calls while promises are custom -> You can create your own promise

getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response)=>{
    console.log("\n\n\n FETCH ALL USERS")
    return response.json()
} )
.then( (data) => {
    console.log(data)
} )
.catch( (err) => {
    console.log(err)
} )

// A ton of details of fetch are there in the Documentation, in which programmer have full control of things. const response = fetch('link', {objects})
// MDN webDocs


// Explaining the order
// The awaits method stops execution until the await is completed but it stops the execution only inside the current block thats why FETCH ALL USERS is printed first