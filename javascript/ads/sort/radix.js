// O(nk) time | O(n + k) space
function radixSort(nums) {
    let mostDigitsCount = mostDigits(nums);
    for (let k = 0; k < mostDigitsCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);

        for (let i = 0; i < nums.length; i++) {
            let bucket = getDigit(nums[i], k);
            digitBuckets[bucket].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function mostDigits(array) {
    let max = -Infinity;
    for (num of array) {
        max = Math.max(max, digitCount(num));
    }
    return max
}

function digitCount(num) {
    if (num === 0)
        return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(radixSort([2, 1, 4, 5, 3]).toString() == [1, 2, 3, 4, 5].toString());
console.log(radixSort([2, 1, 4, 13, 5, 3]).toString() == [1, 2, 3, 4, 5, 13].toString());
