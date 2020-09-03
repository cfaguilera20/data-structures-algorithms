/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtPosition(head, data, position) {
    let current = 0;
    let node = new SinglyLinkedListNode();
    let root = head;

    while(root.next != null && current != position) {
        current++;
        root = root.next;
    }

    node.data = root.data;
    node.next = root.next;
    root.data = data;
    root.next = node;
    return head;
}
