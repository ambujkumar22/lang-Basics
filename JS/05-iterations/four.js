// FOR IN - used for Objects iterations majorly but works on arrays as well
const myObj = {
    js: "Javascript",
    php: "hyper text pre processor",
    rb: "Ruby",
    cpp: "C++"
}
for (const key in myObj) {
    // console.log(`${key} - ${myObj[key]}`);
}

const programming = ['js','php','cpp','csharp']
for (const key in programming) {
    console.log(`value - ${programming[key]}`);
}