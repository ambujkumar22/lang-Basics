const userEmail = null
if(userEmail){
    console.log('Got user email');
} else {
    console.log('Didn\'t get user email');
}

// Falsy values -> false, 0, -0, '', null, BigInt, undefined, NaN
// Truthy valuse -> true, 'abc', "0", " ", 1...n, [], {}, function(){}

// Nullish Coalescing Operator (??): null, undefined


let val1 = 5 ?? 10
console.log(val1);