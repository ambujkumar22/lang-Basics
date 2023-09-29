const marvel_heroes = ['thor','ironman','hulk']
const dc_heroes = ['batman','superman','flash']

// marvel_heroes.push(dc_heroes) // 2nd array merges as full array on 3rd key for eg: [1,2,[3,4,5]]

// let all_heroes = marvel_heroes.concat(dc_heroes); // concat returns a new array and does not changes previous array

const new_heroes = [...marvel_heroes, ...dc_heroes] // spread operators widely used in programming community

const another_array = [1,2,3,4,[4,5,6,],43,1,[3,4,[65,43]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Ambuj")) // false
console.log(Array.from("Ambuj")) // converts into [ 'A', 'm', 'b', 'u', 'j' ]
console.log(Array.from({name:"Ambuj"})) // interesting

let score1 = 100
let score2 = 100
let score3 = 100

console.log(Array.of(score1, score2,score3))