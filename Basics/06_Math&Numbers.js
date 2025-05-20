const score = new Number(200)
// As an Object -> To use built-in methods of Number class
console.log(score)

console.log(score.toFixed(4))

const balance = 129.9786
console.log(balance.toPrecision(5))
console.log(balance.toPrecision(4))
console.log(balance.toPrecision(3))
console.log(balance.toPrecision(2))


const money = 20000000
console.log(money.toString())
console.log(money.toLocaleString())
console.log(money.toLocaleString('en-IN'))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)


console.table([Math.abs(-9), Math.round(4.6), Math.round(5.5), Math.ceil(8.1), Math.floor(6.8)])
console.log(Math.floor(8.98766554354))

Math.min(3, 5, 9)
Math.max(7, 2)



let randomNum = Math.random()
console.log(randomNum)
console.log(randomNum *= 10) // -> randomNum = randomNum * 10;

console.log(randomNum += 1)
console.log(Math.floor(randomNum))


console.log("***********************************")
const min = 10
const max = 20
const random = Math.random()
console.log(random)
console.log(random * (max-min))
console.log(Math.floor(random * (max - min +1)) + min)
// +1 is because Math.random gives values [0 , 1) 
//  1 is not included in Math.random()
// Hence, to include the Upper Limit (max NUmber) we add 1 to the equation
// The question is, What if we add it at the end like this (Math.floor(random * (max - min )+1) -> It will give a result of[min+1, max+1]
console.log(random * (max - min))
console.log(Math.floor(random * (max - min)) + min)