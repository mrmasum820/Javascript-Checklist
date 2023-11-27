//session storage is temporary - when the browser tab is closed then the storage is deleted
//storage max 5mb
//methods are same as localStorage - for remove use clear()


// sessionStorage.setItem('user1', 'MR Masum');
// sessionStorage.setItem('user2', 'Shawa');

// const userName1 = sessionStorage.getItem('user1');
// console.log(userName1);

// sessionStorage.removeItem('user2');

// sessionStorage.clear();



const user = { id: 101, name: 'masum' };

sessionStorage.setItem('user', JSON.stringify(user))

const userInfo = JSON.parse(sessionStorage.getItem('user'));
console.log(userInfo);