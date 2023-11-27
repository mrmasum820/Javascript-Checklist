let postForm = document.getElementById('post-form')
let posts = document.getElementById('posts')
const URL = 'https://jsonplaceholder.typicode.com/posts'

postForm.addEventListener('submit', function (e) {
    e.preventDefault()

    let title = this.title.value || undefined
    let body = this.body.value || undefined

    if (title && body) {
        let postObj = {
            userId: 100,
            title,
            body
        }

        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Appliation/JSON'
            },
            body: JSON.stringify(postObj)
        })
            .then(res => res.json())
            .then(post => {
                let item = listItemGenerator(post)
                posts.appendChild(item)
                this.reset()
            })

    } else {
        alert('Please provide every details')
    }
})

function listItemGenerator(item) {
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = `${item.id}. ${item.title} By user Id - ${item.userId}`

    return li
}