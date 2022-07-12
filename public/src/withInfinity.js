import strictEquals from "./valueChecker.js";
import pullResult from "./showResult.js";

const inputValue3 = function (tests) {
    const testsToArray = Object.values(tests);
    let iterations = 0;
    let a;
    let b;

    testsToArray.forEach((test) => {
        console.log("------------");
        a = test[0];
        b = test[1];

        let result = strictEquals(a, b);

        if (result && isNaN(a)) {
            pullResult(!result, a, b, iterations);
        } else if (
            (1 / a).toString().includes("-") ||
            (1 / b).toString().includes("-")
        ) {
            pullResult(!strictEquals(a, b), a, b, iterations);
        } else {
            pullResult(strictEquals(a, b), a, b, iterations);
        }
        iterations++;
    });
};

export default inputValue3;
