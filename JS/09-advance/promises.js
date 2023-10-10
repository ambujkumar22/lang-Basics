// Promises - he Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const promiseOne = new Promise(function(resolve, reject){
    // Doan async task
    // db calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is completed');
        resolve()
    }, 2000);
})

// promiseOne.then(function(){
//     console.log('Promise Consumed');
// })

// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Async task 2');
//         resolve()
//     }, 1000);
// }).then(function () {
//     console.log('Consumed 2');
// })

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username:"Ambuj", email:"ambuj@gmail.com"})
    }, 1000)
})

// promiseThree.then(function(output){
//     console.log(output);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = true
//         if(!error){
//             resolve({username:"Ambuj",email:"ambuj@gmail.com"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000);
// })

// promiseFour.then((output) => {
//     console.log(output);
//     return output.username
// })
// .then((username) => {
//     console.log(username);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log('Finally promise is either resolved or rejected');
// })

// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             resolve({ username: "Javascript", email: "js@gmail.com" })
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000);
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch(err){
//         console.log(err);
//     }
// }
// consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch(err){
//         console.log('ERROR: '.err);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})