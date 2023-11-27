//fetch() has replaced XMLHttpRequest
//fetch() - global method for making HTTP Request
// 2 ways to call - then, async await

//+ fetch() is easy to use, returns a promise
//- returned promise can only handle network error, doesn't support all the older browser

/*
//using then
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
})
    .then((res) => {
        // console.log(res);
        if (!res.ok) {
            throw new Error(`Error : ${res.status}`);
        }
        return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => {
        console.log(err);
    })
*/


//using async await
const makeRequest = async (url, config) => {
    const res = await fetch(url, config);
    if (!res.ok) {
        const message = `Error : ${res.status}`
        throw new Error(message);
    }
    const data = await res.json();
    return data;
}

const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts')
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
}

const sendData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
}

// getData();
sendData();