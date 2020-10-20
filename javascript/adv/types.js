// Primitive: Data, represent a single value.
// These have object wrappers.

// -------------------------
// Numbers
// -------------------------
console.log(typeof 5);

// -------------------------
// Booleans
// -------------------------
console.log(typeof true);
console.log(typeof false);

// -------------------------
// Strings
// -------------------------
console.log(typeof "Hello there!");

// -------------------------
// Undefined - Absence of definition
// -------------------------
let name;
console.log(typeof undefined);
console.log(typeof name);

// -------------------------
// Null - Absence of value
// -------------------------
let middleName = null;
console.log(typeof null); // Object?
console.log(typeof middleName); // Object?

// -------------------------
// Symbol
// -------------------------
console.log(typeof Symbol("Hey"));

// Non-Primitive

// -------------------------
// Objects
// -------------------------
console.log(typeof {});

// -------------------------
// Array
// -------------------------
console.log(typeof []);

// -------------------------
// Functions
// -------------------------
console.log(typeof function () { });
