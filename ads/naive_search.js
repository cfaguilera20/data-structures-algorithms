function naiveSearch(array, pattern) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            if (array[i + j] !== pattern[j]  ) {
                break;
            }
            if (j == pattern.length - 1) {
                count++;
            }
        }
    }

    return count;
}

console.log(naiveSearch("lorie loled lol", "lol"), 2);
console.log(naiveSearch("lorie loled", "rie"), 1);
console.log(naiveSearch("lorie loled", "charls"), 0);
console.log(naiveSearch([0, 1, 2, 3, 4, 5, 6, 7, 9], [6, 7, 9]), 1);
console.log(naiveSearch([0, 1, 2, 6, 7, 9, 3, 4, 5, 6, 7, 9], [6, 7, 9]), 2);
