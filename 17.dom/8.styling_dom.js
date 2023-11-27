// style is a object and we need to follow the naming convention witch is different from css style

let title = document.getElementById('title')
// title.style.color = 'orange'
// title.style.color = 'rgb(255, 0, 0)'

// title.style.color = '#f00'
// title.style.fontSize = '2rem'
// title.style.backgroundColor = '#000'

let styleObj = {
    background: '#000',
    fontSize: '20px',
    color: 'white'
}

// we need to use Object.assign to add with object
// Object.assign(title.style, styleObj)

let list = document.getElementById('list');

[...list.children].forEach(li => Object.assign(li.style, styleObj))

//console.log(title.style)