// iterator is an object
// iterator has a next method
// 1. we can iterate object which object is iterable
// 2. we can only iterate depend on our demand

const arr = [1, 2, 3]

/*
// this old method isn't enough
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
*/


// custom itarator for es5
function createIterator(collection) {
    let i = 0
    return {
        next() {
            return {
                done: i >= collection.length,
                value: collection[i++]
            }
        }
    }
}

let iterator = createIterator(arr)
console.log(iterator.next());
console.log(iterator.next()); // it will iterate our demand

// console.dir(iterator.next()); // show output in browser