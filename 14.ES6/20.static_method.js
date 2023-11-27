// get strings as json format from outside and create an object using static function
// wo don't need to use new keyword for creating an object
// when we don't need to use object values

class Person {
    constructor(name, email) {
        this.name = name
        this.email = email
    }
    print() {
        console.log(this.name, this.email);
    }

    static create(str) {
        let person = JSON.parse(str)
        return new Person(person.name, person.email)
    }
}

let str = '{"name": "MR Masum", "email": "mrmasum@gmail.com"}'

let p1 = Person.create(str)
// p1.print()
console.log(p1);


// use strict in automatically define in class
// if we store any object method into a variable then this keyword refers undefined instead window object

let p2 = p1.print()
console.log(p2);