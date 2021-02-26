/*
 * https://www.hackerrank.com/challenges/counting-valleys/problem
 * 
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */
function countingValleys(steps, path) {
    // Write your code here
    let place = 0;
    let counter = 0;
    
    for(let i = 0; i < steps; i++) {
        if(path[i] == 'U') {
            if(place === -1) {
                counter++;
            }
            place++;
        } else {
            place--;
        }
    }

    return counter;
}
