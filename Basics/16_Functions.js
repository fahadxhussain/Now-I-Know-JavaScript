// Sometimes we do not know the number of arguments to be passed
let sum = 0;
function calculateCartPrice(...num1){  //(...num1) Rest Operator -> ... -> Returns an array if multiple arguments are passed
    if(!num1.every((item) => {
            return typeof item == "number"}/* This will return either true or false to the function. If it returns false, the if statement will become true and will show the message to the user */)) {
        return("Please review your inputs")
    }

    num1.forEach( (item) => {
        sum = sum + item
    })
    return sum
    }

 console.log(calculateCartPrice(400, 500, 1000))

 let a = 30
 if(true){
    let a = 50;
    console.log(a)
 }
 console.log(a)

 const myobj = {
    func: function(){
        return("Function declared inside an object")
    }
}

console.log(myobj.func())

 const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name? ", (name) => {
    console.log(`Hello, ${name}!`);
    rl.close();
});