function setUsername(username){
    //complex calculations
    this.username = username
    console.log(`called`);
}

function createUser(username, email, password){
    setUsername.call(this, username)

    this.email = email
    this.password = password
}

const newUser = new createUser('Ambuj Kumar', 'ak@gmail.com', 'abcd')
console.log(newUser);