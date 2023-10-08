const user = {
    username: "Ambuj Kumar",
    loginCount: 12,
    signedIn: true,
    getUserDetails: function(){
        return `Name of user: ${this.username}`
    }
} // - object literal

// console.log(user.loginCount);
// console.log(user.getUserDetails());

function User(username, loginCount, isSignedIn){
    this.username = username
    this.loginCount = loginCount
    this.isSignedIn = isSignedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    // return this
}

const userOne = new User("JS", 1, false)
const userTwo = new User("Ambuj Kumar", 2, true)
// console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo.greeting());

// new keyword means
// 1. new instance create
// 2. constructor function called
// 3. this inject into function
// 4. returns this in function