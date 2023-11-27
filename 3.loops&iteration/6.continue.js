//if we need to skip something while loop then we can use the continue statement

for (var i = 0; i < 10; i++) {
    if (i === 3 || i === 7) {
        continue;
    } else {
        console.log(i);
    }
}