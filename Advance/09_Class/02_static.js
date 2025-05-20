class User{
    constructor(username){
        this.username = username
        this.id = User.createID() // You call a static method directly on the class
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }

    // A static method is a method that belongs to the class itself, rather than to instances of the class. Static methods are called on the class, not on an instance of the class. They are often used for utility functions or functionality that doesn’t depend on instance-specific data.

    static createID(){
        return `ID1234`
    }
}

const user1 = new User ('fahad')
console.log(user1)
// Error because You call a static method directly on the class, not on an instance of the class.
// console.log(user1.createID())