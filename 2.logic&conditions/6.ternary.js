// for single statement. if multiple statement then use if else
//condition ? true side : false side

var n = 100
var str = ''

if (n % 2 === 0) {
    str = 'Even Number'
} else {
    str = 'Odd number'
}

console.log(str);


var result = n % 2 === 0 ? 'Even' : 'Odd';
console.log(result);