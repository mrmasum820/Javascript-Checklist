// we need to work on setTimeout function body to get the result while doing the asynchronous tasks
/*
function sayName(name) {
    let result
    setTimeout(() => {
        console.log('I have done...');
        result = name
    }, 3000);
    return result
}
*/

function sayName(name) {
    setTimeout(() => {
        console.log(name);
    }, 3000)
}

let output = sayName('MR Masum')
console.log(output);


// javascript is a single threaded language means javascript process one task at a time(synchronous task)
// javascript uses two data structure to handle variables and function calls
// 1. Heap to manage variables
// 2. stack to manage function calls
let responseA = serverCall(url)
let responseB = serverCall(url)
let responseC = serverCall(url)

console.log(responseA);
console.log(responseB);
console.log(responseC);


// javascript engine has 4 ways to perform asynchronous tasks
// 1. call stack(global/main file)
// 2. WEB API(setTimeout())
// 3. callback queue / task queue(console.log())
// 4. event loop(processing callback queue to call stack)