//if we want to get the private properties / method outside the function
//getter

var Rectangle = function (width, height) {

    this.width = width
    this.height = height

    var position = {
        x: 55,
        y: -100
    }

    var printProperties = function () {
        console.log('My width is ' + this.width);
        console.log('My height is ' + this.height);
    }.bind(this)

    // this isn't a good process
    // this.getPosition = function () {
    //     return position
    // }

    this.draw = function () {
        console.log('I am a rectangle');
        printProperties()
        console.log('Position: X=' + position.x + ' Y=' + position.y)
    }

    // get and set properties ousing definePropery
    Object.defineProperty(this, 'position', {
        get: function () {
            return position
        },
        set: function (value) {
            position = value
        }
    })
}

var rect = new Rectangle(45, 50)

// console.log(rect.getPosition());

rect.position = {
    x: 456,
    y: -123
}
console.log(rect.position);