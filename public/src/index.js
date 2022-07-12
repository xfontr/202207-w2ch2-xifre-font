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

/* FIRST OPTION */
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

/* SECOND OPTION */

const inputValue2 = function () {
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

const inputValue3 = function () {
    const testsToArray = Object.values(tests);
    let iterations = 0;
    let result;
    let a;
    let b;

    testsToArray.forEach((test) => {
        console.log("------------");
        a = test[0];
        b = test[1];

        if (isNaN(a)) {
            pullResult(!strictEquals(a, b), a, b, iterations);
        } else if (
            (1 / a).toString().includes("-") ||
            (1 / b).toString().includes("-")
        ) {
            pullResult(!strictEquals(a, b), a, b, iterations);
        } else {
            pullResult(strictEquals(a, b), a, b, iterations);
        }
    });
};

inputValue3();

// let getMinusA = 1 / a;
// let getMinusB = 1 / b;
// let infinityToStringA = getMinusA.toString();
// let infinityToStringB = getMinusB.toString();
// if (
//     infinityToStringA.includes("-") ||
//     infinityToStringB.includes("-")
// ) {
