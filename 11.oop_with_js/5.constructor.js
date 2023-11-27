//constructor property which is build in javascript object
// every object has a constructor

// rect1.constructor  //f -> native code

// var obj = {}
// var obj = new Object() //constructor

// var str = new String('string') //constructor
// console.log(str.constructor)



// functions are special type of object in javascript even everything is object in javascript
// without primitive data type
// function has also constructor which is an object

function test() {
    console.log('something');
}
// test.constructor //f -> native code


//another example
var Rect = new Function('width', 'height', `this.width = width
    this.height = height

    this.draw = function () {
        console.log('I am a rectangle');
        this.printProperties()
        console.log(this)
    }
    this.printProperties = function () {
        console.log('My width is ' + this.width);
        console.log('My height is ' + this.height);
    }`
)

var rect1 = new Rect(4, 5)
console.log(rect1)