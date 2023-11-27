function add(a, b) {
    return a + b
}

// 1. A Function can be stored in a Variable
var sum = add
// console.log(sum(4, 5));
// console.log(typeof sum);

// 2. A function can be stored in an Array
var arr = []
arr.push(add)
// console.log(arr);
// console.log(arr[0](5, 3));

// 3. A function can be stored in an object
var obj = {
    sum: add
}
// console.log(obj);
// console.log(obj.sum(2, 3));

// 4. We can create function as need
setTimeout(function () {
    console.log('I have created a function as we need');
}, 2000)

// 5. We can pass function as an arguments


// 6. We can return functions from another function

