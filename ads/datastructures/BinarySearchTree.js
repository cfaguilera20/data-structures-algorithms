import Node from './Node.js';
import Queue from './Queue.js';

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert iteratively - O(logn) time | O(1) space
    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let current = this.root;
            while (true) {
                // Prevent duplicates
                // if(value === current.value)
                //     return undefined;

                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        break;
                    } else {
                        current = current.left;
                    }
                } else {
                    if (current.right === null) {
                        current.right = newNode;
                        break;
                    } else {
                        current = current.right;
                    }
                }
            }
        }

        return this;
    }

    // Insert recursively - O(logn) time | O(logn) space
    insertRecursively(value, parent = this.root) {
        if (this.root === null) {
            this.root = new Node(value);
        } else {
            // Prevent duplicates
            // if(value === parent.value)
            //     return undefined;

            if (value < parent.value) {
                if (parent.left === null) {
                    parent.left = new Node(value);
                } else {
                    this.insertRecursively(value, parent.left);
                }
            } else {
                if (parent.right === null) {
                    parent.right = new Node(value);
                } else {
                    this.insertRecursively(value, parent.right);
                }
            }
        }

        return this;
    }

    // O(logn) time | O(1) space
    find(value) {
        if (this.root === null)
            return undefined;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }

        return current || undefined;
    }

    contains(value) {
        return !!this.find(value);
    }

    // O(n) time | O(n) space
    BFS() {
        let data = [];
        let queue = new Queue();
        queue.enqueue(this.root);

        while (queue.size) {
            let current = queue.dequeue();
            data.push(current.value);

            if (current.left)
                queue.enqueue(current.left);
            if (current.right)
                queue.enqueue(current.right);
        }

        return data;
    }
}

export default BinarySearchTree;

