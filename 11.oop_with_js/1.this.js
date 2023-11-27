//object literal with methods

var rect = {
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

// rect.draw()

// rect.width = 200
// rect.draw()



// this keyword
// 1. if this is used in an object it always refer the object properties and methods
// 2. if this is used anywhere like in function then it refer the window object
// 3. this keyword got its value in executional context

function myFunc() {
    console.log(this);
    // rect.printProperties()
}

// myFunc()


var another = {
    width: 23,
    height: 20,

    print: rect.printProperties //get its own properties although used rect object method
}

// console.log(another.print);
another.print()