// prototype is parent class

var obj = {}
var obj2 = new Object()

console.log(Object.getPrototypeOf(obj));
console.log(Object.getPrototypeOf(obj) === Object.getPrototypeOf(obj2)); //ture


//arr -> Array base -> Object base
var arr = []

//string -> String base -> Ojbect base
var str = 'string'

// function -> function base -> Object base
function Person(name) {
    this.name = name
}
var p1 = new Person('Masum')

// console.log(p1);