function mergeSortedArrays(arrays) {
    let result = [];
    for (let i = 0; i < arrays.length; i++) {
        result = mergeArrays(result, arrays[i]);
    }

    return result;
}

function mergeArrays(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++
        }
    }

    for (let n = i; n < arr1.length; n++) {
        result.push(arr1[n]);
    }

    for (let n = j; n < arr2.length; n++) {
        result.push(arr2[n]);
    }

    return result;
}

console.log(mergeSortedArrays([
    [1, 5, 9, 21],
    [-1, 0],
    [-124, 81, 121],
    [3, 6, 12, 20, 150]
]), [-124, -1, 0, 1, 3, 5, 6, 9, 12, 20, 21, 81, 121, 150])
