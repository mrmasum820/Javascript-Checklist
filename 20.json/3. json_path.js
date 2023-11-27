const data = require('./1.create_data.json');

//access data
// console.log(data.students[0].name);

//modify data
// data.students[0].name = "Mahbubur Rahman";
// console.log(data.students[0].name);

//delete data
// delete data.students[0].name;
// console.log(data)


//access data using looping
// for (x in data) {
//     console.log(x);
//     console.log(data[x]);
// }



//conversion data
//client - JSON.stringify(js object) -> json format
//server - JSON.parse(js object) -> object format

const data2 = {
    name: 'masum',
    age: 28
}

// console.log(JSON.stringify(data2));
console.log(JSON.parse('{ "name": "shawan" }'))