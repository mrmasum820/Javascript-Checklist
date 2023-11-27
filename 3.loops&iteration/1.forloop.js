// for repetative tasks
//if we know the starting and ending point then always we use the for loop

/*
for(initializer; condition; increment/decrement) {  //multiple statement seperated by semicolon
    //code goes here
}
*/

// for (var i = 0; i < 100; i++) {
//     console.log((i + 1) + ' MR Masum')
// }

// for (var i = 100; i <= 1000; i += 10) {
//     console.log(i + ' MR Masum')
// }


/*
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
*/

/*
var sum = 0;
for (var i = 1; i <= 10; i++) {
    console.log(sum + ' + ' + i + ' = ' + (sum + i));
    sum += i
}

*/

var sum = 0;

for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(sum + ' + ' + i + ' = ' + (sum + i));
        sum += i;
    }
}