const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter)

console.log(Math.PI)
Math.PI = 6
console.log(Math.PI)

const newObject = Object.create(null);

const chai = {
    name: 'gingerTea',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log('Code fat gaya')
    }
}

console.log(chai)

console.log(Object.getOwnPropertyDescriptor(chai, 'name')) // (Object, 'Property')

console.log('\n Properties \n')
for (const key in chai) {
    if(typeof chai[key] !== "function"){
        console.log(`${key}: ${chai[key]}`)
    }
}

console.log('\n\n')
//or
 for (let [key, value] of Object.entries(chai)) { // "if" statement not used
    console.log(`${key}: ${value}`)
 }


// Changing properties
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name')) 
// We make the enumerable false, so loop will not be applicable now


console.log('\n Properties \n')
for (const key in chai) {
    if(typeof chai[key] !== "function"){
        console.log(`${key}: ${chai[key]}`)
    }
} // Loop not applied on Name.. Only price and isAvailable are printed
