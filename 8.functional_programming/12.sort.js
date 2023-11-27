//sorting algorithm

var persons = [
    {
        name: 'A',
        age: 24
    },
    {
        name: 'B',
        age: 19
    },
    {
        name: 'C',
        age: 26
    },
    {
        name: 'D',
        age: 21
    }
]

var arr = [4, 8, 1, 6, 7, 9, 0, 4, 3, 5, 6, 8, 2, 1, 7]

//sort method impact the main array
// arr.sort()  //didnot solve the problem, that's why we need to use cb with sort method
// console.log(arr);


//using cb
arr.sort(function (a, b) {
    if (a > b) {
        return -1   //decending
    } else if (a < b) {
        return 1
    } else {
        return 0
    }
})

// console.log(arr);

persons.sort(function (a, b) {
    if (a.age > b.age) {
        return 1
    } else if (a.age < b.age) {
        return -1
    } else {
        return 0
    }
})

// console.log(persons);


//if the numbers all even numbers / positive numbers -> every method
var res1 = arr.every(function (value) {
    return value % 2 === 0
})

var res2 = arr.every(function (value) {
    return value >= 0
})

// console.log(res2);


//if one number is number from all numbers -> some method
var res3 = arr.some(function (value) {
    return value % 2 === 1
})

var res4 = arr.some(function (value) {
    return value < 0
})

console.log(res3, res4);