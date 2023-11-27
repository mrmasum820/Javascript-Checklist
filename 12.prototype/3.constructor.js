//every constructor function has prototype and using this prototype we can define properties / methods that will inherit later their children object

function Person(name) {
    this.name = name
}

Person.prototype.PI = 3.14

var p1 = new Person('MR Masum')
var p2 = new Person('Masum')

// two ways to get prototype
// console.log(Object.getPrototypeOf(p1));
// console.log(Person.prototype);

console.log(p1);
console.log(p2);