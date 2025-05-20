let myName = 'Fahad'
console.log(myName.length)

myName = 'Fahad        '
let secondName = '     Chai     '
console.log(myName.length)

// What if I wanna have a method of true length which returns length without spaces

// Functions, arrays and Strings all passes through Object until finds a null value

let myHeros = ['thor', 'ironman']

let heroPower = {
    thor: 'thunder',
    ironman: 'powerSuit',

    getThorPower: function(){
        console.log(`Thor Power is ${this.thor}`)
    }
}

Array.prototype.heyFahad = function(){
    console.log('Array Prototype Added')
}

myHeros.heyFahad()
// As Arrays, Functions, Strings all passes through Object Prototype not vice versa therefore, Arrays, Functions and String can have Object Prorotype but Objet cannot have ptototype of them. Hence the below statement will give error.
// heroPower.heyFahad()


Object.prototype.fahad = function(){
    console.log(`"Fahad" is present in all objects`)
}

// Adding prototype to Object will be accessible to Arrays, Functions and Strings
heroPower.fahad()
myHeros.fahad()



// INHERITANCE IN JS

const user = {
    name: 'Boss',
    email: 'bossboss'
}

const teacher = {
    makeVideo: true
}
console.log(teacher.name) // No Inheritance Hence Undefined

const teacherSupport = {
    isAvailable: false
}

const TASuport = {
    makeAddignment: 'JS Assignment',
    fullTime: true,
    __proto__:teacherSupport // It recieves properties of 'teacherSupport'
}

console.log('\n\n\n',TASuport.isAvailable)

// Prototypal Inheritance  ** Outdated
teacher.__proto__ = user // teacher recieves properties of user
console.log(teacher.name)
teacher.name = 'TeacherTeacher'
console.log(teacher.name)
console.log(user.name) // Retain its origional name even after changing name of Teacher


// MODERN SYNTAX
console.log('\n\n\n\n')
console.log(teacherSupport.makeVideo) // NO Inheritance
Object.setPrototypeOf(teacherSupport, teacher) // Inheritance Applied -> teacherSupport will get all properties of teacher

console.log(teacherSupport.makeVideo) // Inherits properties as it is
teacherSupport.makeVideo = false
console.log(teacherSupport.makeVideo)



let anotherUsername = 'Chai aur Code           '
String.prototype.trueLength = function(){
    console.log(`${this}`) // Jis Ny call kiya Wohi this hai
    console.log(`True length is ${this.trim().length}`)
}

// Will be accessible to all String Variables because the prototype is added to String

anotherUsername.trueLength()
myName.trueLength()
secondName.trueLength()
'    Some random String          '.trueLength()