// O(nlogn) time | O(logn) space
function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(array, left, right);
        // left
        quickSort(array, left, pivotIndex - 1);

        // right
        quickSort(array, pivotIndex + 1, right);
    }

    return array;
}
function pivot(array, start = 0, end = array.length - 1) {
    let pivot = array[start];
    let swapIdx = start;
    for (let index = start + 1; index <= end; index++) {
        const element = array[index];
        if (pivot > element) {
            swapIdx++;
            swap(swapIdx, index, array);
        }
    }
    swap(swapIdx, start, array);
    return swapIdx;
}

const swap = (i, j, array) => [array[i], array[j]] = [array[j], array[i]];

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
