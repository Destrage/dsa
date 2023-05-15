var backspaceCompare = function (s, t) {
    return formatString(s) === formatString(t) ? true : false;
};

function formatString(str) {
    const stringArray = [...str].reduce((stringArray, str) => {
        if (str === '#') stringArray.pop();
        else stringArray.push(str);
        return stringArray;
    }, [])
    return stringArray.join('');
}

require('./test-cases.json').forEach(([[S, T], expectedResult], index) => {
    console.time('run');
    result = backspaceCompare(S, T);
    console.timeEnd('run');
    if (expectedResult === result) console.log(`test ${++index} passed`);
    else console.log(`test ${++index} failed`);
});