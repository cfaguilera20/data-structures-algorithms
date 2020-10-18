/**
 * It can be solved with recusrion using fibbonaci.
 * For n = 5 we have to calculate the fib(n + 1)
 *                 5
 *            /         \
 *          4            3
 *       /     \        /  \
 *      3       2      2    1
 *     / \     / \    / \
 *    2   1   1   0  1   0
 *   / \
 *  1   0
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    return fib(n + 1);
};

var fib = function (n) {
    if (n <= 1)
        return n;
    return fib(n - 1) + fib(n - 2);
}

console.log(climbStairs(1), 1);
console.log(climbStairs(2), 2);
console.log(climbStairs(3), 3);
console.log(climbStairs(4), 5);
console.log(climbStairs(5), 8);
