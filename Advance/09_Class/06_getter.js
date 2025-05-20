class User{
    constructor(email, password){
        this.email = email // This now actually calls the setters
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value.toUpperCase() // this.email will call the setter email thats why we use this._email
    }

    get password(){
        const pass = true
        if(pass){
            return `${this._password}xyz`
        }
        else{
            return 'NO PASSWORD'
        }
        
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const chai = new User('chai@google.com', '12345abc')
console.log(chai.password)


// OLD CODE -> Function based syntax

function user(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return _email.toUpperCase()
        },

        set: function(value){
            this._email = value
        }
    })
}

// More Old Code -> Object based syntax

const userr = {
    _email: 'tea@google.com',
    _pasword: '12345',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(userr)
console.log(tea.email)