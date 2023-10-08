// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abcd`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const newUser = new User('Ambuj Kumar', 'ambuj@gmail.com','pass')
// console.log(newUser.encryptPassword());
// console.log(newUser.changeUsername());

//behind the scene
function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abcd`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const anotherUser = new User('Ambuj Kumar', 'ambuj@gmail.com','pass')
console.log(anotherUser.encryptPassword());
console.log(anotherUser.changeUsername());