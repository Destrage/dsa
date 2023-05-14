// check the edge cases
//  1. numberArray should contain atleast 2 element
//  2. numberArray should be an array of possitive numbers
//  3. target should be possitive number

// TC = O(N^2)
// SC = O(1)

function trappingRainWater(height) {
    try {
        checkEdgeCases(height);

        let totalWater = 0;
        let lp = 0;
        let rp = height.length - 1;
        let maxl = 0;
        let maxr = 0;



        while (lp !== rp) {
            if (height[lp] <= height[rp]) {
                maxl = Math.max(height[lp], maxl);
                totalWater += maxl - height[lp] >= 0 ? maxl - height[lp] : 0;
                lp++;
            }
            else if (height[lp] > height[rp]) {
                maxr = Math.max(height[rp], maxr);
                totalWater += maxr - height[rp] >= 0 ? maxr - height[rp] : 0;
                rp--;
            }
        }

        return totalWater;

    } catch (error) {
        return 0;
    }
}

function checkEdgeCases([...numberArray]) {
    if (!Array.isArray(numberArray)) throw new Error();
    if (numberArray.length <= 2) throw new Error();
    if (numberArray.sort()[0] < 0) throw new Error();
}


require('./test-cases.json').forEach(([numberArray, expectedResult], index) => {
    result = trappingRainWater(numberArray);
    console.log();
    if (expectedResult === 0 && result === 0) console.log(`test ${++index} passed`);
    else if (expectedResult == result) console.log(`test ${++index} passed`);
    else console.log(`test ${++index} failed`);
});