//Object is another Data Structure
// property: value
// object literal

/*
var obj = {}
obj.x = 10

console.log(obj);
*/


var point = {
    x: 10,
    y: 20
}
point.z = 30

//access using dot notation
// console.log(point);
// console.log(point.x);
// console.log(point.y);
// console.log(point.x + point.y);


//access using array notation -> when we don't know what is the property value
// console.log(point['x']);  //property name will be string
// console.log(point['z']);

var show = 'z'
// console.log(point.show); //undefined
// console.log(point[show]);


//update property
point.x = 45
point.a = 15
// console.log(point);
// console.log(point.d); //undefined

point['y'] = 100
var prop = 'z'
point[prop] = 55
console.log(point);


//remove object properties
delete point.a

console.log(point);


/*
//object constructor
var obj1 = Object()
obj1.a = 10
console.log(obj1);

var obj2 = new Object()
obj2.b = 20
console.log(obj2);
*/


