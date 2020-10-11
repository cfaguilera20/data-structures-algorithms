import Node from './Node.js';

// LIFO: Last in first out
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // O(1) time | O(1) space
    push(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }

        return ++this.size;
    }

    // O(1) time | O(1) space
    pop() {
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

export default Stack;
