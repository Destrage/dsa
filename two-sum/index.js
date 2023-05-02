// solution using 2 ponter solution

// check the edge cases
//  1. numberArray should contain atleast 2 element
//  2. numberArray should be an array of possitive numbers
//  3. target should be possitive number

// init pointer 1 (p1) on the nth postion and pointer 2 (p2) on n+1

// check if p2 = target - p1

// yes then return index of p1 and p2

// move on to the next index and init p1 and p2 

// if not found then return null

function twoSum(numberArray, target) {
    try {
        checkEdgeCases(numberArray, target);

        for (let p1 = 0; p1 < numberArray.length; p1++) {
            let valueTocheck = target - numberArray[p1]
            for (let p2 = p1 + 1; p2 < numberArray.length; p2++) {
                if (valueTocheck === numberArray[p2]) return [p1, p2];
            }
        }
        return null;

    } catch (error) {
        return null;
    }
}

function checkEdgeCases(numberArray, target) {
    try {
        if (!Array.isArray(numberArray)) throw new Error();
        if (numberArray.length <= 1) throw new Error();
        numberArray.forEach(num => {
            if (num < 0) throw new Error();
        });
        if (target < 0 || typeof target != "number") throw new Error();
    } catch (error) {
        return null;
    }

}


require('./test-cases.json').forEach(([numberArray, target, expectedResult], index) => {
    result = twoSum(numberArray, target);
    if (expectedResult === null && result === null) console.log(`test ${++index} passed`);
    else if (expectedResult[0] == result[0] && expectedResult[1] === result[1]) console.log(`test ${++index} passed`);
    else console.log(`test ${++index} failed`);
});