export class SinglyNode {
    constructor(val, next) {
        this.val = (val === undefined ? null : val);
        this.next = (next === undefined ? null : next);
    }

    static arrayToSingleLinkedList(arr) {
        let head = new SinglyNode();
        let current = head;
        for (let i = 0; i < arr.length; i++) {
            current.next = new SinglyNode(arr[i]);
            current = current.next;
        }
        return head.next;
    }

    static singleLinkedListToArray(head) {
        let arr = [];
        while (head) {
            arr.push(head.val);
            head = head.next;
        }
        return arr;
    }
}