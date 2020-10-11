// ES5
function Person(firstName, lastName, nationality) {
    this.firstName = firstName;
    this.lastName = lastName || 'NA';
    this.nationality = nationality || 'Mexican';
}

console.log(new Person('Carlos'));
console.log(new Person('John', 'Smith', 'American'));

// ES6
function Person6(firstName, lastName = 'NA', nationality = 'Mexican') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationality = nationality;
}

console.log(new Person6('Carlos'));
console.log(new Person6('John', 'Smith', 'American'));
