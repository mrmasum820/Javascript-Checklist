// function declaration
function abc() {
    console.log('I am a function');
}

// newAbc() //show error(undefined is not a function)

//function expression must be called after declaration
var newAbc = function () {
    console.log('I am new ABC function');
}

newAbc()

abc()


// 1.creational phrase
// abc = reference number
// newAbc = undefined

// 2.executional phrase
// invoke abc funtion as it kept it reference number
// invoke again
