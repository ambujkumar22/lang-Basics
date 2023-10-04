// REDUCE
const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc, current){
//     return acc + current
// },0)
// console.log(myTotal);

// const myTotal = myNums.reduce((acc, current) => acc + current, 0)
// console.log(myTotal);

const cart = [
    {
        itemName: 'js course',
        price: 299
    },
    {
        itemName: 'python course',
        price: 788
    },
    {
        itemName: 'data science course',
        price: 12999
    },
    {
        itemName: 'php course',
        price: 999
    }
]
const totalPrice = cart.reduce((acc, item) => (acc + item.price), 0)
console.log(totalPrice);