// Multi Dimentional Array

/*
//two dimentional array
var arr = [
    [],
    [],
    [],
    []
]
*/

var arr = [
    [78, 71, 80, 90],
    [80, 75, 90, 86],
    [71, 75, 79, 44]
]

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);

// console.log(arr[0][0]);
// console.log(arr[1][1]);


/*
//traverse the two dimentional array
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        console.log('Element ' + i + ': ' + +arr[i][j]);
    }
}
*/


// three dimentional array
var numbers = [
    [
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18]
    ],
    [
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18]
    ],
    [
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18]
    ]
]

// console.log(numbers);
// console.log(numbers[0][0]);
// console.log(numbers[0][0][0]);

for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < numbers[i].length; j++) {
        for (var k = 0; k < numbers[i][j].length; k++) {
            console.log('Element ' + i + ': ' + numbers[i][j][k]);
        }
    }
}