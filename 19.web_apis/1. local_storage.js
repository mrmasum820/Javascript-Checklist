//web storage API - allows us to store & read data in browser
//web storage - localStorage, sessionStorage

//localStorage - store, read, update and remove data
// no expiry date: data never gets lost even if we close the browser

/*
//store data as key value pair - as string
//setItem(key, value)
localStorage.setItem('username', 'masum');
localStorage.setItem('password', '12345');
*/

/*
//getItem(key)
const userName = localStorage.getItem('username');
const userPassword = localStorage.getItem('password');
console.log(userName, userPassword);
*/

/*
//updateItem(key, value)
localStorage.setItem('username', 'fareen');
localStorage.setItem('password', '12345');
*/

/*
//removeItem(key)
localStorage.removeItem('username');
localStorage.removeItem('password');
*/


//using array, object need to stringfy for set and for get need to parse
const countries = ['Bangladesh', 'USA', 'Canada'];
localStorage.setItem('countries', JSON.stringify(countries));

const countryList = JSON.parse(localStorage.getItem('countries'));
console.log(countryList);

