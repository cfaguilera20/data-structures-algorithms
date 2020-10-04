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

    // O(1) time | O(1) space
    insert(index, value) {
        if (index < 0 || index > this.length)
            return false;
        if (index === this.length) {
            return !!this.push(value);
        }
        if (index === 0) {
            return !!this.unshift(value);
        }

        let prev = this.get(index - 1);
        let newNode = new Node(value);
        [newNode.next, prev.next] = [prev.next, newNode];
        this.length += 1;

        return true;
    }

    // O(n) time | O(1) space
    remove(index) {
        if (index < 0 || index >= this.length)
            return undefined;
        if (index === 0)
            return this.shift();
        if (index === this.length - 1)
            return this.pop();

        let prev = this.get(index - 1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length -= 1;

        return removed;
    }

    // O(n) time | O(1) space
    reverse() {
        let node = this.head;
        [this.head, this.tail] = [this.tail, this.head];

        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    // O(n) time | O(1) space
    traverse() {
        let current = this.head
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

    // O(n) time | O(1) space
    toString() {
        let current = this.head
        let list = '';
        while (current !== null) {
            list += `${current.value} -> `;
            current = current.next;
        }

        list += `null`;
        console.log(list);
    }
}

export default LinkedList;
