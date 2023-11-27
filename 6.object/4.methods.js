var obj = {
    x: 40,
    y: 60,
    z: 70
}

//Object.keys / Object.values -> array format
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

//entries -> two dimentional arrays
// console.log(Object.entries(obj));

//clone the object using assign method
var obj2 = Object.assign({}, obj)
obj2.x = 50
obj2.y = 100

console.log(obj2);
console.log(obj);