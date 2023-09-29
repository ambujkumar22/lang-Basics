// const tinderUser = new Object() // singleton object
const tinderUser = {} // literal object or non-singleton

tinderUser.name = "John Doe"
tinderUser.isLoggedin = true
// console.log(tinderUser)

const regularUser = {
    email: "some@gmaill.com",
    fullname: {
        userfullname: {
            firstname: "ambuj",
            lastname: "kumar",
        }
    } 
}

// console.log(regularUser.fullname?.userfullname.lastname)

const obj1 = {1: 'a',2: 'b',3:'c'}
const obj2 = {3: 'd',4: 'b'}
// const obj3 = {...obj1,...obj2} // spread operator used same as array
const obj3 = Object.assign({},obj1,obj2) // this combines all objects, empty object is target and rest are source
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // return key values in array [ [ 'name', 'John Doe' ], [ 'isLoggedin', true ] ]

console.log(tinderUser.hasOwnProperty('isAnAdult')); // return Boolean true/false values if that ley exists in object or not

const course = {
    courseName: "JS hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor: instructor, price: coursePrice } = course
console.log(coursePrice)