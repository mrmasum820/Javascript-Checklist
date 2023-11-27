// Id, ClassName, TagName, Name
/*
let title = document.getElementById('title')
console.log(title);

let paragraphs = document.getElementsByClassName('lead')
console.log(paragraphs);  //HTMLCollections(2)

let lists = document.getElementsByTagName('li')
console.log(lists);  //HTMLCollections(3)

let listItemOne = document.getElementsByName('list-item-one')
console.log(listItemOne);  //NodeList(1)
*/


/*
// css selector(queryselector)
let title = document.querySelector('#title')
console.log(title);

// querySelector return first element defining class
let paragraphs = document.querySelectorAll('.lead')  //NodeList(2)
console.log(paragraphs);

let lists = document.querySelectorAll('li')  //NodeList(3)
console.log(lists);

let listItemOne = document.querySelector('[name ^= "list-item-one"]')
console.log(listItemOne);
*/


//difference between getElements Method vs query selector
let li1 = document.getElementsByTagName('li')  //element
let li2 = document.querySelectorAll('li')  //node
console.log(li1.constructor.name);  //HTMLCollection
console.log(li2.constructor.name);  //NodeList

let ul = document.querySelector('ul')
console.log(ul.children);
console.log(ul.childNodes);