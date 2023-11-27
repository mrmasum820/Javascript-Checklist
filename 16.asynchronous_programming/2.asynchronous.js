// file system, database, web api those asynchronous task
// setTimeout is a function, when this associated with window/global then it is called method

console.log('I am line One');

setTimeout(() => {
    console.log('I am line two');
}, 3000)

setTimeout(() => {
    console.log('I am line three');
}, 0)

console.log('I am line four');

setTimeout(() => {
    console.log('I am line five');
}, 1000)

