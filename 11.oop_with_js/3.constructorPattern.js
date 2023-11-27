// in two pattern we need to use function

// 1. function name first letter will be Uppercase
// 2. we don't need to use return, comma, properties = value, use this.propertiesName / this.methodNames
// 3. use new keyword for creating object

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

var rect2 = new Rectangle(50, 100)
rect2.draw()

