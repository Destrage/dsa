/*
Given an integer array nums sorted in non-decreasing order, 
remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same. Then return the number of unique elements in nums.


 Input: nums = [1,1,2] Output: 2, nums = [1,2,_] Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively. It does not matter what you leave beyond the returned k (hence they are underscores).
from Cibin Thomas Jacob to Everyone16:07
Example 2: Input: nums = [0,0,1,1,1,2,2,3,3,4] Output: 5, nums = [0,1,2,3,4,_,_,_,_,_] Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively. It does not matter what you leave beyond the returned k (hence they are underscores).
*/
let [path, file, problemSet, problem] = process.argv;

if (problemSet === undefined || problem === undefined) throw new Error('Please provide the problem set and problem name');
problemSet = problemSet.toLowerCase();
switch (problemSet) {
    case 'string':
        import(`./ProblemSet/String/${problem}/index.js`)
        break;
    case 'array':
        import(`./ProblemSet/Array/${problem}/index.js`)
        break;
    case 'singlylinkedlist':
        import(`./ProblemSet/LinkedList/SinglyLinkedList/${problem}/index.js`)
        break;
    case 'doublylinkedlist':
        import(`./ProblemSet/LinkedList/DoublyLinkedList/${problem}/index.js`)
        break;
    default:
        break;
}