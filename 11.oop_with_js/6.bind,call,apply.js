//we can use call method which will call our own function

function test() {
    console.log('something');
}
// console.log(test.name, test.length);



function myFunc(c, d) {
    console.log(this);  //window object
    console.log(this.a + this.b + c + d);
}

// myFunc() //if we call direct function invoke it refer the window object

// first argument is object, second function arguments have to provide
// In call method arguments are provided directly
// In apply method arguments are provided as array
// In bind method arguments are provided directly but it doesn't call directly, so we need to store in a variable

//call, apply - direct call the function
// myFunc.call({ a: 40, b: 50 }, 10, 20)
// myFunc.apply({ a: 100, b: 200 }, [10, 20])


//bind method - just bind the object but doesn't call
var testBind = myFunc.bind({ a: 7, b: 3 }, 5, 5)
testBind()