//using this method we do sum, find maximum, minimun value of an array

var arr = [57, 1, 2, 3, 45, 4, 5]

/*
var sum = arr.reduce(function (prev, curr) {
    return prev + curr;
}, 100)

var max = arr.reduce(function (prev, curr) {
    return Math.max(prev, curr)
}, 0)

// console.log(sum);
// console.log(max);
*/


//implementation
function myReduce(arr, cb, acc) { // accumulator -> initial value
    for (var i = 0; i < arr.length; i++) {
        acc = cb(acc, arr[i])
    }
    return acc
}

var sum = myReduce(arr, function (prev, curr) {
    return prev + curr
}, 100)

var max = myReduce(arr, function (prev, curr) {
    return Math.max(prev, curr)
}, 0)

var min = myReduce(arr, function (prev, curr) {
    return Math.min(prev, curr)
}, arr[0])

console.log(sum, max, min);
