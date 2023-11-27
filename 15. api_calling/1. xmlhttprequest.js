console.clear();

//event - onload(), onerror()
//property - response, responseText, responseType, responseURL, status, statusText
//function - open(), send(), setRequestHeader()

const makeRequest = (method, url, data) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.setRequestHeader('Content-type', 'application/json'); // for post method

        xhr.onload = () => {
            let data = xhr.response;
            // console.log(xhr.status);
            // console.log(xhr.statusText);
            console.log(JSON.parse(data)); // convert json to javascript object
        }

        xhr.onerror = () => {
            console.log('error is here');
        }

        xhr.send(JSON.stringify(data));  //send data to server make sure the data will be json format - JSON.stringify(data)
    })
}

const getData = () => {
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
        .then(res => console.log(res));
}

getData();


/*
//get data
const getData = () => {
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
}

//post data
const sendData = () => {
    makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1
    });
}

//update data
const updateData = () => {
    makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        id: 1,
        title: 'updated title',
        body: 'updated body',
        userId: 1,
    });
}

// update single data - use patch method
const updateSingleData = () => {
    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
        title: 'single title updated'
    });
}

//delete data
const deleteData = () => {
    makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');
}

// getData();
// sendData();
// updateData();
// updateSingleData();
deleteData();
*/