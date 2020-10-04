import LinkeList from './LinkedList.js';
import DoublyLinkedList from './DoublyLinkedList.js';

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

