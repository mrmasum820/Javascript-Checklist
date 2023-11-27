// async await / async function
// which is a function and by default return a promise and also resolve

/*
function myPromise() {
    return Promise.resolve('Test value')
}

console.log(myPromise());
*/

/*
async function test() {
    return 'Test value'
}
test().then(v => console.log(v))
*/


// resolve in async function
/*
let p1 = new Promise(resolve => {
    setTimeout(resolve, 5000, 'Test value')
})

async function myAsyncFunc() {
    // p1.then(v => console.log(v))
    let v = await p1
    console.log(v);
    console.log('test');
}

myAsyncFunc();
*/


// async await using fetch api
/*
async function fetchData() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await res.json()

        // console.log(data);
        let names = data.map(user => user.name)
        console.log(names);
    } catch (e) {
        console.log(e.message);
    }
}

fetchData()
*/


//for handling multiple promises
let promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]

async function promiseAll() {
    let result = await Promise.all(promises)
    console.log(result);
}

promiseAll()