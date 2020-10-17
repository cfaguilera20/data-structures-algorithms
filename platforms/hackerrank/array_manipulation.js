/**
 * n = 5
 * a b k
 * 2 3 5
 * 1 2 10
 * 4 5 2
 *
 * [0, 0, 0, 0, 0]
 * [0, 5, 0, -5, 0]
 * [10, 5, -10, -5, 0]
 * [10, 5, -10, -3, -2]
 *
 * Sum values
 * [10, 15, 5, 2, 0]
 *
 * The biggest value is 15
 */

 // Time complexity: O(N*Q)
function arrayManipulationOutOfTime(n, queries) {
    let arr = new Array(n).fill(0);
    let max = 0;

    for(let i = 0; i < queries.length; i++) {
        let start = queries[i][0] - 1;
        let end = queries[i][1] - 1;
        let value = queries[i][2];

        for(let j = start; j <= end; j++) {
            arr[j] += value;
            if(arr[j] > max) {
                max = arr[j];
            }
        }
    }

    return max;

}

// Time complexity: O(Q+N)
function arrayManipulation(n, queries) {
    let arr = new Array(n).fill(0);
    let max = 0;
    let current = 0;

    for (let query of queries) {
        let start = query[0] - 1;
        let end = query[1] ;
        let value = query[2];
        arr[start] += value;
        arr[end] -= value;
    }

    for(let i of arr) {
        current += i;
        if(current > max) {
            max = current
        }
    }

    return max;
}



let n = 5;
let queries = [
    [2, 3, 5],
    [1, 2, 10],
    [4, 5, 2],
];

console.log(arrayManipulation(n, queries));
console.log(arrayManipulationOutOfTime(n, queries));
