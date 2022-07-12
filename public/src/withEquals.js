import strictEquals from "./valueChecker.js";
import pullResult from "./showResult.js";

const inputValue = function (tests) {
    const testsToArray = Object.values(tests);
    let iterations = 0;
    let a;
    let b;
    testsToArray.forEach((test) => {
        console.log("------------");
        a = test[0];
        b = test[1];

        switch (iterations) {
            case 1:
                if (isNaN(a)) {
                    pullResult(!strictEquals(a, b), a, b, iterations);
                }

            case 2:
                if (a == -0) {
                    pullResult(!strictEquals(a, b), a, b, iterations);
                }
            case 3:
                if (b == -0) {
                    pullResult(!strictEquals(a, b), a, b, iterations);
                }
            default:
                pullResult(strictEquals(a, b), a, b, iterations);
        }
        iterations++;
    });
};

export default inputValue;
