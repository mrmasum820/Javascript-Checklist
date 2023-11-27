// tough to manage multiple callbacks that occurs callback hell

function getRequest(url, callback) {
    const xhr = new XMLHttpRequest()
    xhr.open('get', url)

    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let response = JSON.parse(xhr.response)
                callback(null, response)  // first argument null for handle error
            } else {
                callback(xhr.status, null)
            }
        }
    }

    xhr.send()
}

const baseURL = 'https://jsonplaceholder.typicode.com/users'

getRequest(`${baseURL}/posts/1`, (err, res) => {
    if (err) {
        throw new Error('Error occured')
    }

    let { userId } = res

    getRequest(`${baseURL}/users/${userId}`, (err, res) => {
        if (err) {
            throw new Error('Error occured')
        }

        getRequest(`${baseURL}/posts/1/comments/${res.id}`, (err, res) => {
            if (err) {
                console.log('Error occured');
            }

            console.log(res);
        })
    })
})