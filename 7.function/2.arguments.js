

function add(a, b) {  //parameter
    var result = a + b
    console.log('The sum of the numbers is: ', result);
}

function sub(num1, num2) {
    console.log('Substraction is: ', num2 - num1);
}

// add(10, 20) //providing arguments in a function from outside
// add(20, 30)
// add(30, 40)
// sub(20, 70)


/*
//create a function that can do sum
var arr1 = [1, 2, 3]
var arr2 = [5, 7, 9]
var arr3 = [9, 7, 1]

/*
var sum1 = 0
for(var i = 0; i < arr1.length; i++) {
    sum1 += arr1[i]
}
console.log(sum1);

function sumOfArray(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log('Sum of the array is: ', sum);
}

sumOfArray(arr1);
sumOfArray(arr2);
sumOfArray(arr3);
*/


//arguments are array like data structure
function test(a, b, c) {
    // console.log(JSON.stringify(arguments));
    // console.log(typeof a);
    // console.log(arguments);

    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

// test(10, 20, 30)

//if we don't know how many arguments are passes from outside
function addAll() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum);
}

// addAll(10, 20, 30)
addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)