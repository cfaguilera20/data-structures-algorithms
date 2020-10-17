/**
 * Exclusive operator works like this:
 *
 * 0 ^ 0 = 0
 * 0 ^ 1 = 1
 * 1 ^ 0 = 1
 * 1 ^ 1 = 0
 *
 * So for example if we have an array like this:
 * [1,1,3,2,2]
 *
 * Represented in binary:
 *
 * [01,     01,     11,     10,     10]
 *  01  ^   01
 *          00  ^   11
 *                  11  ^   10
 *                          01  ^   10
 *                                  11
 * --------------------------------------
 * The rest is 11 => 3
 * So the number three is the only number that dosen't have a pair in the array.
 *
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let exlusive = nums[0];

    for (let i = 1; i < nums.length; i++) {
        exlusive ^= nums[i];
    }

    return exlusive
};

console.log(singleNumber([1, 1, 3, 2, 2]), 3);
console.log(singleNumber([1, 1, 2, 4, 5, 2, 3, 4, 5]), 3);
