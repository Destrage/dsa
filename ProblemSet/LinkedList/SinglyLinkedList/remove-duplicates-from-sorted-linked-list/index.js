const ListNode = require('../../../../DataStructures/LinkedList').SinglyNode;

var deleteDuplicates = function (head) {
    let current = head;
    while (current !== null && current.next !== null) {
        if(current.val === current.next.val) current.next = current.next.next;
        else current = current.next;
    }
    return head;
};

const head = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));

// console.log(deleteDuplicates(head));

// console.log(Math.max(1, 2, 3));