// In ES6 Symbol.iterator is a function
// if this function is called this array will be iterable

const arr = [1, 2, 3]

// console.log(arr[Symbol.iterator]);
// console.log('str'[Symbol.iterator]);

let iterator = arr[Symbol.iterator]()
// console.log(iterator.next());
// console.log(iterator.next());


// working with string
let str = 'text'

let iterateText = str[Symbol.iterator]()

console.log(iterateText.next());
console.log(iterateText.next());
console.log(iterateText.next());