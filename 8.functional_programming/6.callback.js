function sample(a, b, cb) {
    var c = a + b
    var d = a - b

    var result = cb(c, d)
    return result
}

function add(a, b) {
    return a + b
}

var result = sample(5, 8, add)

var result2 = sample(5, 8, function (c, d) {
    return c - d
})

var result3 = sample(5, 8, function (c, d) {
    return c * d
})

console.log(result3);