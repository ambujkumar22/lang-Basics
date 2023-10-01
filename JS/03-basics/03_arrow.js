const user = {
    username: "Ambuj",
    age: 999,
    welcomeMessage: function(){
        console.log(`${this.username}! Welcome to website`)
        console.log(this)
    }
}

// console.log(user.welcomeMessage())
// user.username = "Sam"
// console.log(user.welcomeMessage())

// console.log(this);

const one = () => {
    let username = "ambuj kumar"
    console.log(this); // this will return empty object {} because arrow functions takes global context 
}

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Ambuj kumar"})

// console.log(addTwo(3,4));

// +++++++++++++++++++++++++++++++++++++ IIFE +++++++++++++++++++++++++++++++
// Immediately Invoked Function Expression

(function abcd(){ // named IIFE
    console.log(`DB CONNECTED`);
})();

(() => { // unnamed IIFE
    console.log(`DB CONNECTED 2`);
})();