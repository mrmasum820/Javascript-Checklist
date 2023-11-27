// object literal is used for creating small object
// 1. factory pattern
// 2. constructor pattern

/*
var rect1 = {
    width: 100,
    height: 50,

    draw: function () {
        console.log('I am a rectangle');
        this.printProperties()
        console.log(this);
    },
    printProperties: function () {
        console.log('My width is ' + this.width);
        console.log('My height is ' + this.height);
    }
}
var rect2 = {
    width: 100,
    height: 50,

    draw: function () {
        console.log('I am a rectangle');
        this.printProperties()
        console.log(this);
    },
    printProperties: function () {
        console.log('My width is ' + this.width);
        console.log('My height is ' + this.height);
    }
}
var rect3 = {
    width: 100,
    height: 50,

    draw: function () {
        console.log('I am a rectangle');
        this.printProperties()
        console.log(this);
    },
    printProperties: function () {
        console.log('My width is ' + this.width);
        console.log('My height is ' + this.height);
    }
}
*/


//using factory pattern

var createRect = function (width, height) {
    return {
        width: width,
        height: height,

        draw: function () {
            console.log('I am a rectangle');
            this.printProperties()
            console.log(this);
        },
        printProperties: function () {
            console.log('My width is ' + this.width);
            console.log('My height is ' + this.height);
        }
    }
}

var rect1 = createRect(10, 8)
rect1.draw()

var rect2 = createRect(20, 30)
rect2.draw()