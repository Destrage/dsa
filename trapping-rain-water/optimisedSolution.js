// solution using 2 ponter solution

// check the edge cases
//  1. numberArray should contain atleast 2 element
//  2. numberArray should be an array of possitive numbers
//  3. target should be possitive number

function containerWithMostWater(height) {
    try {
        checkEdgeCases(height);

        if (height.length <= 1) return 0;
        let maxArea = 0;
        let p1 = 0;
        let p2 = height.length - 1;

        while (p1 < p2) {
            const area = Math.min(height[p1], height[p2]) * (p2 - p1)
            maxArea = Math.max(area, maxArea);
            if (height[p1] > height[p2]) p2--
            else p1++
        }
        return maxArea;

    } catch (error) {
        return 0;
    }
}

function checkEdgeCases(numberArray) {
    try {
        if (!Array.isArray(numberArray)) throw new Error();
        if (numberArray.length <= 1) throw new Error();
        numberArray.forEach(num => {
            if (num < 0) throw new Error();
        });
    } catch (error) {
        return 0;
    }

}


require('./test-cases.json').forEach(([numberArray, expectedResult], index) => {
    console.time('run');
    result = containerWithMostWater(numberArray);
    console.timeEnd('run');
    if (expectedResult === 0 && result === 0) console.log(`test ${++index} passed`);
    else if (expectedResult == result) console.log(`test ${++index} passed`);
    else console.log(`test ${++index} failed`);
});