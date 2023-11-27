//if any function can store in a variable then we can call it function expression

var addition = function add(a, b) {
    return a + b
}

//anonymous function
var add = function (a, b) {
    return a + b
}
/*
setTimeout(function () {
    console.log('I will appear after 5 seconds');
}, 5000)
*/

// console.log(add(10, 40));
var another = add
console.log(another(7, 8));