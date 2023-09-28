// Primitive datatype (copy of value)
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
// Examples :-
const score = null // returns object when check typeof
const id = Symbol('123');
const new_id = Symbol('123');

const bigNumber = 12316345342197867234n

console.log('Datatypes - ')
console.log(id);
console.log(new_id);
console.log(typeof bigNumber);

// Reference/Non-Primitive datatype (reference of value)
// Array, Objects, Functions
// Examples :- 

const heroes = ['shaktimaan','naagraj','doga']
let myObj = {
    name: 'Ambuj',
    age: 26,
}

let myFunc = function(){
    console.log('Hello World!');
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack, Heap memories
// Stack (Primitive), Heap (Non-Premitive)
console.log('Memory - ')
let MyYoutubeaname = "Ambuj.k"
let newYoutubename = "Ambuj.kumar"
console.log(newYoutubename)

let userOne = {
    email: 'user@gmail.com',
    upi: 'user@yml'
}

let userTwo = userOne
userTwo.email = 'ambuj@gmail.com'
console.log(userOne.email);