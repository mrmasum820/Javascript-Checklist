import Shape from "./Shape";

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color)
        this.width = width
        this.height = height
    }

    //method overriding in ES6
    draw() {
        console.log('Drawing a Rectangle...');
    }

    calculate() {
        return this.width * this.height
    }
}

export default Rectangle;