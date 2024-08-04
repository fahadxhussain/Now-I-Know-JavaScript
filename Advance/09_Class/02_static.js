class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }

    static createID(){
        return `ID1234`
    }
}

const user1 = new User ('fahad')
console.log(user1.createID())