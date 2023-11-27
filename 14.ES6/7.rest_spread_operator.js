// function parameter is rest operator
// other using this is called spread operator

/*
function sum(...rest) {
    return rest.reduce((a, b) => a + b)
}

console.log(sum(1, 2, 3, 4, 5));
*/


//spread is used an array and object
// we can see the array directly
let a = [1, 2, 3]
console.log(...a);


let obj = {
    a: 10,
    b: 20,
    c: 30
}

// we can create another new object using create method otherwise it will modify main object because object is mutable
let obj2 = {
    ...obj
}

console.log(obj2);