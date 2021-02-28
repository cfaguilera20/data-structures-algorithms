//  2, 1, 4, 5, 3               Current: 1
//  |
//  2 > Current
// 2, 2, 4, 5, 3                Current: 1
// 1, 2, 4, 5, 3
// 1, 2, 4, 5, 3                Current: 4
//    |
//    2 > Current               False: The array stays the same
// 1, 2, 4, 5, 3
// 1, 2, 4, 5, 3                Current: 5
//       |
//       4 > Current            False: The array stays the same
// 1, 2, 4, 5, 3
// 1, 2, 4, 5, 3                Current: 3
//          |
//          5 > Current
// 1, 2, 4, 5, 5                Current: 3
//       |
//       4 > Current
// 1, 2, 4, 4, 5                Current: 3
// 1, 2, 3, 4, 5

// O(N^2) time | O(1) space
function insertionSort(array) {
    for(let i = 1; i < array.length; i++) {
        let currentVal = array[i];
        for(var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1 ] = currentVal;
    }

    return array;
}

/**
 * Small version
 */
function insertionSort2(array) {
  for(let i = 1; i < array.length; i++) {
		let j = i;
		while(j  > 0 && array[j] < array[j - 1]) {
			swap(j, j - 1, array);
			j--;
		}
	}
	
	return array;
}

function swap(i, j, array) {
	[array[i], array[j]] = [array[j], array[i]]
}

console.log(insertionSort([2, 1, 4, 5, 3]).toString() == [1, 2, 3, 4, 5].toString());
console.log(insertionSort([2, 1, 4, -3, 5, 3]).toString() == [-3, 1, 2, 3, 4, 5].toString());

