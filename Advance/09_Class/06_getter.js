class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value.toUpperCase()
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


// OLD CODE

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

// More Old Code

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