/*
 * https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem
 *
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtPosition(head, data, position) {
    let current;
    let newNode = {
        data: data,
        next: null
    };
    
    if(position === 0) {
        newNode.next = head;
        return newNode;
    }
    
    let i = 1;
    current = head;
    while(i < position && current.next !== null) {
        i++;
        current = current.next;
    }
    
    newNode.next = current.next;
    current.next = newNode;
    
    return head;
}
