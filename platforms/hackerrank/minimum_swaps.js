function minimumSwaps(arr) {
    let length = arr.length;
    let swaps = 0;

    for (let i = 0; i < length; i++) {
        if (arr[i] != i + 1) {
            let j = i
            while (j < length) {
                if (arr[j] == i + 1) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    swaps++;
                    j = length;
                }
                j++
            }
        }
    }
    return swaps
}
