// for of is only applicable for array and string

const arr = [1, 2, 3]

for (let v of arr) {
    console.log(v);
}

for (let v of 'MR Masum') {
    console.log(v);
}


// if we implement Symbol.iterator in object then we can iterate object using for of
/*
let obj = {
    a: 10,
    b: 20
}

for (let v of obj) {
    console.log(v);
}
*/