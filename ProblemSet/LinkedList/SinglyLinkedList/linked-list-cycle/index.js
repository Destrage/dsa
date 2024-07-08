const ListNode = require('../../../../DataStructures/LinkedList').SinglyNode;

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let KEY = '~#@';
    let pointerHead = head;
    while (pointerHead && pointerHead.val.toString().includes(KEY) === false) {
        pointerHead.val += KEY;
        pointerHead = pointerHead.next;
    }

    return pointerHead !== null;
};

let head = new ListNode(1, null);
head.next = new ListNode(2, null);
head.next.next = new ListNode(3, null);
head.next.next.next = head.next;

console.log(hasCycle(head));