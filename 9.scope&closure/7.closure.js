// closure is function data which is declared in my own scope or comes from outside of my scope

// when a function is able to remember and access it's lexical scope even when that function executing outside it's lexical scope

/*
//when a function is able to remember and access it's lexical scope
function test() {
    var msg = 'I am learning lexical scope and closure'

    function sayMsg() {
        console.log(msg);
    }

    sayMsg()
}

test()
*/


// function executing outside it's lexical scope
function test() {
    var msg = 'I am learning lexical scope and closure'

    return function () {
        console.log(msg);
    }
}

var sayMsg = test()
sayMsg();