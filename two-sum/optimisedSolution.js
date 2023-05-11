function twoSum(numberArray, target) {
    try {
        checkEdgeCases(numberArray, target);

        const numHash = new Map();

        numberArray.map((key, value) => {
            numHash.set(key, value)
        });

        for (let p1 = 0; p1 < numberArray.length; p1++) {
            let p2 = numHash.get(target - numberArray[p1]);
            if (p2) return [p1, p2];
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
    console.time('time')
    result = twoSum(numberArray, target);
    if (expectedResult === null && result === null) console.log(`test ${++index} passed`);
    else if (expectedResult[0] == result[0] && expectedResult[1] === result[1]) console.log(`test ${++index} passed`);
    else console.log(`test ${++index} failed`);
    console.timeEnd('time')
});