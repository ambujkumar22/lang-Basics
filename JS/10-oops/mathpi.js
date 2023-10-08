const desc = Object.getOwnPropertyDescriptor(Math, 'min')
// console.log(Math.PI);
// console.log(desc);

const myNewObj = Object.create(null)
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log(`Code not working`);
    }
}
// console.log(Object.getOwnPropertyDescriptor(chai,'name'));
Object.defineProperty(chai, 'name', {
    writable: false,
    // enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'));
chai.name = 'masala chai'
for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}