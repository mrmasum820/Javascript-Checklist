// we can do asynchronous tasks in promise. use then when resolved or use catch when error occured
// promise is a constructor function
// promise have 2 parameter 1.resolve, 2.reject
// promise has 2 status 1.pending, 2.resolve

/*
let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'One')
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Two')
})

// console.log(p1);
// console.log(p2);

p1.then((v) => {
    console.log(v);
}).catch((e) => {
    console.log(e);
})

p2.then((v) => {
    console.log(v);
})
*/


function getIphone(isPassed) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPassed) {
                resolve('I have got an iphone')
            } else {
                reject(new Error('you have failed'))
            }
        }, 2000)
    })
    return promise
}

// console.log(getIphone(true))
getIphone(false)
    .then((res) => {
        console.log(res);
    })
    .catch((e) => {
        // console.log(e);
        console.log(e.message);
    })