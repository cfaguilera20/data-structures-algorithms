clear();
// O(N*T) time | O(1) space
function maxSubarraySum(arr, num) {
    if(num >  arr.length) {
        return null;
    }

    let max = -Infinity;
    let lenght = arr.length;

    for(let i = 0; i < lenght - num + 1; i++) {
        let temp = 0;
        for(let j = 0; j < num; j++) {
            temp += arr[i + j];
        }

        if(temp > max) {
            max = temp;
        }
    }

    return max;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2), 10);
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4), 17);
console.log(maxSubarraySum([4,2,1,6,2], 1), 6);
console.log(maxSubarraySum([4,2,1,6,2], 4), 13);
console.log(maxSubarraySum([], 4), null);
console.log(maxSubarraySumRefactor([1,2,3], 3), 6);


// O(N) time \ O(1) space
function maxSubarraySumRefactor(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if(num >  arr.length) {
        return null;
    }

    for(let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;

}


console.log(maxSubarraySumRefactor([1,2,5,2,8,1,5], 2), 10);
console.log(maxSubarraySumRefactor([1,2,5,2,8,1,5], 4), 17);
console.log(maxSubarraySumRefactor([4,2,1,6,2], 1), 6);
console.log(maxSubarraySumRefactor([4,2,1,6,2], 4), 13);
console.log(maxSubarraySumRefactor([], 4), null);
console.log(maxSubarraySumRefactor([1,2,3], 3), 6);
