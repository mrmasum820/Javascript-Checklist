// Reverse an Array
// [1, 2, 3, 4, 5]
// [5, 4, 3, 2, 1]

var numbers = [1, 2, 3, 4, 5]

/*
//using logic
for (var i = 0; i < numbers.length / 2; i++) {
    var temp = numbers[i]
    numbers[i] = numbers[numbers.length - 1 - i]
    numbers[numbers.length - 1 - i] = temp
}

console.log(numbers);
*/

console.log(numbers.reverse());