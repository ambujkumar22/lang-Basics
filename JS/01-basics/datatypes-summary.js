// Primitive datatype
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
// Examples :-
const score = null // returns object when check typeof
const id = Symbol('123');
const new_id = Symbol('123');

const bigNumber = 12316345342197867234n

console.log(id);
console.log(new_id);
console.log(typeof bigNumber);

// Reference/Non-Primitive datatype
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

console.log(typeof new_id)