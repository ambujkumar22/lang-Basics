// Array

const myArr = [0, 1, 4, 3, 9, 5, true, "Ambuj"] // arrays are resizable and contain mix different data-types
// console.log(myArr[2]);

const myHeroes = ['Shaktimaan', 'Junior-G']
// console.log(myHeroes[1]);

const myArr2 = new Array(1,2,3,4,13,66,1,88,45,100)
// console.log(myArr2.length);

// Array Methods
// myArr.push(5)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(-1) // adds value in the starting of array
// myArr.shift() // pops value from the starting of array
// console.log(myArr.includes(42)); // returns Boolean true/false
// console.log(myArr.indexOf(4)); // returns index of valid value and returns -1 for non-existing values.

const newArr = myArr.join('') // joins the array and connects the values/ also changes typeof the array to string
// console.log(myArr);
// console.log(newArr);

// slice, splice
console.log("A ", myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C ", myArr);