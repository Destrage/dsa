import { SinglyNode as Node } from '../../../../DataStructures/LinkedList.js';

function addTwoNumbers(l1, l2) {
    const resultHead = new Node();
    let current = resultHead;
    let num1 = '', num2 = '';
    while (l1 != null || l2 != null) {
        if (l1 !== null) {
            num1 = l1.val + num1;
            l1 = l1.next;
        }
        if (l2 !== null) {
            num2 = l2.val + num2;
            l2 = l2.next;
        }
    }
    let sum = +num1 + +num2;
    if (sum === 0) return new Node(0);

    while (sum) {
        current.next = new Node(sum % 10);
        current = current.next;
        sum = Math.floor(sum / 10);
    }
    return resultHead.next;
}


let inPut1 = Node.arrayToSingleLinkedList([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]),
    inPut2 = Node.arrayToSingleLinkedList([5, 6, 4]),
    expectedOutput = Node.arrayToSingleLinkedList([6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]),
    actualOutput = addTwoNumbers(inPut1, inPut2);

let p1 = expectedOutput;
let p2 = actualOutput;

let isPassed = true;
while (p2 && p1) {
    console.log(p2.val, p1.val);
    if (p2.val !== p1.val) {
        isPassed = false;
        break;
    }
    p2 = p2.next;
    p1 = p1.next;
}

console.log(
    isPassed ? 'Passed' : 'Failed',
    {
        expected: Node.singleLinkedListToArray(expectedOutput),
        actual: Node.singleLinkedListToArray(actualOutput)
    }
);