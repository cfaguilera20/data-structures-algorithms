// For a child node at index n, it's parent is at index (n - 1) / 2, floored.
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(value) {
        this.values.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentidx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentidx];

            if (element <= parent)
                break;

            console.log(idx, parentidx);
            this.swap(idx, parentidx);
            idx = parentidx;
        }
    }
    swap(i, j) {
        [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
    }
}

export default MaxBinaryHeap;
