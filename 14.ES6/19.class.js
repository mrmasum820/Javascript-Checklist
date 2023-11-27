// using class from ES6
// every class has constructor
// constructor is a method

/*
function Rectangle(width, height){
    this.width = width
    this.height = height
}

Rectangle.prototype.draw = function(){
    console.log(this);
    console.log('Drawing');
}

let rect1 = new Rectangle(10, 20)
*/


class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
        // those methods are object own method
        this.another = function () {
            console.log('inside constructor');
        }
    }

    //those methods goes into prototype
    draw() {
        console.log('Drawing..');
    }
    test() {
        console.log('this is another test method');
    }
}

let rect1 = new Rectangle(10, 20)
console.log(rect1);
// console.log(rect1.test());
// console.log(typeof Rectangle);


// properties need to define inside constructor
// if we need to define properties outside constructor then we need to go babel.io -> plugins