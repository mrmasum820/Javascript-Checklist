// gp through all the items in an array -> traversing

var arr = [14, 67, 98, 34, 77, 12, 44]

/*
for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    arr[i] = arr[i] + 5
}

console.log(arr);
*/

var sum = 0;

for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
}
// console.log(sum);


//find all the even numbers from an array
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

//find the sum from all the even numbers in an array
var sum = 0
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sum += arr[i]
    }
}
console.log(sum);

/*
////find all the even numbers from an array
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
        console.log(arr[i]);
    }
}
*/

