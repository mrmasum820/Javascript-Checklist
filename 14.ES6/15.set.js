// set and map is a data structure
// we cann't duplicate any data in set
// set has a constructor function - set

let set = new Set([1, 2, 3])
set.add(4)
set.add(5)
set.add(1) //skip the duplicate value

// console.log(set);
// console.log(set.size);


// set methods - clear, delete, has(true/false), entries, keys, values
// set.clear()
// set.delete()

// console.log(set);
// console.log(set.keys());
// console.log(set.values());

// let keyIterate = set.values()
// console.log(keyIterate.next());
// console.log(keyIterate.next());


//as this is iterable so we can use for of loop on it
for (let v of set) {
    console.log(v);
}
