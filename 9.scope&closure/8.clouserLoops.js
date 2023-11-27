// clouser with loops

/*
for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000 * i)
}
*/

// solve this problem using IIFE -> Immidiately Invoke Function Expression
for (var i = 1; i <= 5; i++) {
    (function (n) {
        setTimeout(function () {
            console.log(n);
        }, 1000 * n)
    })(i)
}