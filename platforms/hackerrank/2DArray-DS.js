/**
 * https://www.hackerrank.com/challenges/2d-array/problem
 */
function hourglassSum(arr) {
    const height = arr.length;
    const width = arr[0].length;
    let sum;
    let result = -Infinity;
    
    for(let i = 0; i < height - 2; i++) {
        for(let j = 0; j < width - 2; j++) {
            sum = getSum(arr, i, j);
            if(sum > result) {
                result = sum;
            }
        }
    }
    
    return result;
}

function getSum(arr, x, y) {
    let sum = 0;
    let  clock = '';
    
    for(let i = 0; i < 3; i++) {
        clock = ''; 
        if(i !== 1) {
            clock += arr[x + i][y];
            sum += arr[x + i][y];
        } else {
            clock += '-';
        }
        
        clock += arr[x + i][y + 1];
        sum += arr[x + i][y + 1];
        
        if(i !== 1) {
            clock += arr[x + i][y + 2];
            sum += arr[x + i][y + 2];
        } else {
            clock += '-';
        }
        
        console.log(clock)
    }
    
    console.log('---')
    
    return sum;
}
