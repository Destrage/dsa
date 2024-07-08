let backspaceCompare = function (s, t) {
    let p1 = s.length - 1;
    let p2 = t.length - 1;
    while (p1 >= 0 && p2 >= 0) {
        if (s[p1] !== '#' && t[p2] !== '#' && s[p1] !== t[p2]) return false
        if (s[p1] === '#') p1 -= 2;
        if (t[p2] === '#') p2 -= 2;
        if (s[p1] === t[p2]) {
            p2--;
            p1--;
        }
    }

    return true;
};

require('./test-cases.json').forEach(([[S, T], expectedResult], index) => {
    console.time('run');
    result = backspaceCompare(S, T);
    console.timeEnd('run');
    if (expectedResult === result) console.log(`test ${++index} passed`);
    else console.log(`test ${++index} failed`);
});