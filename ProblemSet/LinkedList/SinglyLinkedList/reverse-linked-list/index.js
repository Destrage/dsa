const ListNode = require('../../../../DataStructures/LinkedList').SinglyNode;

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let pointer = head;
    let next = null;
    let prev = null;

    while (pointer) {
        next = pointer.next;
        pointer.next = prev;
        prev = pointer;
        pointer = next;
    }
    return prev;
};

console.log(JSON.stringify(reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))), null, 2)));