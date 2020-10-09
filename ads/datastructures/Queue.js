import Node from './Node.js';

// FIFO: First in first out
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // O(1) time | O(1) space
    enqueue(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.size;
    }

    // O(1) time | O(1) space
    dequeue() {
        if (!this.first)
            return null;
        let temp = this.first;
        if (this.first === this.last)
            this.last = null;
        this.first = this.first.next;
        this.size--;

        return temp.value;
    }
}

export default Queue;
