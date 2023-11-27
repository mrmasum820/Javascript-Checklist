// garbage collection = clean the reference(null)
// that's why weak map comes
// we can only store reference using weakset and it only works with object

let a = { a: 10 }, b = { b: 20 }
// let set = new Set([a, b])

// a = null

// let arr = [...set]

// console.log(arr);
// console.log(arr[0]);


let weakSet = new WeakSet([a, b])

a = null

console.log(weakSet.has(a)); //false
console.log(weakSet.has(b)); //true