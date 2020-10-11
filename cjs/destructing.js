// ES5
var person5 = ['carlos', 34];
var name5 = person5[0];
var age5 = person5[1];
console.log(name5, age5);

// ES6
const person6 = ['Carlos Array', 34];

let [name6, age6] = person6;
console.log(name6, age6);

const object6 = {
    name: 'Carlos Object',
    age: 34,
};

// Extract the object values on variables.
let { name61, age61 } = object6;
console.log(name6, age6);

// Extract the values on a specific variables.
let { name: n6, age: a6 } = object6;
console.log(n6, a6);

let scores = [100, 99, 98, 98, 96, 90, 88, 88, 70];
let [top1, top2, top3, ...spread] = scores;
console.log('Top scores:', top1, top2, top3);
console.log('Spread scores:', spread);


const sum = (...rest) => {
    let total = 0;
    for (let i of rest) {
        total += i;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5));

const mult = (base, ...rest) => {
    let total = [];
    for (let i of rest) {
        total.push(base * i);
    }
    return total;
}

console.log(mult(2, 1, 2, 3, 4, 5));
