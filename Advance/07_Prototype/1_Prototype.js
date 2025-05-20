function multiply(num){
    return num * 5;
}

multiply.power = 2;
console.log(multiply(5))
console.log(multiply.power) // Boom! EveryThing in JavaScript is Object
console.log(multiply.prototype) 
// Prototypal Inheritance -> Object Prototype : Null


// Constructor Function
function createUser(username, score) {
    this.username = username
    this.score = score
}

// Lets declare our own functions in the prototype
createUser.prototype.increment = function(){
    this.score++
    // Works for current context
    // Jis ny bhi bulaya hai, us ka score barha do
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`)
}

// IMPORTANCE OF NEW KEYWORD -> Prototypes are added to constructor functions but could not be used without any instance created -> gives undefined
const chai = new createUser('Chai', 25)
const tea = new createUser('tea', 250)

chai.printMe()
chai.increment()
chai.printMe()

tea.printMe()

/*Behind The Scenes of "new" Keyword

A new Object is created: The new keyword initiates the creation of a new JacaScript object -> 'Create Function' is the reference

A prototype is Linked: The newly created Object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on constructor's prototype.

The Constructor is Called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no ecplicit return is specified from the constructor, Javascript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the conctructor function has been called, if it doesn't return a non-primitive value (object, array, function etc.), the newly created object is returned.
*/