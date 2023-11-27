//callback not always asynchronous in javascript

let arr = [1, 2, 3, 4]

let sqrArr = arr.map(v => v * v)

console.log(sqrArr);


//asynchronous callback
function asyncMap(arr, cb) {
    return arr.map(v => {
        // setTimeout(cb.bind(null, v), 0)  //bind for later call
        setTimeout(() => cb(v), 0)          //use arrow function for later call
    })
}

let qbArr = asyncMap(arr, v => {
    console.log(v);
})

console.log(qbArr);