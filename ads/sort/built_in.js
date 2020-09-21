// Built in sort, sorts alphabetically by default.
let arr1 = [21, 6, 5, 4, 19, 10, 0];
console.log(arr1.sort());

// Sorting ascending
console.log(arr1.sort((a, b) => {
    console.log(`a(${a}) - b(${b}): ${a - b}`);
    return a - b
}));


