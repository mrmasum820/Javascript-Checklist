/*
while (true) {
    var random = Math.floor(Math.random() * 10 + 1)
    if (random === 9) {
        console.log('Winner Winner Winner!');
        break
    } else {
        console.log('You have got ' + random);
    }
}
*/

for (; ;) {
    var random = Math.floor(Math.random() * 10 + 1)
    if (random === 9) {
        console.log('Winner Winner Winner!');
        break
    } else {
        console.log('You have got ' + random);
    }
}
