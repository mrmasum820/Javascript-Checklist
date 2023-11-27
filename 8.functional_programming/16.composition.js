// function composition
// first function input + second function output

function print(inp) {
    console.log(inp);
}

function multiplyByFive(n) {
    return n * 5
}

function add(a, b) {
    return a + b
}

print(multiplyByFive(add(3, 5)))