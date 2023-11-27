// convert object into array
let obj = {
    a: 10,
    b: 20
}
// console.log(Object.entries(obj));


// convert array into object using fromEntries
let objArr = [
    ['a', 10],
    ['b', 20]
]

console.log(Object.fromEntries(objArr));