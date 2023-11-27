// synchronous means that we can only execute one thing at a time
var a = 10
var b = 20

var result = a + b
console.log(result);

var response = storeResult(result)  //waiting
if (response.success) {
    console.log('Successfully stored');
} else {
    console.log('Data store failed');
}


// asynchronous means that you can execute multiple at a time and don't have to finish executing the current thing in order to move on to next one
var a = 10
var b = 20

var result = a + b
console.log(result);

var response = storeResult(result)  //waiting silently
if (response.success) {
    console.log('Successfully stored');
} else {
    console.log('Data store failed');
}