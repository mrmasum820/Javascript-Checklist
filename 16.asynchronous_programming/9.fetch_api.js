// implement fetch api in javascript using promise
// fetch api return a promise
// if we return response.json() then we will get another promise


const BASE_URL = 'https://jsonplaceholder.typicode.com/users'
/*
fetch(`${BASE_URL}/users/1`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        return Promise.resolve('something')
    })
    .then(str => {
        console.log(str);
        return Promise.resolve('another something')
    })
    .then(another => {
        console.log(another);
    })
    .catch(e => {
        console.log(e);
    })
*/

/*
//callback hell
getRequest(function(){
    getRequest(function(){
        getRequest(function(){
            getRequest(function(){

            })
        })
    })
})
*/

// to get the value as promise easily
function getRequest(url, callback) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('get', url)

        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let response = JSON.parse(xhr.response)
                    resolve(response)  //use resolve for get the response
                } else {
                    // reject(xhr.status)
                    reject(new Error('Error occured'))  //use reject for custom error message
                }
            }
        }

        xhr.send()
    })
}
getRequest(`${BASE_URL}/users/1`)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err.message);
    })