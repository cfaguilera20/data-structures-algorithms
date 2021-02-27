/**
 * https://www.hackerrank.com/challenges/repeated-string/problem
 */
function repeatedString(s, n) {
    const hmCounter = {};
    let total = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'a') {
            total++;
        }
        hmCounter[i] = total;
    }
    
    hmCounter[-1] = 0;

    return (Math.floor((n / s.length)) * total) + hmCounter[(n % s.length) - 1];
}
