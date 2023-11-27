// don't use inheritance after two level
// then we have to use composition

// to create a function
function mixin(target, ...sources) {
    Object.assign(target, ...sources)
}

var canWalk = {
    walk: function () {
        console.log('Walking');
    }
}

var canEat = {
    eat: function () {
        console.log('Eating');
    }
}

var canSwim = {
    swim: function () {
        console.log('Swimming');
    }
}

// var person = Object.assign({}, canWalk, canEat)
// person.name = 'MR Masum'

function Person(name) {
    this.name = name
}
// Object.assign(Person.prototype, canWalk, canEat)
mixin(Person.prototype, canWalk, canEat)

function Goldfish(name) {
    this.name = name
}
mixin(Goldfish.prototype, canEat, canSwim)


var person = new Person('MR Masum')
var goldFish = new Goldfish('bla bla bla')

console.log(goldFish);