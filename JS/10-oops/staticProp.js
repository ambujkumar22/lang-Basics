class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123${this.username}`
    }
}

const newUser = new User('Ambuj')
// console.log(newUser.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher('iphone','i@phone.com')
console.log(iphone.crateId())