const user = {
    username: 'Fahad',
    password: 'ChalBayJahil',
    login: true,

    print: function(){
        console.log(this)
        console.log(this.username)
    },

}

console.log(this)  // -> empty Global Context in Node while Window object in browser
// console.log(print()) -> will execute the method but will print undefined in the console because the method does not return anything to console.log
user.print()
console.log(user.password)
console.log(user.login)

// Constructor function
function User (username, password, login){
    this.username = username // this refers to the instance of object being created
    this.password = password
    this.login = login

    this.greetings = function(){
      console.log(`Hey this is ${this.username}`)
    }
    // Alternative -> User.ptototype.greetings = function()  -> saves memory

    // This will not work -> local function, not attached to the object thus can't be accessed by user
    // function greetings(){
    //   console.log(`Hey this is ${this.username}`)
    // }

    // return this; -> Object created is Implicitly returned  
}

// The new keyword is used to create multiple instances / contexts
// First it creates an empty object, then Constructor function is called, all variable with 'this' keyword present in constructor function are injected in the empty object, and then returned
const user1 = new User('Fahad', 'Chalbayjahil', false)
const user2 = new User('Hussain', 'PindiMaiRawalpindi', false)

console.log(user1)
console.log(user2)
user2.greetings()

// Before Classes were introduced in JavaScript, Constructor Functions were used to create new instances of objects
// Class is Just a syntactic sugar on prototype based inheritance
// Methods were added to the prototype to ensure they are shared across instances "Person.prototype.greet() , User.prototype.greet()" while methods defined within the class body are automatically added to the class prototype. So, classes are just syntactic sugar and do not provide any significant extra properties

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }

const person1 = new Person('Fahad', 21)
person1.greet()

// The function or class from which the object has been created
console.log(user1.constructor)
console.log(person1.constructor)
