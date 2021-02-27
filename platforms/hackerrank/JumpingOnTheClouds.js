/**
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
 */
 
// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let i = 0;
    let steps = 0;
    while(i < c.length - 1) {
        if(i + 2 === c.length || c[i + 2] === 1) {
            i++;
        } else {
            i += 2;
        }
        
        steps++;
    }
    
    return steps;
}
 
