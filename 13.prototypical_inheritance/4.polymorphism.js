// Polymorphism

function extend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function Shape(color) {
    this.color = color
}

Shape.prototype.common = function () {
    console.log('I am common method');
}

function Square(width, color) {
    Shape.call(this, color)
    this.width = width
}

extend(Shape, Square)
Square.prototype.common = function () {
    console.log('I am calling from Square and I have overridden');
}

Square.prototype.draw = function () {
    console.log('Drawing');
}

function Circle(radius, color) {
    Shape.call(this, color)
    this.radius = radius
}

extend(Shape, Circle)

// Method overriding after extends
Circle.prototype.common = function () {
    // Shape.prototype.common.call(this) //to get the main method
    console.log('I am calling from Circle and I have overridden');
}


var s = new Shape('red')
var sqr = new Square(45, 'blue')
var c = new Circle(10, 'yellow')

var shapes = [s, sqr, c]

for (var i of shapes) {
    i.common()
}

// to check instance
// c instanceof Circle //true
// c instanceof Shape //true
// c  instanceof Square //false