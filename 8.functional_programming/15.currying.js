// we hav to pass single argument without passing multiple arguments
function add(a, b, c) {
    return a + b + c
}
// console.log(add(4, 5, 6)) //15

function currying(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

var result = currying(4)(5)(6)
console.log(result);