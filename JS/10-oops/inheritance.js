class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Logged in user: ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, pass){
        super(username)
        this.email = email
        this.pass = pass
    }

    addCourse(){
        console.log(`New course was added by: ${this.username}`);
    }
}

const newUser = new Teacher("ambuj","ambuj@gmail.com",'1234')
newUser.logMe();
newUser.addCourse();

// const newUser = new User("ambuj")
// newUser.logMe();