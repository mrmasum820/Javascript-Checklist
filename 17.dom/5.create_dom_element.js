/*
let li = document.createElement('li')
li.className = 'list-group-item'
li.setAttribute('title', 'I am fourth item')
li.innerHTML = 'Four'

let list = document.getElementById('list')
list.appendChild(li)
*/

let li = createElement('li', 'list-group-item', 'Four')
li.setAttribute('title', 'I am Fourth item')

let list = document.getElementById('list')
list.appendChild(li)

let p1 = createElement('p', 'lead', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, ipsam suscipit. Excepturi sunt deleniti explicabo, officiis cum suscipit harum optio dolor modi eveniet. Iusto expedita excepturi illum itaque id accusantium impedit, vel, nam animi et ipsam adipisci, iste quos. Consequuntur nemo, blanditiis ullam nihil doloremque voluptatum molestias qui fugiat natus.')

let p2 = createElement('p', 'lead', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, ipsam suscipit. Excepturi sunt deleniti explicabo, officiis cum suscipit harum optio dolor modi eveniet. Iusto expedita excepturi illum itaque id accusantium impedit, vel, nam animi et ipsam adipisci, iste quos. Consequuntur nemo, blanditiis ullam nihil doloremque voluptatum molestias qui fugiat natus.')

let div = createElement('div')
append(div, [p1, p2])

// let container = document.getElementById('container')
// container.appendChild(div)

list.insertAdjacentElement('beforebegin', div)  //afterbegin, beforeend, afterend

function createElement(tagName, className, innerHTML) {
    let tag = document.createElement(tagName)
    tag.innerHTML = innerHTML || ''
    tag.className = className || ''

    return tag
}

function append(parent, children) {
    children.forEach(child => parent.appendChild(child))
}

