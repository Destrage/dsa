/*
eg:
MCMXCIV

M = 1000 => 1000
CM = 900 = 1000 - 100 = 900 => 1900
XC = 90 = 100 - 10 = 90 => 1990
IV = 4 = 5 - 1 = 4 => 1994

****************

DCXXI


*/

const romanNumarals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

function romanToNumber(romanNumber) {
    let index = 0;
    let convertedNumber = 0;
    while (index < romanNumber.length) {
        const current = romanNumarals[romanNumber[index]];
        const next = romanNumarals[romanNumber[index + 1]];
        if (current < next) {
            convertedNumber += next - current;
            index += 2;
        } else {
            convertedNumber += current;
            index++;
        }
    }

    return convertedNumber;
}



require('./test-cases.json').forEach(([romanNumbers, expectedResult], index) => {
    const result = romanToNumber(romanNumbers);
    if ((expectedResult === null && result === null) || expectedResult === result) console.log(`test ${++index} passed`);
    else console.log(`test ${++index} failed`);
});