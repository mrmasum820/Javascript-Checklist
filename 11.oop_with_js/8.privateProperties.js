// object method aren't accessable from outside which is called abstruction
// hide some data from public
// show some data for public

var Rectangle = function (width, height) {

    this.width = width
    this.height = height

    //for private we just need to declare variable because varible are not accessible outside function scope
    var position = {
        x: 55,
        y: -100
    }

    var printProperties = function () {
        console.log('My width is ' + this.width);
        console.log('My height is ' + this.height);
    }.bind(this)

    // they can access properties using clouser
    this.draw = function () {
        console.log('I am a rectangle');
        printProperties()
        console.log('Position: X=' + position.x + ' Y=' + position.y)
    }
}

var rect = new Rectangle(45, 50)
rect.draw()