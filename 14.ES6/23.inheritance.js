// super is used for calling parent class constructor

class Shape {
    constructor(color) {
        this.color = color
    }
    draw() {
        console.log('Drawing');
    }
}

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

let r = new Rectangle('Green', 10, 20)
console.log(r);
r.draw()