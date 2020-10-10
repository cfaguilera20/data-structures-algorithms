import Node from './Node.js';

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert iteratively
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

    // Insert recursively
    insertRecursively(value, parent = this.root) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            // Prevent duplicates
            // if(value === parent.value)
            //     return undefined;

            if (newNode.value < parent.value) {
                if (parent.left === null) {
                    parent.left = newNode;
                } else {
                    this.insertRecursively(newNode, parent.left);
                }
            } else {
                if (parent.right === null) {
                    parent.right = newNode;
                } else {
                    this.insertRecursively(newNode, parent.right);
                }
            }
        }

        return this;
    }

}

export default BinarySearchTree;

