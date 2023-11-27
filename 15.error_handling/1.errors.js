// EvalError, InternalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError

// custom error
/*
let n = 10

if (n > 5) {
    throw new Error('N is greater than 5')
}
*/


// javascript Error
let n = 2.7976931348623157e+308;

if (n > Number.MAX_VALUE) {
    throw new RangeError('The number is too long')
}


// console.log(a);  //reference error

// console.log(a; //syntax error