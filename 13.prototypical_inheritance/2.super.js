//calling super with call method in javascript

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

Square.prototype = Object.create(Shape.prototype)
Square.prototype.constructor = Square

Square.prototype.draw = function () {
    console.log('Drawing');
}


var sqr = new Square(45, 'red')
