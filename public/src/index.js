import strictEquals from "./valueChecker.js";

const tests = {
    test0: [1, 1],
    test1: [NaN, NaN],
    test2: [0, -0], //true
    test3: [-0, 0], //true
    test4: [1, "1"],
    test5: [true, false],
    test6: [false, false],
    test7: ["water", "oil"],
};

const pullResult = function (result, a, b, iterations) {
    console.log(
        `${iterations}: The result for the values ${a} and ${b} is ${result}`
    );
    return result;
};

const inputValue = function () {
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
                break;

            case 2:
                if (a == -0) {
                    pullResult(!strictEquals(a, b), a, b, iterations);
                }
                break;
            case 3:
                if (b == -0) {
                    pullResult(!strictEquals(a, b), a, b, iterations);
                }
                break;
            default:
                pullResult(strictEquals(a, b), a, b, iterations);
        }
        iterations++;
    });
};

inputValue();
