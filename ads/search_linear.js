// O(N) time | O(1) space
function search(arr, target) {
    for(let index in arr) {
        if(arr[index] === target ) {
            return +index;
        }
    }

    return -1;
}


console.log(search(['a', 'b', 'c', 'd', 'f'], 'c'), 2);
console.log(search(['a', 'b', 'c', 'd', 'f'], 'g'), -1);
console.log(search([10, 15, 20, 13, 3], 15), 1);


