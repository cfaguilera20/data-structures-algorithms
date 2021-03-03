/**
 * https://www.hackerrank.com/challenges/ctci-making-anagrams/problem
 */
function makeAnagram(a, b) {
    let alphabet = [];
    for(let i = 0; i < 26; i++) {
        alphabet[i] = 0;
    }
    
    for(let i = 0; i < a.length; i++) {
        let codeAt = a[i].charCodeAt() - 97;
        alphabet[codeAt] = (alphabet[codeAt] || 0) + 1;
    }
    
    for(let i = 0; i < b.length; i++) {
        let codeAt = b[i].charCodeAt() - 97;
        alphabet[codeAt] = (alphabet[codeAt] || 0) - 1;
    }
    
    let result = 0;
    
    for(let i = 0; i < 26; i++) {
        result += Math.abs(alphabet[i]);
    }
    
    return result;
}
