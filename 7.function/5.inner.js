//nested function

/*
function something(greet, name) {
    function sayHello() {
        console.log(greet, name);
    }
    sayHello()
}

something('Good afternoon', 'MR Masum')
*/

function something(greet, name) {
    function firstName() {
        if (name) {
            return name.split(' ')[0]
        } else {
            return ''
        }
    }

    var message = greet + ' ' + firstName()
    console.log(message);
}

something('Good morning', 'MR Masum')