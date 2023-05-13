// check the edge cases
//  1. numberArray should contain atleast 2 element
//  2. numberArray should be an array of possitive numbers
//  3. target should be possitive number

// TC = O(N^2)
// SC = O(1)

function trappingRainWater(height) {
    try {
        checkEdgeCases(height);

        let totalArea = 0;

        for (let p1 = 0; p1 < height.length; p1++) {
            let lP = p1;
            let rP = p1;
            let maxLp = 0;
            let maxRp = 0;
            while (lP >= 0) {
                if (height[lP] > maxLp) maxLp = height[lP];
                lP--;
            };
            while (rP < height.length) {
                if (height[rP] > maxRp) maxRp = height[rP];
                rP++;
            }
            totalArea += Math.min(maxLp, maxRp) - height[p1];
        }

        return totalArea;

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
    result = trappingRainWater(numberArray);
    console.timeEnd('run');
    if (expectedResult === 0 && result === 0) console.log(`test ${++index} passed`);
    else if (expectedResult == result) console.log(`test ${++index} passed`);
    else console.log(`test ${++index} failed`);
});