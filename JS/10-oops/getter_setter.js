class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return `Your email is: ${this._email.toUpperCase()}`
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `Your password is: ${this._password.toUpperCase()}`
    }

    set password(value){
        this._password = value
    }
}

const ambuj = new User('ambuj@gmail.com','abcd')
console.log(ambuj.email);
console.log(ambuj.password);