function bubbleSort(array) {

    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(j, j + 1, array);
            }
        }
    }
    return array;
}

function swap(i, j, array) {
    [array[i], array[j]] = [array[j], array[i]];
}

console.log(bubbleSort([2, 1, 4, 5, 3]).toString() == [1, 2, 3, 4, 5].toString());
console.log(bubbleSort([2, 1, 4, -3, 5, 3]).toString() == [-3, 1, 2, 3, 4, 5].toString());
