// Travers DOM Elements

let list = document.getElementById('list')

// let parent = list.parentElement
// console.log(parent);

// let children = list.children
// console.log(children);

// console.log(list.previousElementSibling);
// console.log(list.nextElementSibling);

// console.log(list.firstElementChild);
// console.log(list.lastElementChild);


//loop through HTMLCollections(array like data structure)
// to convert listItems to an array

let listItem = document.getElementsByTagName('li')

// let listItems = Array.from(listItem)
// let listItems = Array.prototype.slice.apply(listItem)
let listItems = [...listItem]

listItems.forEach((li, index) => {
    let text = li.innerHTML
    li.innerHTML = `${index + 1}. ${text}`
})