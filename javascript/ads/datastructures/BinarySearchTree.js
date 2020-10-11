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
    insertRecursively(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            function insert(parent, newNode) {
                // if(value === parent.value) # Prevent duplicates
                //     return undefined;

                if (newNode.value < parent.value) {
                    if (parent.left === null) {
                        parent.left = newNode;
                    } else {
                        insert(parent.left, newNode);
                    }
                } else {
                    if (parent.right === null) {
                        parent.right = newNode;
                    } else {
                        insert(parent.right, newNode);
                    }
                }
            }

            insert(this.root, newNode);
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

    // O(v + e) time | O(n) space
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

    // O(n) time | O(n) space | Order - node, left, right
    DFSPreOrder() {
        let data = [];

        function traverse(node) {
            if (node === null)
                return;

            data.push(node.value);
            traverse(node.left);
            traverse(node.right);
        }

        traverse(this.root);

        return data;
    }

    // O(n) time | O(n) space | Order - left, right, node
    DFSPosOrder() {
        let data = [];

        function traverse(node) {
            if (node === null)
                return;

            traverse(node.left);
            traverse(node.right);
            data.push(node.value);
        }

        traverse(this.root);

        return data;
    }

    // O(n) time | O(n) space | Order - left, node, right
    DFSInOrder() {
        let data = [];

        function traverse(node) {
            if (node === null)
                return;

            traverse(node.left);
            data.push(node.value);
            traverse(node.right);
        }

        traverse(this.root);

        return data;
    }
}

export default BinarySearchTree;

