/*
const delay = sec => new Promise(resolve => setTimeout(resolve, sec * 1000))

delay(2).then(() => console.log('2 seconds delay'))
delay(1).then(() => console.log('1 seconds delay'))
delay(5).then(() => console.log('5 seconds delay'))
*/


//Promise methods
/*
// creating instant promise and resolve or reject instant
let p1 = Promise.resolve('Test')
p1.then(v => console.log(v))

let p2 = Promise.reject('Reject')
p2.catch(e => console.log(e))
*/

// for working multiple promise
/*
let p1 = Promise.resolve('One')
let p2 = Promise.resolve('Two')
let p3 = Promise.resolve('Three')

let promiseArr = [p1, p2, p3]
Promise.all(promiseArr)
    .then(arr => {
        console.log(arr);
    })
*/


// after resolving all promises the result will show promise.all()
// first resolve promise will show promise.race()
let p1 = new Promise(resolve => {
    setTimeout(resolve, 5000, 'One')
})
let p2 = new Promise(resolve => {
    setTimeout(resolve, 3000, 'Two')
})
let p3 = new Promise(resolve => {
    setTimeout(resolve, 4000, 'Three')
})

let promiseArr = [p1, p2, p3]

Promise.all(promiseArr)
    .then(arr => {
        console.log(arr);
    })

Promise.race(promiseArr)
    .then(value => {
        console.log(value);
    })


