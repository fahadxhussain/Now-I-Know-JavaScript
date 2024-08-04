function setUsername(username){
    this.username = username
    // Or you can say some complex DB operations
}
 function createUser(username, email, password){

    // setUsername(username) // As soon as this method is executed, its removed from call stack and hence all its variables as well. Thats why we use .call and pass 'this' along with other arguments to hold its reference. Hence, instead of using its own 'this', it uses 'this' of function from where it is called

    // When a method is called by an object, 'this' refers to that objet but when its called without any context the "this" refers to tht function. So, this.anyvarible create a variable that is local in the function and gets dissmissed once the function is removed from the call stack (means when the function is completed). So, in order to give context to the function being called, we passed 'this' along with the variable.

    setUsername.call(this, username) // So, we should call it explicitly
    this.email = email
    this.password = password
 }

const user = new createUser('Fahad', 'fahad@google', 'chaiAurCode')
console.log(user) // Name not printed if .call is not used 