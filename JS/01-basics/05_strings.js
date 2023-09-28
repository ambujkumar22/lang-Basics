const name = "Ambuj"
const repoCount = 50
// console.log(name + repoCount + ' 50') for old practices

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // more modern standard also called as string interpolation

const gameName = new String('ambuj-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   ambuj    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ambuj.com/ambuj%20kumar"

console.log(url.replace('ambuj', 'rhino'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));