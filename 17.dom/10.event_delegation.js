// event deligation - add event in parent

let btn = document.getElementById('btn')

let list = document.getElementById('list')


btn.addEventListener('click', function (e) {
    let item = list.lastElementChild.cloneNode(true)
    item.innerHTML = 'Newly Added Item'
    list.appendChild(item)
});

// event deligation problem
/*
[...list.children].forEach(li => {
    li.onclick = function (e) {
        // console.log(e.target);
        e.target.remove()
    }
})
*/

list.addEventListener('click', function (e) {
    // console.log(list.contains(e.target));
    if (list.contains(e.target)) {
        e.target.remove()
    }
})