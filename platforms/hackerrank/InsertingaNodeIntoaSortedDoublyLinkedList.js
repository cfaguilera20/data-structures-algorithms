/*
 * https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list/problem
 *
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function sortedInsert(head, data) {
    let current = head;
    let prev;
    let node = new DoublyLinkedListNode();
    node.data = data;
    
    while(current) {
        prev = current.prev;
        if(current.data > data) {                       
            break;
        }
        current = current.next;
    }
    
    if(!prev) { 
        node.next = head;
        head.prev = node;
        return node;
    }
    
    if(!current) {
        prev.next.next = node;
        node.prev = prev.next;
        return head;
    }
    
    prev.next.prev = node;
    node.next = prev.next;
    node.prev = prev;
    prev.next= node;

    return head;
}
