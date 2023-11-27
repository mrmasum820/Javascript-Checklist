//var vs let vs const
// we can redeclare and also reassign using let
// we can't redeclare and reassign using const

// let a = 10
// a = 50

// const b = 20
// b = 100

// var is accessable from outside block which can cause memory leack
// let isn't accessable from outside block
if (true) {
    let a = 10
}

// console.log(a); // a isn't define

for (let i = 0; i < 5; i++) {
    // console.log(i);
}


// this is a block
{
    let abc = 12
}

console.log(abc);