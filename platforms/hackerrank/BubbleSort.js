/**
 * https://www.hackerrank.com/challenges/ctci-bubble-sort/problem
 */
function countSwaps(a) {
    let counter = 0;
    let n = a.length;
    for (let i = 0; i < n; i++) {
    
        for (let j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                counter++;
                swap(j, j + 1, a);
            }
        }
    }
    
    console.log(`Array is sorted in ${counter} swaps.`);  
    console.log(`First Element: ${a[0]}`);  
    console.log(`Last Element: ${a[a.length - 1]}`);

}
