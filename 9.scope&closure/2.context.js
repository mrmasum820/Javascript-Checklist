//Execution context
//context is an object. when function is called then context is created

function a() {
    b()
    console.log('I am function a');
}

function b() {
    d()
    console.log('I am function b');
}

function c() {
    console.log('I am function c');
}

function d() {
    c()
    console.log('I am function d');
}

var x = 100
a()
console.log('I am global');


//Execution of C function context  //last in first out(LIFO)
//Execution of D function context //execution context maintaining stack data structure
//Execution of B function context
//Execution of A function context
//Execution of global context


// 1.creational phase
//var x(undefined)
// function declaration(reference)

// 2.execution phase
//x = 100 (execution)
// function invocation
