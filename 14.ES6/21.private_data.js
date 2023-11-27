// hide methods / properties from outside using Symbol
/*
const _radius = Symbol()
const _name = Symbol()
const _draw = Symbol()
class Circle {
    constructor(radius, name) {
        this[_radius] = radius
        this[_name] = name
    }
    [_draw]() {
        console.log('Drawing...');
    }
}

let c1 = new Circle(5, 'RED')
// console.log(c1);

// console.log(Object.getOwnPropertyNames(c1));
// console.log(Object.getOwnPropertySymbols(c1));

let key = Object.getOwnPropertySymbols(c1)[1]

console.log(c1[key]);
*/



// hide methods / properties from outside using new WeakMap()
const _radius = new WeakMap
const _name = new WeakMap
const _resize = new WeakMap()
class Circle {
    constructor(radius, name) {
        // declar own property
        this.size = 100
        _radius.set(this, radius)
        _name.set(this, name)
        _resize.set(this, () => {
            console.log(this.size);
        })
    }
    draw() {
        console.log('Drawing...');
        console.log(_radius.get(this), _name.get(this));
        _resize.get(this)()
    }
}

let c1 = new Circle(5, 'RED')
console.log(c1.draw());