//symbols is primitive data type and this is unique
// 1. symbol is using in class for private
// 2. for creating enum in javascript
// 3. for using name coheision

//creating symbol
let s1 = Symbol()
let s2 = Symbol('test symbol')

// console.log(s1);
// console.log(s2);
// console.log(s1 === s2);


//for creating enum in javascript
let toss = {
    HEAD: Symblo('HEAD'),
    TAIL: Symbol('TAIL')
}