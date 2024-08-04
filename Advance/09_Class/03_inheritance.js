class User{
    constructor(username){
        this.username = username
    }
    // Called methods, not function
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) 
        this.email = email
        this.password = password

    }

    addCourse(){
        console.log(`A new course was injected by ${this.username}`)
    }
}

const chai = new Teacher('chai', 'chai@teacher', 12345)
chai.addCourse()

console.log(chai instanceof Teacher)
console.log(chai instanceof User) // chain of instances
console.log(Teacher instanceof User)