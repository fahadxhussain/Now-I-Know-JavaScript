class User{
    constructor(username, password, email){
        this.username = username
        this.email = email
        this.password = password

    }

    encryptPassword(){
        return `${this.password}abc`
    }

    upperCase(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User('chai', 123, 'chai@gmail')

console.log(user1.encryptPassword())
console.log(user1.upperCase())


// BEHIND THE SCENES
function user(username, password, email){
    this.username = username
    this.email = email
    this.password = password
}

// Methods are added through prototype
user.prototype.encryptPassword = function(){
    return `${this.password}xyz`
}

const user2 = new user('Tea', 789, 'tea@gmail')
console.log(user2.encryptPassword())


