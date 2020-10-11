const map = new Map();
map.set('question', 'What is the official name of the latest major JavaScript version?');
map.set(1, 'ES5');
map.set(2, 'ES6');
map.set(3, 'ES2015');
map.set(4, 'ES7');
map.set(5, 'ES5');
map.set('correct', 3);

console.log(map);
console.log(map.size);
console.log(map.get('question'));
console.log(map.delete(5));
console.log(map.has(5));
// console.log(map.clear());
console.log(map);

// Maps are iterable
map.forEach((value, key) => console.log(`Key: ${key} - Value: ${value}`));
console.log('----');
for (let [key, value] of map.entries()) {
    console.log(`Key: ${key} - Value: ${value}`)
}
