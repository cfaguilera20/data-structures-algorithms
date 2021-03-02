/**
 * https://www.hackerrank.com/challenges/triple-sum/problem
 * p <= q >= r
 *
 * 1 4 5
 * 2 3 3
 * 1 2 3
 *
 * Get unique values
 * 1 4 5
 * 2 3
 * 1 2 3
 *
 */

function triplets(a, b, c) {
    a = [...new Set(a)].sort((a, b) => a - b);
    b = [...new Set(b)].sort((a, b) => a - b);
    c = [...new Set(c)].sort((a, b) => a - b);
    
    let idxa = 0;
    let idxc = 0;
    let result = 0;
    
    for(let idxb = 0; idxb < b.length; idxb++) {
        while(idxa < a.length) {
            if(a[idxa] <= b[idxb]) {
                idxa++;
            } else {
                break;
            }
        }
        
        while(idxc < c.length) {
            if(b[idxb] >= c[idxc]) {
                idxc++;
            } else {
                break;
            }
        }
        
        result += idxa * idxc;
    }
    
    return result;

}
