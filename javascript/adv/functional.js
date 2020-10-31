//-------------------------------------------------------------
// Pure functions: No side efects - input -> same output
//-------------------------------------------------------------

const array = [1, 2, 3];

// This function has side efects, modify something outside of itself:
function pop(arr) {
    arr.pop();
}
pop(array);
console.log(array);

// Pure functions
// Unmutable array
const array2 = [1, 2, 3];
function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop();
    return newArray;
}

function multiplyBy2(arr) {
    return arr.map(item => item * 2);
}

// No side effects
console.log(array2);
console.log(removeLastItem(array2));
console.log(multiplyBy2(array2));

// Not pure function, affects the something outside
function a() {
    console.log('hi');
}
a();

function b(num1, num2) {
    return num1 + num2
}
console.log(b(3, 4));

function c(num) {
    return num * 2;
}

// Referential transparency
console.log(c(b(3, 4)));
console.log(c(7));

//---------------------------
// Idempotence
//---------------------------
function notGood(num) {
    return Math.random(num)
}
console.log('notGood', notGood(5));
console.log('Math.abs', Math.abs(-50), Math.abs(Math.abs(-50))); // Always thje same input


//-------------------------------------------------------------------------------
// Imperative (Best for machines) vs Declarative (Best for humans)
//-------------------------------------------------------------------------------

// Imperative
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Declarative
[1, 2, 3, 4, 5].forEach(item => console.log(item));

// jQuery is imperative
// Vue, Angular, React are declarative

//------------------------------------------------
// Immutability - Not changing the data (state)
//------------------------------------------------

const obj = { name: 'Carlos' };

function clone(obj) {
    return { ...obj }; // This is pure, but only to one level, not for nested objects.
}

function updateName(obj, name) {
    const objClone = clone(obj);
    objClone.name = name;
    return objClone;
}

console.log(updateName(obj, "Carlos Aguilera"));
console.log(obj);

//------------------------------------------------
// HOF (Higher Order Functions) - Closures
//------------------------------------------------

// HOF
const hof = () => () => 5;
console.log(hof()());

// Closures
const closure = function () {
    let count = 0;

    return function increment() {
        return ++count;

    }
}
const incrementFn = closure();
console.log('incrementFn', incrementFn());
console.log('incrementFn', incrementFn());

//------------------------------------------------
// Currying
//------------------------------------------------

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const curriedMultiplyBy5 = curriedMultiply(5);
console.log('curriedMultiply', curriedMultiply(5)(3));
console.log('curriedMultiplyBy5', curriedMultiplyBy5(3));

//------------------------------------------------
// Partial Application
//------------------------------------------------
const multiply2 = (a, b, c) => a * b * c;
const partialMultiplyBy5 = multiply2.bind(null, 5);
console.log('partialMultiplyBy5', partialMultiplyBy5(4, 10));

//------------------------------------------------
// Compose: data -> fn -> data -> fn -> ...
//------------------------------------------------

const compose = (f, g) => (data) => f(g(data));
const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3AndAbosulte = compose(multiplyBy3, makePositive);
console.log('multiplyBy3AndAbosulte', multiplyBy3AndAbosulte(-50));

//------------------------------------------------
// Pipe
//------------------------------------------------
const pipe = (f, g) => (data) => g(f(data));

// Diff
fn1(fn2(fn3(50)));
// compose(fn1, fn2, fn3)(50);
// pipe(fn3, fn2, fn1)(50);
