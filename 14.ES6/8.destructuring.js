// object destructuring
let person = {
    name: 'MR Masum',
    email: 'mrmasum@gmail.com',
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

// let name = person.name
// let email = person.email

// let { name, email } = person
let { name, email, address: { city, country } } = person

// console.log(name, email, city, country);


//array destructuring

let arr = [1, 2, 3, 4, 5]

let [first, second, , , last] = arr

console.log(first, second, last);