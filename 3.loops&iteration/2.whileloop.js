// if we get condition and using this condition if i need to run the loop then we will use while loop

/*
var i = 1;
while (i <= 10) {
    console.log('MR Masum');
    i++
}
*/

var isRunning = true

while (isRunning) {
    var random = Math.floor(Math.random() * 10 + 1)
    if (random === 9) {
        console.log('Winner Winner Winner!');
        isRunning = false
    } else {
        console.log('You have got ' + random);
    }
}