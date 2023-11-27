//alert
// window.alert('hello');

/*
//confirm
var deleteSomething = confirm('Do you want to delete?');
if (deleteSomething) {
    console.log('you have deleted')
} else {
    console.log('not deleted');
}
*/

//prompt

function showName() {
    var h1 = document.createElement('h1');
    var text;
    var name = prompt('Enter your name');

    if (name == null || name == '') {
        text = 'No name found';
    } else {
        text = 'Welcome ' + name;
    }

    var textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
}

showName();