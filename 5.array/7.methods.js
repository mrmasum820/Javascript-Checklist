var arr = [4, 5, 6, 7, 8]

//join -> convert string (' ,| ')
// console.log(arr.join(' '));

//fill -> replace the array
// arr.fill(0)
// console.log(arr.fill(true));

//concat -> merge two or more arrays
var arr2 = [9, 10, 11]
// var arr3 = arr.concat(arr2)
// console.log(arr3);

//isArray -> return true / false if this is an array
// console.log(Array.isArray(arr2));

//Array.from -> clone / generate new array
// var arr3 = Array.from(arr2)
// console.log(arr3);


//Array is mutable -> pass reference and effect main array
var a = [1, 2]
// var b = a
var b = Array.from(a)

b[0] = 5

console.log(a);
console.log(b);
