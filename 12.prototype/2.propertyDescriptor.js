var person = {
    name: 'MR Masum'
}

// to find property descriptor
// var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
// console.log(descriptor);  //enumerable / iterable, writable, configurable => true

// let baseObj = Object.getPrototypeOf(person) //get prototype
// let descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString')
// console.log(descriptor);


// set our own property
Object.defineProperty(person, 'name', {
    enumerable: false,
    writable: false,
    configurable: false,
    value: 'MD Mahbubur Rahman' //the value will be fixed
})