/**
 * This is how a js file is executed.
 *
 *              file.js
 *                 |
 *              Parser
 *                 |
 *                AST
 *                 |
 *             Interpreter
 *            /           \
 *      Profiler        Bytecode
 *          |               |
 *      Compiler            |
 *          |               |
 *      Optimized code      |
 *          |               |
 *           \             /
 *             \          /
 *                  CPU
 */



function jsengine(code) {
    return code.split(/\s+/);
}

console.log(jsengine('var number = 5'));

// -------------------------
// Interpreter vs compiler
// -------------------------

function someCalculation(x, y) {
    return x + y;
}

for (let i = 0; i < 5; i++) {
    console.log(someCalculation(5, 4)); // JIT: Just in time compiler: Identify repetitive code.
}


// -------------------------
// Optimized code
// -------------------------

// Inline caching
function Point(x, y) {
    this.x = x;
    this.y = y;
}

let p1 = new Point(1, 2);
let p2 = new Point(3, 2);

p1.x = 1;
p1.y = 2;

// If we assign values in diffrent order than they are in the function/class the code runs slower:
// p2.y = 2;
// p2.x = 1;

// The best way is to assign values as they are in the function/class
p2.x = 1;
p2.y = 2;

// -------------------------
// Memory leak
// -------------------------

// If we delcare a lot of global variables,
// they will stay stored in the memory until the end of the program.
// It dosen´t matter ti we only use them once.

var a = 1;
var b = 1;
var c = 1;
var total = a + b + c;

// The same thing happends with event listeners
// var element = document.getElementById('button');
// element.addEventListener('click', function () { console.log('clicked') });

// -------------------------
// Single threaded - Only one thing
// -------------------------

// alert("You can do anithing on the brower until you close me !");

// -------------------------
// Web API - Event loop
// -------------------------

function tikTok(seconds) {
    setTimeout(() => {
        if (seconds > 0) {
            tikTok(seconds - 1);
            // console.log(".");
        }

    }, 1000)
}
tikTok(5);

// This line is executed after 3 seconds, and the callstack finished the curren tasks.
// The web api enqueue the task when the time is passed
// And the event loop is constantly checking the queue to pass it to the callstack
// Uncomment this:
// setTimeout(() => console.log("The callstack was empty!"), 3000);

// .
// .
// The callstack was empty!
// .
// .
// .

const list = new Array(100).join('1.1').split('.');

function removeItemsFromList() {
    var item = list.pop();

    if (item) {
        // removeItemsFromList()

        // We can send all the recursive calls to the background:
        // So we can handle a list of thousand of items.
        setTimeout(removeItemsFromList, 0);
    } else {
        // Uncomment this:
        // console.log("Finish!");
    }
};

removeItemsFromList();

// -------------------------
// Function vs block scope
// -------------------------

if (true) {
    var globalScope = "Global";
    let blockScope = "Hello";
    console.log(blockScope);
}

console.log(globalScope);

// ReferenceError: blockScope is not defined
// console.log(blockScope);

// -------------------------
// IIFE - Inmediatly invoke function expression.
// -------------------------

//ES5
var iife5 = "iife5";

(function () {
    var iife5inside = "iife5inside";
    console.log(iife5inside);
})();
console.log(iife5);

// ReferenceError: iife5inside is not defined
// console.log(iife5inside);

//ES6
const iife6 = "iife6";
{
    const iife6inside = "hello6";
}
console.log(iife6);

// ReferenceError: iife6inside is not defined
// console.log(iife6inside);

// -------------------------
// This - This is the object that the function is a property of.
// -------------------------

// For web browsers the default object is the window object.
console.log(this);

const obj = {
    name: "Caros",
    sing() {
        console.log('sing', this); // "This" is the object that the function is a property of.

        const anotherFunction = function () {
            console.log("anotherFunction", this) // "This" is the global scope
        }
        anotherFunction();

        const self = this;
        const anotherSelfFunction = function () {
            console.log("anotherSelfFunction", self) // "This" is the global scope
        }
        anotherSelfFunction();

        const anotherArrowFunction = () => {
            console.log("anotherArrowFunction", this) // Arrow: "This" is the object that the function is a property of.
        }
        anotherArrowFunction();

        return anotherFunction.bind(this);

    }
}
obj.sing()(); // // Bind: "This" is the object that the function is a property of.

// -------------------------
// Call, apply, bind
// -------------------------

function friend() {
    console.log("Hi!");
}
friend();
friend.call();
friend.apply();

const wizard = {
    name: "Carlos",
    health: 50,
    heal(percent = 100) {
        return this.health = percent;
    }
}
const archer = {
    name: "Robin Hood",
    health: 30
}

// Heal itself
console.log("wizard", wizard.heal());

// Heal another
console.log("archer", archer.health);
wizard.heal.call(archer, 89);
console.log("archer call", archer.health);

// Apply takes an array of parameters
console.log("archer", archer.health);
wizard.heal.apply(archer, [29]);
console.log("archer apply", archer.health);

// Bind takes the parameters like call, and returns a new function to call it later.
console.log("archer", archer.health);
const healArcher = wizard.heal.bind(archer, 100);
healArcher();
console.log("archer bind", archer.health);

// Another example
const array = [1, 2, 3];

// in this case, the 'this' keyword doesn't matter!
function getMaxNumber(arr) {
    return Math.max.apply(null, arr);
}
console.log('getMaxNumber', getMaxNumber(array));

// -------------------------
// Bind & Currying
// -------------------------
function multiply(a, b) {
    return a * b;
}
let multiplyByTwo = multiply.bind(null, 2);
console.log('multiplyByTwo', multiplyByTwo(4));

// -------------------------
// Context vs Scope
// -------------------------

// Scope is functon based: Visibility of variables.
// Context is about object: How a function is invoked with the value of this.
