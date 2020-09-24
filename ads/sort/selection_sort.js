function selectionSort(array) {
    for(let i = 0; i < array.length; i++) {
        smallest = i;
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[smallest]) {
                smallest = j;
            }
        }
        if(i !== smallest) {
            swap(i, smallest, array);
        }
    }

    return array;
}

function swap(i, j, array) {
    [array[i], array[j]] = [array[j], array[i]];
}

console.log(selectionSort([2, 1, 4, 5, 3]).toString() == [1, 2, 3, 4, 5].toString());
console.log(selectionSort([2, 1, 4, -3, 5, 3]).toString() == [-3, 1, 2, 3, 4, 5].toString());

