class Node {
    constructor(value, priority = null) {
        this.value = value;
        this.priority = priority;
    }
}

// Small version
// class PriorityQueue {
//     constructor() {
//         this.values = [];
//     }

//     enqueue(val, priority) {
//         this.values.push({ val, priority });
//         this.sort();
//     }

//     dequeue() {
//         return this.values.shift();
//     }

//     // O(nlogn)
//     sort() {
//         this.values.sort((a, b) => a.priority - b.priority);
//     }
// }

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentidx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentidx];

            if (element.priority >= parent.priority)
                break;

            this.swap(idx, parentidx);
            idx = parentidx;
        }
    }
    swap(i, j) {
        [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
    }

    dequeue() {
        const min = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
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
                if (left.priority < element.priority)
                    swap = leftIdx;
            }

            if (rightIdx < length) {
                right = this.values[rightIdx];
                if ((swap === null && right.priority < element.priority) || (swap !== null && right.priority < left.priority))
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

export default PriorityQueue;
