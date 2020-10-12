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

            this.swap(idx, parentidx);
            idx = parentidx;
        }
    }

    swap(i, j) {
        [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
    }

    extractMax() {
        const max = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown() {
        let idx = 0;
        const element = this.values[idx];
        const length = this.values.length;
        while (true) {
            let [leftIdx, rightIdx] = this.getChildrenIdx(idx);
            let left, right;
            let swap = null;

            if (leftIdx < length) {
                left = this.values[leftIdx];
                if (left > element)
                    swap = leftIdx;
            }

            if (rightIdx < length) {
                right = this.values[rightIdx];
                if ((swap === null && right > element) || (swap !== null && right > left))
                    swap = rightIdx;
            }

            if (swap === null)
                break;

            this.swap(idx, swap);
            idx = swap;
        }

    }

    getChildrenIdx(idx) {
        return [2 * idx + 1, 2 * idx + 2]
    }
}

export default MaxBinaryHeap;
