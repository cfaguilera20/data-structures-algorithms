clear();
function search(arr, num) {
    let min = 0;
    let max = arr.length - 1;

    while(min <= max) {
        let middle = Math.floor((min + max) / 2);

        if(arr[middle] === num) {
            return middle;
        } else if(arr[middle] > num){
            max = middle - 1;
        } else {
            min = middle + 1;
        }
    }

    return -1
}

console.log(search([1,2,3,4,5,6,8,9], 8), 6);
console.log(search([1,2,3,4,5,6,8,9], 7), -1);
console.log(search([1,2,3,4,5,6,8,9], 1), 0);
