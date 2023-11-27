//method are buildin in javascript and it easier our life
//concat
var a = 'I am'
var b = 'MR Masum'

var c = a.concat(' ', b)

//substr
var d = c.substr(5)
// console.log(d);


//charAt
// console.log(c.charAt(0));


//startsWith
// console.log(c.startsWith('I')); //true
// console.log(c.startsWith('M')); //false

//endsWith
// console.log(c.endsWith('Masum')); //true


//toUpperCase / toLowerCase
// console.log(a.toUpperCase());
// console.log(b.toLowerCase());


//trim
// console.log('    abc     '.trim());


//split -> convert into array
// console.log(c.split(' '))


//length
var str = 'I love Bangladesh'

var length = 0;

while (true) {
    if (str.charAt(length) === '') {
        break;
    } else {
        length++
    }
}

// console.log(length);


// console.log(str.length);