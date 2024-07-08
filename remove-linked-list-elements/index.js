function ListNode(val, next) {
    this.val = val;
    this.next = next ?? null;
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let pointerHead = head = new ListNode(0, head);
    while (pointerHead) {
        if (pointerHead?.next?.val === val) pointerHead.next = pointerHead.next.next;
        else pointerHead = pointerHead.next;
    }
    return head.next;
};

console.log(JSON.stringify(removeElements(new ListNode(1, new ListNode(7, new ListNode(2, new ListNode(7, null)))), 7), null, 2));