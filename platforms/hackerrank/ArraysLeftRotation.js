/**
 * https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem
 */
function rotLeft(a, d) {
    let rotate = d > a.length ? a.length % d : d;
    let j;
    let result = [];
    
    for(let i = 0; i < a.length; i++) {
        j = i - d >= 0 ? i - d : a.length + (i - d); 
        result[j] = a[i]
    }
    return result;
}
