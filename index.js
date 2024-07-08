
// /*
// Given an integer array nums sorted in non-decreasing order, 
// remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same. Then return the number of unique elements in nums.


//  Input: nums = [1,1,2] Output: 2, nums = [1,2,_] Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively. It does not matter what you leave beyond the returned k (hence they are underscores).
// from Cibin Thomas Jacob to Everyone16:07
// Example 2: Input: nums = [0,0,1,1,1,2,2,3,3,4] Output: 5, nums = [0,1,2,3,4,_,_,_,_,_] Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively. It does not matter what you leave beyond the returned k (hence they are underscores).
// */

// function removeDuplicates(nums) {
//     let indexMap = new Map();
//     let arr = [];
//     let duplicateCount = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (!indexMap.has(nums[i])) {
//             arr.push(nums[i]);
//             indexMap.set(nums[i], i)
//         }
//         else duplicateCount++;
//     }

//     arr = [...arr, ...(new Array(duplicateCount).fill('_'))]

//     return [arr.length - duplicateCount, arr]
// }

// // console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));



// async function asyncFunctionA() {
//     console.log('A');
// }

// async function asyncFunctionB() {
//     console.log('B');
// }

// async function asyncFunctionC() {
//     console.log('C');
// }

// async function asyncFunctionD() {
//     console.log('D');
// }

// asyncFunctionA().then(
//     () => asyncFunctionB().then(() => {
//         asyncFunctionC().then(
//             asyncFunctionD.then()
//         )
//     })
// )



// asyncFunctionA().then(() => asyncFunctionB()).then()

const nameT = () => {
    console.log('function', this);
}

nameT();


// this subtution in strict mode
// redux toolkit
// redux thunk

// even bubbling 
// 


with (function () {
    return this;
}()) {
    console.log('with', this);
}