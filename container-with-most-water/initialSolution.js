// solution using 2 ponter solution

// check the edge cases
//  1. numberArray should contain atleast 2 element
//  2. numberArray should be an array of possitive numbers
//  3. target should be possitive number

function containerWithMostWater(height) {
    try {
        checkEdgeCases(height);

        let maxArea = 0;

        for (let p1 = 0; p1 < height.length; p1++) {
            for (let p2 = p1 + 1; p2 < height.length; p2++) {
                maxArea = Math.max(maxArea, Math.min(height[p1], height[p2]) * (p2 - p1));
            }
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