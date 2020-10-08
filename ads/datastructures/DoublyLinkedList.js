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

    unshift(value) {
        let newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length += 1;

        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length)
            return null;

        let current;

        if (index <= this.length / 2) {
            let count = 0;
            current = this.head;
            while (count != index) {
                current = current.next;
                count += 1;
            }
        } else {
            let count = this.length - 1;
            current = this.tail;
            while (count != index) {
                current = current.prev;
                count -= 1;
            }
        }
        return current;
    }

    set(index, value) {
        let node = this.get(index);

        if (node !== null) {
            node.value = value;
            return true;
        }

        return false;
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
