const coding = ['js','php','python']
const values = coding.forEach((item)=>{
    return item
})

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num) => {
//     return num > 5
// })
// console.log(newNums);

// const newNums = []
// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {
        title: "Book One",
        genre: 'Fiction',
        publish: 1981,
        edition: 2003
    },
    {
        title: "Book Two",
        genre: 'Comedy',
        publish: 1982,
        edition: 2004
    },
    {
        title: "Book Three",
        genre: 'History',
        publish: 1983,
        edition: 2005
    },
    {
        title: "Book Four",
        genre: 'Drama',
        publish: 1984,
        edition: 2006
    },
    {
        title: "Book Five",
        genre: 'History',
        publish: 1934,
        edition: 2023
    }
]

let userBooks = books.filter((book)=>{
    return book.genre == 'History' && book.publish >= 1950
})

console.log(userBooks);