//logical operators only used when we have two or more conditions and result comes form both of their participation - &&, ||, !

// &&(and)
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false

//||(or)
// true && true -> true
// true && false -> true
// false && true -> ture
// false && false -> false

// !true -> false

var a = 10
var b = 20
var c = 30
var d = 40

if (a > b && c > d) {
    console.log('A is greater than B and C is greater than D');
} else {
    console.log('At least one condition is false');
}

if (a > b || c > d) {
    console.log('A is greater than B or C is greater than D');
} else {
    console.log('At least one condition is false');
}

var check = !(a > b)
console.log(check);