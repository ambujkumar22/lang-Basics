function addTwoNumbers(num1 = 0, num2 = 0){ // defining a function
    console.log(num1 + num2)
}

addTwoNumbers('2', null) // execution

function calculateCartPrice(...num){
    return num
}

console.log(calculateCartPrice(200,100,500,230))

function handleObject({name = 'Melon', price = 200}){
    console.log(`Product is ${name} and price is ${price}`);
}

handleObject({name: "Orange", prices: 199});