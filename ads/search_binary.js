// O(log n) time | O(1) space
function search(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let middle;

    while(low <= high) {
        middle = Math.floor( (low + high) / 2);

        if(arr[middle] == target) {
            return middle;
        } else if(arr[middle] > target) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }
    }
    return -1;
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), 0);
console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15), -1);
console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 4);


