import LinkeList from './LinkedList.js';
import DoublyLinkedList from './DoublyLinkedList.js';
import Stack from './Stack.js';
import Queue from './Queue.js';
import BST from './BinarySearchTree.js';
import MaxBinaryHeap from './MaxBinaryHeap.js';
import PriorityQueue from './PriorityQueue.js';
import Graph from './Graph.js';

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
console.log(bst.find(18));
console.log(bst.contains(146));
console.log(bst.BFS());
console.log(bst.DFSPreOrder());
console.log(bst.DFSPosOrder());
console.log(bst.DFSInOrder());

let maxBinaryHeap = new MaxBinaryHeap();
console.log('MaxBinaryHeap operations:');
maxBinaryHeap.insert(41);
maxBinaryHeap.insert(39);
maxBinaryHeap.insert(33);
maxBinaryHeap.insert(18);
maxBinaryHeap.insert(27);
maxBinaryHeap.insert(12);
maxBinaryHeap.insert(55);
console.log(maxBinaryHeap.values);
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.values);

let ER = new PriorityQueue(); // MinBinaryHeap
console.log('PriorityQueue operations:');
ER.enqueue('common cold,', 10);
ER.enqueue('H1N1,', 2);
ER.enqueue('COVID19,', 1);
ER.enqueue('high fever,', 7);
ER.enqueue('gunshot wound,', 1);
console.log(ER);
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER);

let graph = new Graph(); //
console.log('Graph operations:');
graph.addVertex("México");
graph.addVertex("USA");
graph.addVertex("Canada");
graph.addVertex("Tokyo");
graph.addEdge("México", "USA");
graph.addEdge("USA", "Mexico");
graph.addEdge("Canada", "México");
graph.addEdge("México", "Canada");
graph.addEdge("Canada", "Tokyo");
graph.addEdge("Tokyo", "Canada");
console.log(graph);
graph.removeEdge("Canada", "México");
console.log(graph);
graph.removeVertex("Canada");
console.log(graph);

console.log('Graph travers:');
let DFSg = new Graph(); //
DFSg.addVertex("A");
DFSg.addVertex("B");
DFSg.addVertex("C");
DFSg.addVertex("D");
DFSg.addVertex("E");
DFSg.addVertex("F");
DFSg.addEdge("A", "B");
DFSg.addEdge("A", "C");
DFSg.addEdge("B", "A");
DFSg.addEdge("B", "D");
DFSg.addEdge("C", "A");
DFSg.addEdge("C", "E");
DFSg.addEdge("D", "B");
DFSg.addEdge("D", "E");
DFSg.addEdge("D", "F");
DFSg.addEdge("E", "C");
DFSg.addEdge("E", "D");
DFSg.addEdge("E", "F");
DFSg.addEdge("F", "D");
DFSg.addEdge("F", "E");
console.log(DFSg);
console.log(DFSg.depthFirstRecursive("A"));
console.log(DFSg.depthFirstRecursive("B"));
console.log(DFSg.depthFirstIterative("A"));
console.log(DFSg.depthFirstIterative("B"));

console.log(DFSg.breathFirst("A"));
//            A
//          /   \
//        B       C
//        |       |
//        D   -   E
//          \    /
//            F
