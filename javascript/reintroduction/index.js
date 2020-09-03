// Numbers

console.log(3 / 2); // 1.5, not 1
console.log(Math.floor(3 / 2)); // 1

// So an apparent integer is in fact implicitly a float.

console.log(0.1 + 0.2 == 0.30000000000000004);

// Snteger values are treated as 32-bit ints

console.log(Math.sin(3.5));
var r = 10;
var circumference = 2 * Math.PI * r;
console.log(circumference);

parseInt('123', 10); // 123
parseInt('010', 10); // 10

var inside = "inside";
let outside = "outside";
function hello(name) {
    inside = "inside modified";
    outside = 1;
    let prefix = "Hello, ";
    console.log( prefix + name);
}


hello("carlos");
console.log(inside);
console.log(outside);

console.log('var works in the function block: ');
for(var j = 0; j < 10; j++) {
    console.log(j);
}
console.log(typeof j)

console.log('let only works in the code block: ');
for(let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(typeof i);
