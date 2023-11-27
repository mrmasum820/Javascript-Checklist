// Pass by value vs Pass by Reference
// Call by value vs Call by Reference


// If we pass value from outside of an function it only works on function body - its only for primitive data
var n = 10

function test(n) {
    n = n + 100
    console.log(n);
}

test(n)
console.log(n);


// But if we pass an object or array it will change not only function body but also outside of a function
var obj = {
    a: 10,
    b: 20
}

function change(obj) {
    obj.a = obj.a + 100
    obj.b = obj.b + 100
    console.log(obj);
}

change(obj)
console.log(obj);

//that's why javascript objects are mutable / changable