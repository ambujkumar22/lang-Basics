// for of Loop
const usreDetails = [
    {
        name: "ambuj",
        age: 26
    },
    {
        name: "rishabh",
        age: 26
    },
    {
        name: "abhishek",
        age: 26
    },
]
for(const val of usreDetails){
    // console.log(val)
}

const greetings = 'Hello World!'
for(const greeting of greetings){
    // console.log(greeting);
}

const myObj = {
    name: 'ambuj',
    age: 26
}
for(const val of Object.values(myObj)){
    console.log(`value is ${val}`);
}

// Maps
const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('FR','France')
for (const [key, value] of map) {
    console.log(key, ':-', value);
}