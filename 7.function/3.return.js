//we don't know what is the function purpose. that's why we need to return the result from the function so that using this value we can use it further
//by default any function return undefined

function addAll() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum;
}

// var a = addAll(1, 2, 3)
// var b = addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
// console.log(a, b);


function person(name, email) {
    return {
        name: name,
        email: email
    }
    console.log('this code will never show');
}
var p1 = person('MR Masum', 'mrmasum@gmail.com')
console.log(p1);