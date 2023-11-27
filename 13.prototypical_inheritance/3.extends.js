//creating extends function

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

// Square.prototype = Object.create(Shape.prototype)
// Square.prototype.constructor = Square
extend(Shape, Square)

Square.prototype.draw = function () {
    console.log('Drawing');
}

function Circle(radius, color) {
    Shape.call(this, color)
    this.radius = radius
}

extend(Shape, Circle)
// Circle.prototype = Object.create(Shape.prototype)
// Circle.prototype.constructor = Circle

var sqr = new Square(50, 'red')
var c = new Circle(10, 'yellow')
