// ES5
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.getAge = function () {
    return new Date().getFullYear() - this.yearOfBirth;
}

var person5 = new Person5('Carlos Aguilera', 1986, 'Software Engineer');
console.log(person5.getAge());

/**
 * ES6
 * Classes are not hoisted, it has to be declared before use it.
 * We can only add methods to classes not properties.
 */
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    getAge = () => new Date().getFullYear() - this.yearOfBirth;

    static greeting() {
        console.log('Hey there !')
    }
}

const person6 = new Person6('Carlos Aguilera', 1986, 'Software Engineer');
console.log(person6.getAge());
Person6.greeting();

/**
 * Subclasses - Inheritance
 */

// ES5
var Athlete5 = function (name, yearOfBirth, job, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.medals = medals;
}

// First connect prototypes
Athlete5.prototype = Object.create(Person5.prototype);

// Then add new methods
Athlete5.prototype.wonMedal = function () {
    return ++this.medals;
}
var athlete5 = new Athlete5('Carlos Aguilera', 1986, 'Software Engineer', 8);
console.log(athlete5);
console.log(athlete5.__proto__);
console.log(athlete5.getAge());
console.log(athlete5.wonMedal());

// ES6
class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, medals) {
        super(name, yearOfBirth, job);
        this.medals = medals;
    }

    wonMedal() {
        return ++this.medals;
    }
}

var athlete6 = new Athlete6('Carlos Aguilera', 1986, 'Software Engineer', 8);
console.log(athlete6);
console.log(athlete6.__proto__);
console.log(athlete6.getAge());
console.log(athlete6.wonMedal());
