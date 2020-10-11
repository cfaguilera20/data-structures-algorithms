// First iteration
// [2, 1, 4, 5, 3]
//   \/
// [1, 2, 4, 5, 3]
//      \/
// [1, 2, 4, 5, 3]
//         \/
// [1, 2, 4, 5, 3]
//            \/
// [1, 2, 4, 3, 5] <- We have the higher number at the end.

// O(N^2) time | O(1) space
function bubbleSort(array) {
    let noSwaps;
    for (let i = array.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                noSwaps = false;
                swap(j, j + 1, array);
            }
        }
        if(noSwaps) break;
    }
    return array;
}

function swap(i, j, array) {
    [array[i], array[j]] = [array[j], array[i]];
}

console.log(bubbleSort([2, 1, 4, 5, 3]).toString() == [1, 2, 3, 4, 5].toString());
console.log(bubbleSort([2, 1, 4, -3, 5, 3]).toString() == [-3, 1, 2, 3, 4, 5].toString());
