const User = {
    _email: 'ambuj@gmail.com',
    _password: 'pass',
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

console.log(User.email)

const Tea = Object.create(User)
console.log(Tea.email);