// Dates

let myDate = new Date()
//console.log(myDate.toString()) Fri Sep 29 2023 22:27:51 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString()) 9/29/2023, 10:28:30 PM
// console.log(myDate.toDateString()) Fri Sep 29 2023
// console.log(typeof myDate) // Object

let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp) // in milliseconds 1696007057538
// console.log(myCreatedDate.getTime()) // in milliseconds 1696007057538
// console.log(Math.floor(Date.now()/1000)) // in milliseconds 1696007057538

let newDate = new Date()
// console.log(newDate.getMonth()); // 8 - last month so use +1 for current month

// let string = `date and time is ${newDate.getDay()}/${newDate.getMonth()}/${newDate.getFullYear()}`
// console.log(string);

let designedDate = newDate.toLocaleString('default',{
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
});
// console.log(designedDate); // 09/29/23
