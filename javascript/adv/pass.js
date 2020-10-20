// Primitives pass by value
console.log('Pass by value');
let number = 5;
let result = number;
result++;
console.log(number, 5);
console.log(result, 6);


// Objects pass by reference
console.log('Pass by reference');
let obj = { a: 1, b: 1, c: 1, d: 1 };
let copy = obj;
copy.a++;
console.log(obj);
console.log(copy);

console.log('Clone');
let clone = Object.assign({}, obj);
clone.a--;
console.log(obj);
console.log(clone);

console.log('Clone with spread');
let cloneSpread = { ...obj };
cloneSpread.a++;
console.log(obj);
console.log(cloneSpread);

// Nested objects keeps its reference.
console.log('Clone nested objects');
obj.a = { value: 1 };
nestedClone = { ...obj };
obj.a.value++;
console.log(obj);
console.log(nestedClone);

console.log('Clone nested objects whit JSON');
let coolClone = JSON.parse(JSON.stringify(obj));
obj.a.value--;
console.log(obj);
console.log(coolClone);
