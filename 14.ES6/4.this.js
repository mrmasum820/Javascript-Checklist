// this in arrow function return parent function

// function testMe() {
//     console.log(this)
// }
// testMe.call({});   // will show empty object because of call method otherwise it will return window object

let testMe = () => {
    console.log(this);
}
testMe()


// let obj = {
//     name: 'MR Masum',
//     print: function() {
//         setTimeout(function(){
// console.log(`Hello, ${this.name}`);
//         }.bind(this), 1000)
//     }
// }

// obj.print();

let obj = {
    name: 'MR Masum',
    print: function () {
        setTimeout(() => {
            // console.log(this);
            console.log(`Hello, ${this.name}`);
        }, 1000)
    }
}

obj.print()