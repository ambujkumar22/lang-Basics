// Javascript execution context

/*
{} - global EC (this)
Global Execution Context
Function Execution Context
Eval Execution Context


// Phases
Memory Creation Phase (Only for memory allocation)
Execution Phase

// How it Executes
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 3)

1. Global Execution Context (this)
2. Memory Creation Phase
    val1 -> undefined
    val2 -> undefined
    addNum -> defination of function
    result1 -> undefined
    result2 -> undefined
3. Execution Phase
    val1 -> 10
    val2 -> 5
    result1 -> 
        new variable environment + execution thread
        a) Memory Phase
            val1 -> undefined
            val2 -> undefined
            total -> undefined
        b) Execution Phase
            num1 -> 10
            num2 -> 5
            total -> 15 (returned to global execution context)
        c) Delete execution thread
    result1 -> 15
    result2 -> 
        new variable environmant + execution thread
        a) Memory Phase
            var1 -> undefined
            var2 -> undefined
            total -> undefined
        b) Execution Phase
            num1 -> 10
            num2 -> 3
            total -> 13 (returned to global execution context)
        c) Delete execution thread
    result2 -> 13

// Call stack (LIFO)

*/