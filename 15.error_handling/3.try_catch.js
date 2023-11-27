//try catch

function makeWords(text) {
    try {
        let str = text.trim()
        let words = str.split(' ')
        return words
    } catch (e) {
        // console.log(e.message);  //e -> object
        console.log('Please provide a valid text');
    }
    // let str = text.trim()
    // let words = str.split(' ')
    // return words
}

// let words = makeWords('I am MR Masum')
let words = makeWords(86)
console.log(words);