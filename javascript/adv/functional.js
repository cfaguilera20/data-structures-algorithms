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

// Unmutable array
const array2 = [1, 2, 3];
function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop();
    return newArray;
}
console.log(array2);
console.log(removeLastItem(array2));
