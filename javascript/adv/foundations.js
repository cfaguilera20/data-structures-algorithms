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
setTimeout(() => console.log("The callstack was empty!"), 3000);

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
        console.log("Finish!");
    }
};

removeItemsFromList();

// -------------------------
// Function vs block scope
// -------------------------

if(true) {
    var globalScope = "Global";
    let blockScope = "Hello";
    console.log(blockScope);
}

console.log(globalScope);

// ReferenceError: blockScope is not defined
// console.log(blockScope);
