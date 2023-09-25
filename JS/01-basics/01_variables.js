const accountId = 12345
let accountEmail = "ambuj@gmail.com"
var accountLimit = 1
accountCart = 'Empty'
let accountStatus

// avoid using var for because of block scope and functional scope
// accountId = 2 - not allowed because accountId is constant variable which cannot be refined

accountEmail = 'ambuj123@gmail.com'
accountLimit = 2
accountCart = 'Fulfilled'
console.log([accountId,accountEmail,accountLimit,accountCart,accountStatus])