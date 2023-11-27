//axios is a js library
//it helps to make request from browser, node.js

//easy to use, support all modern browser including IE, returns promise, throws error superbly, no need to header set

//axios(config)
//axios(url, [,config])

//axios.get(url, [,config])
//axios.post(url, [,config])
//axios.put(url, [,config])
//axios.patch(url, [,config])
//axios.delete(url, [,config])

// axios returns response object - data, status, statusText, headers, config

// console.log(window);

/*
//get method
axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
*/

/*
//post method
axios
    .post('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
*/

/*
//put method
axios
    .put('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'put',
        body: JSON.stringify({
            id: 1,
            title: 'fooma',
            body: 'barma',
            userId: 1,
        })
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
*/

/*
//patch method
axios
    .patch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'patch',
        body: JSON.stringify({
            title: 'foomaaaaaaa',
        })
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
*/

/*
//delete method
axios
    .delete('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'delete'
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
*/


// using async await
const makeRequest = async (config) => {

    return await axios(config)
}

// const getData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts')
//         .then((res) => console.log(res.data))
//         .catch((err) => console.log(err))
// }

// const createData = () => {
//     makeRequest({
//         url: 'https://jsonplaceholder.typicode.com/posts',
//         method: 'post',
//         data: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//     })
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
// }

// const updateData = () => {
//     makeRequest({
//         url: 'https://jsonplaceholder.typicode.com/posts/1',
//         method: 'put',
//         data: JSON.stringify({
//             id: 1,
//             title: 'fooma',
//             body: 'barma',
//             userId: 1,
//         }),
//     })
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
// }

const deleteData = () => {
    makeRequest({
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: 'delete'
    })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
}

// getData();
// createData();
// updateData();
deleteData();