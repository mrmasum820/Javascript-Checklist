// it is used in loop and terminate the loop when used the break statement

/*
// var isRunning = true
while (true) {
    var random = Math.round(Math.random() * 10 + 1)
    if (random === 7) {
        console.log('Winner Winner Winner');
        break;
    } else {
        console.log('I have got ' + random);
    }
}
*/

for (var i = 1; i <= 10; i++) {
    if (i % 7 === 0) {
        break
    } else {
        console.log(i);
    }
}