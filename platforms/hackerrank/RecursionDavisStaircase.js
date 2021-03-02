/**
 * https://www.hackerrank.com/challenges/ctci-recursive-staircase/problem
 */
function stepPerms(n, memo = {0: 0, 1: 1, 2: 2, 3: 4})  {
    if(memo[n]) {
        return memo[n]; 
    }
    
    memo[n] = stepPerms(n - 1, memo) + stepPerms(n - 2, memo) + stepPerms(n - 3, memo);
    return memo[n];
}
