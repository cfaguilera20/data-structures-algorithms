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
