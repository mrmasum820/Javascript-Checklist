// BOM - Timing events
// setTimeOut(), setInterval()

// setTimeout(() => {
//     console.log('message shown after 2 seconds');
// }, 2000)

// setTimeout(displayMessage, 2000);
// function displayMessage() {
//     console.log('message shown');
// }


var saveBtn = document.querySelector('#save-btn');
var message = document.querySelector('.message');

/*
saveBtn.addEventListener('click', displayMessage);
function displayMessage() {
    message.textContent = 'Log in successfull';

    setTimeout(() => {
        message.textContent = '';
    }, 2000)
}
*/

/*
saveBtn.addEventListener('click', display);
function display() {
    var count = 1;
    message.textContent = count;

    setInterval(() => {
        count++;
        message.textContent = count;
    }, 1000)
}
*/


//create a clock
saveBtn.addEventListener('click', startClock);

function startClock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    var time = hours + ':' + minutes + ':' + seconds;

    message.textContent = time;

    setInterval(startClock, 1000);
}


function formatTime(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}