// ES5
const year = 1986;

// This is an example of IIFE
(function (year) {
    let age = (new Date()).getFullYear() - year;
    console.log(age);
})(year);

// The variable age is not defined here.
console.log(typeof age);

// ES6
{
    let age6 = (new Date()).getFullYear() - year;
    console.log(age6);
}

console.log(typeof age6);
