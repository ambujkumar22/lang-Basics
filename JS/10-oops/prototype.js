let myName = "Ambuj     "

console.log(myName)

let myHeroes = ['thor','spiderman']
let heroPower = {
    thor: "Hammer",
    spiderman: "Sling",
    getSpiderPwer: function(){
        console.log(`Sipdy power is ${this.spiderman}`);
    }
}
Object.prototype.ambuj = function(){
    console.log(`Ambuj is present in all objects.`);
}

Array.prototype.heyAmbuj = function(){
    console.log(`Ambuj says hello`);
}

// heroPower.heyAmbuj()
// myHeroes.heyAmbuj()
// myName.heyAmbuj()

// INHERITANCE
const User = {
    username: "Ambuj",
    email: "ambuj@gmail.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: true
}
const TASupport = {
    makeAssignement: "JS Assignments",
    fullytime: true,
    __ptoto__: TeachingSupport
}

Teacher.__proto__ = User

// MODERN SYNTAX
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Superman    "
String.prototype.trueLength = function(){
    // console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
// anotherUsername.trueLength()
" Ambuj Kumar   ".trueLength()