function insertionSort(items) {
    let i,j;
    let n = items.length;

    for(i = 1; i < n; i++) {
        j = i;
        while((j > 0) && (items[j] < items[j - 1])){
            let temp = items[j];
            items[j] = items[j - 1];
            items[j - 1] = temp;
            j = j - 1;
        }
    }

    return items;
}

console.log(insertionSort([7,1,2,34,5], 4));
