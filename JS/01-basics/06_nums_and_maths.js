const score = 400
// console.log(score)

const balance = new Number(400)
// console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8996
// console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++
console.log(Math.abs(-0.6))
console.log(Math.round(0.6))
console.log(Math.ceil(3.4))
console.log(Math.floor(3.9))
console.log(Math.min(4,3,7,2))
console.log(Math.max(4,3,7,2))
console.log(Math.random()) // gives values from more than 0 to less than 1

console.log((Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 30
console.log(Math.floor(Math.random()* (max - min + 1)) + min)