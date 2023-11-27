// new keyword
// 1. create an empty object
// 2. connect prototype with empty object
// 3. bind this with constructor
// 4. return the function


var Rectangle = function (width, height) {  //Rectangle is constructor function
    this.width = width
    this.height = height

    this.draw = function () {
        console.log('I am a rectangle');
        this.printProperties()
        console.log(this)
    }
    this.printProperties = function () {
        console.log('My width is ' + this.width);
        console.log('My height is ' + this.height);
    }
}

var rect1 = new Rectangle(10, 20)
rect1.draw()

//implement new
function myNew(constructor) {
    var obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    var argsArray = Array.prototype.slice.apply(arguments)  //for handle all arguments
    constructor.apply(obj, argsArray.slice(1)) //bind with constructor

    return obj
}

var rect2 = myNew(Rectangle, 45, 30)
rect2.draw()