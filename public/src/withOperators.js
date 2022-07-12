import strictEquals from "./valueChecker.js";
import pullResult from "./showResult.js";

const inputValue2 = function (tests) {
    const testsToArray = Object.values(tests);
    let iterations = 0;
    let result;
    let a;
    let b;

    testsToArray.forEach((test) => {
        console.log("------------");
        a = test[0];
        b = test[1];
        result = strictEquals(a, b);
        if (result && isNaN(a)) {
            pullResult(!result, a, b, iterations);
        } else if (!a && !b) {
            pullResult(true, a, b, iterations);
        } else {
            pullResult(result, a, b, iterations);
        }

        iterations++;
    });
};

export default inputValue2;
