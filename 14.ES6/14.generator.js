// generator is a function which will return iterator
// using *(esteric) with a function this will convert into generator

let obj = {
    start: 0,
    end: 5,
    [Symbol.iterator]: function* () {
        let currentValue = this.start
        while (currentValue <= this.end) {
            yield currentValue++  //yield / pause
        }
    }
}

// let iterate = obj[Symbol.iterator]()
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());


// CREATE ITERATOR USING GENERATOR EASILY
// function* generate() {
//     yield 1
//     yield 2
//     yield 3
// }

let arr = [10, 20, 30]

function* generator(collection) {
    for (let i = 0; i < collection.length; i++) {
        yield collection[i]
    }
}

let it = generator(arr)
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());