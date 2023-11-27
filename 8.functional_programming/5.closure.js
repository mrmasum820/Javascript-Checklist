//if any varible comes from outside from the scope then it makes closure

var b = 10

function a() {
    var x = 5

    return function () {
        console.log(x);
    }
}

var abc = a()
console.dir(abc)