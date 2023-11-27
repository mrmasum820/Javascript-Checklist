// if we don't need object reference and don't need to weak relationship on object reference then we don't need to work on weakMap or weakSet

let a = { a: 10 }, b = { b: 20 }

let weakMap = new WeakMap([[a, 45], [b, 50]])

b = null

// console.log(weakMap);
// console.log(weakMap.set(a));

console.log(weakMap.get(a));
console.log(weakMap.get(b));