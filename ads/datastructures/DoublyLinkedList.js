import Node from './Node.js';

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }

    pop() {
        if (this.head === null)
            return undefined;

        let poppedNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }

        this.length -= 1;

        return poppedNode;
    }

    shift() {
        if (this.head === null)
            return undefined;

        let shiftedNode = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftedNode.next;
            this.head.prev = null;
            shiftedNode.next = null;
        }

        this.length -= 1;

        return shiftedNode;
    }

    toString() {
        let current = this.head
        let list = '';
        while (current !== null) {
            list += `${current.value} ${current.next ? '<-> ' : '-> '}`;
            current = current.next;
        }

        list += `null`;
        console.log(list);
    }
}

export default DoublyLinkedList;
