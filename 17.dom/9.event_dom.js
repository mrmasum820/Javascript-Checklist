// Event - anything occures when scrolling, click a button, move section and many more
// Event handling - after event what will be happend which is called event handling

let btn = document.getElementById('btn')

// btn.onclick = function (e) {
//     console.log(e);
// }

let list = document.getElementById('list')

btn.addEventListener('click', function (e) {
    let item = list.lastElementChild.cloneNode(true)
    item.innerHTML = 'Newly Added Item'
    list.appendChild(item)
})



let box = document.getElementById('box')
// box.onmousemove = function(e){}
box.addEventListener('mousemove', function (e) {
    // console.log(e);  //clientX, clientY - according to document, offsetX, offsetY - according to box
    document.getElementById('x-value').innerHTML = e.offsetX
    document.getElementById('y-value').innerHTML = e.offsetY

    if (e.offsetX === 50 && e.offsetY === 50) {
        alert('50 50')
    }
})