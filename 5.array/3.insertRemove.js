var arr = [1, 2, 3, 4, 5, 6, 7, 8]

//insert 9 to index 3
// arr[3] = 9 // removed item 3 and add new item

//push -> add the item in last
//unshift
// arr.unshift(9)

//splice
// arr.splice(3, 0, 9, 10)



//remove data from an array
// arr[3] = undefined

//arr.pop()
// arr.shift()

//splice
// arr.splice(3, 2)

//splice -> also update a item
arr.splice(3, 1, 44)

console.log(arr);