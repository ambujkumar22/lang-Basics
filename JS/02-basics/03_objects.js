// objects can be declared as literals and constructors

// singleton => if formed with constructor always forms a singleton

// Object literals

const mySymbol = Symbol('Key1')
const jsUser = {
    name: "Ambuj",
    'Full name': "Ambuj Kumar",
    age: "26",
    email: "ambuj@gmail.com",
    isLoggedin: false,
    lastLogindays: ['monday','friday'],
    [mySymbol]: "myKey1"
}

// console.log(jsUser.email);
// console.log(jsUser['isLoggedin']);
// console.log(jsUser['Full name']);
// console.log(jsUser[mySymbol]);

// jsUser.email = "Ambuj@nv.com"
jsUser.greeting = function(){
    console.log(`Hello ${this['Full name']}!`)
}

console.log(jsUser.greeting());