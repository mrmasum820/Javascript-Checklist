function Shape() {

}

Shape.prototype = {
    common: function () {
        console.log('I am common method');
    }
}


function Square(width) {
    this.width = width
}

// inheritance object prototype by creating another object prototype
Square.prototype = Object.create(Shape.prototype)

Square.prototype.draw = function () {
    console.log('Draw');
}

//Reset constructor after inheritance
// Don't use this after inheritance
// Square.prototype = {
//     common: function(){
//         console.log('I am common');
//     }
// }

var shape = new Shape()
var sqr = new Square(10)


// shape -> shape base -> Object
// sqr -> Square base -> Object

// sqr -> Square -> Shape -> Object

function Circle() {

}

Circle.prototype = Object.create(Shape.prototype)

var circle = new Circle()