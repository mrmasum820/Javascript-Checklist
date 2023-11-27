let li = createElement('li', 'list-group-item', 'Four')
li.setAttribute('title', 'I am Fourth item')

let list = document.getElementById('list')
list.appendChild(li)

function createElement(tagName, className, innerHTML) {
    let tag = document.createElement(tagName)
    tag.innerHTML = innerHTML || ''
    tag.className = className || ''

    return tag
}

function append(parent, children) {
    children.forEach(child => parent.appendChild(child))
}

//update dom element
let firstChild = list.firstElementChild

setTimeout(() => {
    firstChild.innerHTML = firstChild.innerHTML + '(Modified)'
    firstChild.style.backgroundColor = 'blue'
    firstChild.style.color = 'white'
}, 3000)

/*
// remove dom element
setTimeout(() => {
    list.lastChild.remove()
}, 2000)
*/


//clone node
let lastItem = list.lastElementChild.cloneNode(true) //for deeply clone we have to give true
lastItem.innerHTML = 'Five'
list.appendChild(lastItem)



//get attribute
// console.log(list.attributes);  //NameNodeMap
// console.log(list.getAttributeNames());
// console.log(list.getAttributeNode('class'));
// console.log(list.getAttribute('id'));  //direct value

// console.log(list.classList);  //DomTokenList
// console.log(list.className);  //direct value

// lastItem.id = 'last-item'
lastItem.setAttribute('id', 'last-items')


//create attributes
let attr = document.createAttribute('title')
attr.value = 'I am title'

lastItem.setAttributeNode(attr)