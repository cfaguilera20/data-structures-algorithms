import LinkeList from './LinkedList.js';
import DoublyLinkedList from './DoublyLinkedList.js';
import Stack from './Stack.js';
import Queue from './Queue.js';
import BST from './BinarySearchTree.js';

/**
 * LinkedList operations
 */
let linkedList = new LinkeList();
console.log('LinkedList operations');
linkedList.push(1).push(2).push(3).push(4).push(5);
linkedList.toString();

linkedList.pop();
linkedList.shift();
linkedList.unshift(1);
linkedList.toString();

console.log(linkedList.get(0));
linkedList.set(0, 0);
linkedList.toString();

linkedList.insert(1, 1);
linkedList.toString();
linkedList.reverse();
linkedList.toString();

/**
 * DoublyLinkedList operations
 */

let doublyLinked = new DoublyLinkedList();
console.log('DoublyLinkedList operations');
doublyLinked.push(1).push(2).push(3).push(4).push(5);
doublyLinked.toString();
doublyLinked.pop();
doublyLinked.shift();
doublyLinked.toString();
doublyLinked.unshift(100);
doublyLinked.toString();
console.log(doublyLinked.get(3));
doublyLinked.toString();
doublyLinked.set(0, 1);
doublyLinked.toString();
doublyLinked.set(2, 100);
doublyLinked.toString();
doublyLinked.insert(2, 400);
doublyLinked.toString();
doublyLinked.remove(1);
doublyLinked.toString();

let stack = new Stack();
console.log('Stack operations:');
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());


let queue = new Queue();
console.log('Queue operations:');
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

let bst = new BST();
console.log('BST operations:');
bst.insert(20);
bst.insert(18);
bst.insert(16);
bst.insert(19);
bst.insertRecursively(25);
bst.insertRecursively(22);
bst.insertRecursively(26);
console.log(bst);
