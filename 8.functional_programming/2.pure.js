// It returns the same result if given the same arguments
// It does not cause any side effect

function sqr(n) {
    return n * n
}

// console.log(sqr(3));
// console.log(sqr(3));
// console.log(sqr(3));


//it causes side effect so this is not a pure function
var point = {
    x: 10,
    y: 20
}

function pinPoint(point) {
    point.x = 100
    point.y = 200
    console.log(point);
}

pinPoint(point)

console.log(point);
