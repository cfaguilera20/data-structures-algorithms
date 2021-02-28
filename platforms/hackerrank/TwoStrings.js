/**
 * https://www.hackerrank.com/challenges/two-strings/problem
 */

function twoStrings(s1, s2) {
    const dic = {};
    for(let i = 0; i < s1.length; i++) {
        dic[s1[i]] = true;
    }
    
    for(let i = 0; i < s2.length; i++) {
        if(dic[s2[i]]) {
            return 'YES';
        }
    }
    

    return 'NO';
}
