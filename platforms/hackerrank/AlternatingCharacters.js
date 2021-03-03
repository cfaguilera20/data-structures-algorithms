/**
 * https://www.hackerrank.com/challenges/alternating-characters/problem
 */
function alternatingCharacters(s) {
    let deletions = 0;
    for(let i = 1; i < s.length; i++) {
        if(s[i - 1] === s[i])
            deletions++;
    }
    
    return deletions;
}
