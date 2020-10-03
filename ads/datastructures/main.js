import LinkeList from './LinkedList.js';

let linkedList = new LinkeList();
linkedList.push(1).push(2).push(3);
linkedList.toString();

linkedList.pop();
linkedList.shift();
linkedList.unshift(1);
linkedList.toString();

console.log(linkedList.get(1));
linkedList.set(0, "Hello!");
linkedList.toString();

linkedList.insert(1, "world");
linkedList.insert(2, "!");
linkedList.insert(3, "Bye!");
linkedList.insert(4, "Bye!");
linkedList.insert(4, "Bye!");
linkedList.insert(0, "¡");
linkedList.toString();
linkedList.remove(0);
linkedList.remove(linkedList.length - 1);
linkedList.remove(linkedList.length - 2);
linkedList.toString();
