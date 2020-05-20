/* template literals (``) */
let fname = 'Ambuj';
let lname = 'Kumar';
let num1 = 2;
let num2 = 3;
// template literals can also nbe used as <pre> so we can change line and give spaces accordingly.
console.log(`${fname} ${lname}`);
console.log(`${num1 + num2}`);

/* Destructuring Objects */
const credentials = {
    firstname: 'Ambuj',
    lastname: 'Kumar',
    ID: '123qwer',
    city: 'Faridabad'
}

const {firstname ,lastname ,ID:id ,city} = credentials; // assigning the obj keys to the objects itself so no need to use (credentials.firstname)
                                                        // keys can be renamed as ID:id is done above.
console.log(`First name: ${firstname}, Last name: ${lastname}, ID: ${id}, City:${city}`); // printing object values as template literals.

/* Destrucsturing an array */
let [fn, middlename, ln] = ['Ambuj', 'Kumar', 'Mourya']; // assigning the values to arary directly is destructutring array
console.log(`${fn} ${ln}`);

/* Object literal */
function addressMaker(city, state){
    let newAddress = {city,state}; // if object keys name are same as the parameters names then it assumes the value and assign to the key names in objects. it also works same sa {city: city, state: state}
    console.log(newAddress);
}

addressMaker('Faridabad', 'Haryana');

/* Object literals, destructuring objects and template literals (Challenge) */
function addressMaker2(address){
    const {city, state} = address; // using destructuring objects
    let newAddress = {
        city,
        state,
        country:'India'
    }
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`); // using template literals
}

addressMaker2({city:'Faridabad', state: 'Haryana'});

/* For of loop */
// mostly used in the case of iterables
let salaries = [2000, 13000, 15000]; // example of iterable
let total = 0;
for (const salary of salaries){ // suggesting that salary is of salaries value
    total += salary;
}
console.log(total);
let fullName = 'Ambuj Kumar'; // another example of an iterable
for (const char of fullName){
    // console.log(char);
}

/* For of loop (Challenge) */
let salary2 = [10000,12000,15000]; //example of iterables
for(let salary3 of salary2){
    salary3 += 5000;
}
console.log(salary2); // for of loop does not really store the iterated value it simply just iterate over the iterables. salary3 will give error on printing as salary3 is not defined.

/* Sperad Operator */
let spread1 = [1,2,3,4,5];
let spread2 = [...spread1,6,7,8,9,10]; // spread operator(...) spreads or opens the assigned array in the assigning array
console.log(spread2); // will print [1,2,3,4,5,6,7,8,9,10]

/* Rest Operator */
function add(...nums3){ // the rest operator(...) is extremely powerful which converts the multiple arguments into an aray in a function (passed down below in the place of parameters)
    console.log(nums3);
}
add(1,2,3,4,5,6,7); // will print [1,2,3,4,5,6,7]

/* Arrow functions */
function add2(...number){
    let sum = number.reduce((x,y) => x + y); // here reduce converts the array into single line and the keys without values cannot be executed by the reduce function
                                            // arrow function is defined for a single fucntion and the (x,y) are the parameters of the function and no need to write the return statement as AF automatically detects the return value after the => arrow.
    console.log(`sum of the numbers from 1 to 5 is ${sum}`);
}
add2(1,2,3,4,5);

/* Default params */
function defParam(numArray = []){ // default params or default paramters are passed in the parameters to prevent users from errors for ex: if the defined function does't contain any arguments then default paramter comes in play.
    let sum2 = 0;
    numArray.forEach((element) => {
        sum2 += element;
    });
    console.log(sum2);
}
defParam(); // no arguments passed

/* includes() */
let arr = [2,6,4,57,3];
console.log(arr.includes(3)); // includes returns the boolean value if that number or value exists in the array or not. if we pass includes(0) it will return FALSE.

/* let & const */
// let is block code strict variable which means we cannot access a let outside {} block.
// constant is constant value assigner for the values which we don't intend to change further in the code and it also gives error of read only propery 
// whereas it's a different case in arrays and objects are still addable.

/* trailing commas */
/* trailing commas are annoying and inappropriate because these are confusing 
    function example(param = '',){} and obj = {fn:'ambuj',} -- are no problem anymore
*/

/*  */

