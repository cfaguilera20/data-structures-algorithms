import LinkeList from './LinkedList.js';

let linkedList = new LinkeList();
linkedList
    .push(1)
    .push(2)
    .push(3);
linkedList
    .traverse();
linkedList
    .pop();
linkedList
    .shift();
linkedList
    .unshift(1);
linkedList
    .traverse();
console.log(linkedList
    .get(1));
