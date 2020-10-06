const year = 1986;

// This is an example of IIFE
(function (year) {
    let age = (new Date()).getFullYear() - year;
    console.log(age);
})(year);

// The variable age is not defined here.
console.log(typeof age);
