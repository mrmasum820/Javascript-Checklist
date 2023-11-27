// custom error made by ourself
// if error occurs in try block then only catch block will called and executed

try {
    console.log('I am line 1');
    throw new Error('I am custom made error')
    console.log('I am line 2'); //those codes will not be executed after error
    console.log('I am line 3');
} catch (e) {
    console.log(e.message);
}