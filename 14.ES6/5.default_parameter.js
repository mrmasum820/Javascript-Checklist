/*
function sqr(n = 1) {
    // if (!n) {
    //     n = 1
    // }
    // n = n || 1

    return n * n
}

console.log(sqr());
*/


// giving arguments we have to provide something instead of null / undefined
function greet(name = 'MR Masum', msg = 'Hi') {
    console.log(name.length);
    console.log(`${msg}! ${name}`);
}

// greet('MD Mahbubur Rahman')
// greet(null, 'Hello')