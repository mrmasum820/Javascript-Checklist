function Square(width) {
    this.width = width  //instrance members(property / instance method)
    this.getWidth = function () {
        console.log('Width is ' + this.width);
    }
}

//every prototype is an object, toString is a function and return a string
Square.prototype = {
    draw: function () {  //prototype members
        this.getWidth();
        console.log('Draw');
    },
    toString: function () {
        return 'My width is ' + this.width
    }
}


var sqr1 = new Square(5)
var sqr2 = new Square(10)


//to saw where its own property or not
// console.log(sqr1.hasOwnProperty('width')); //true
// console.log(sqr1.hasOwnProperty('getWidth')); //true
// console.log(sqr1.hasOwnProperty('draw')); //false


//iterate object
// console.log(Object.keys(sqr1));  //to get the instance members only

for (var i in sqr1) {  //to get the prototype members
    console.log(i);
}


//don't overwrite built-in prototype object in javascript