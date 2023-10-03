// if
/*
conditional Operators
 <, >, <=, >=, ==, !=, ===, !==
*/

if(true){
    console.log(`inside If condition, condition is true`);
}
if(false){
    console.log(`inside If condition, condition is false`);
} else {
    console.log(`Inside else condition.`);
}

const score = 20
if(score == 10){
    let power = 30
    console.log(`Score is not equal to 10`);
} else if(score > 10){
    console.log(`Score here is more than 10 and score is ${score}`)
} else {
    console.log('Score here is false!');
}
// console.log(`power is ${power}`); can't accept power out of IF scope

if(score > 10) console.log('this is implicit scope code.');

const userLoggedIn = false
const debitCard = true
if(userLoggedIn && debitCard){
    console.log(`User is ready to make payments`);
} else if(userLoggedIn || debitCard){
    console.log(`user is not logged in but can make payments`)
}