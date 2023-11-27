// if any situation comes either try or block block works and need to be executed any code then we can keep it in finally block

try {
    console.log('I am line 1');
    // throw new Error('I am custom made error')
    console.log('I am line 2');
    console.log('I am line 3');
} catch (e) {
    console.log(e.message);
} finally {
    console.log('I am finally block');
}


//optional catch binding
// catch{console.log('Custom error message')}