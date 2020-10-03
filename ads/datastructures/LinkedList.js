import Node from './Node.js';

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // O(1) time | O(1) space
    push(value) {
        let node = new Node(value);

        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length += 1;
        return this;
    }

    // O(n) time | O(1) space
    pop() {
        if (this.head === null)
            return undefined;

        let current = this.head;
        let newTail = current;

        while (current.next !== null) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length -= 1;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    // O(1) time | O(1) space
    shift() {
        if (this.head === null)
            return undefined;

        let current = this.head;
        this.head = current.next;
        this.length -= 1;

        return current;
    }

    // O(1) time | O(1) space
    unshift(value) {
        let node = new Node(value);

        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length += 1;
        return this;
    }

    // O(n) time | O(1) space
    get(index) {
        if (index < 0 || index >= this.length)
            return null;

        let current = this.head
        let currentIndex = 0;
        while (currentIndex !== index) {
            current = current.next;
            currentIndex += 1;
        }

        return current;
    }

    // O(n) time | O(1) space
    set(index, value) {
        let node = this.get(index);
        if (node !== null) {
            node.value = value;
            return true;
        }

        return false;


    }

    // O(n) time | O(1) space
    traverse() {
        let current = this.head
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }



    // pushNode(node) {
    //     let root = this.head;
    //     while (root.next !== null) {
    //         root = root.next;
    //     }
    //     root.next = node;
    // }
}

export default LinkedList;
