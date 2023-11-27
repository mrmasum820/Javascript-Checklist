// if javascript code didn't give an build-in error rather it will give an answer(undefined, NaN) then we can handle it using if else

function changeToInt(v) {
    let result = Number.parseInt(v)
    if (!result) {
        return 'Please provide a value which is able to convert into Integer'

    }
    return result
}

// let result = changeToInt({})
// let result = changeToInt([])
let result = changeToInt('something')
console.log(result);
