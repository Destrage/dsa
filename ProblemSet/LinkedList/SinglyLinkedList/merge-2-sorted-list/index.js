const ListNode = require('../../../../DataStructures/LinkedList').SinglyNode;


/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let nodeHead = new ListNode(0, null);
    let pointerNode = nodeHead;
    while (list1 || list2) {
        if (!list1 || !list2) {
            pointerNode.next = list2 ? list2 : list1;
            break;
        }
        else if (list1.val < list2.val) {
            pointerNode.next = list1;
            list1 = list1.next;
        }
        else {
            pointerNode.next = list2;
            list2 = list2.next;
        }
        pointerNode = pointerNode.next;
    }
    return nodeHead.next;
};

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let result = mergeTwoLists(list1, list2);
result = JSON.stringify(result, null, 2);
console.log(result);