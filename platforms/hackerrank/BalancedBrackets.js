/**
 * https://www.hackerrank.com/challenges/balanced-brackets/problem
 */
function isBalanced(s) {
    let charsDict = {'[': ']', '{': '}', '(': ')'};
    let stack = [];
    let i = 0;
    while(i < s.length) {
        let char = s[i];
        
        if(charsDict[char]) {
            stack.push(char);
        } else {
           let open = stack.pop();
           if(charsDict[open] !== char) {
               return 'NO';
           }     
        }
        i++
    }
    return stack.length === 0 ? 'YES' : 'NO';
}
