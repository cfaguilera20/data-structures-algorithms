function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

function makeMultiplier(x) {
    return function (y) {
        return x * y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
var mult10 = makeMultiplier(10);
var mult2 = makeMultiplier(2);

console.log(add5(2));  // 7
console.log(add10(2)); // 12

console.log(mult10(2));  // 20
console.log(mult2(2)); // 4

