import tests from "./tests.js";
import inputValue from "./withEquals.js";
import inputValue2 from "./withOperators.js";
import inputValue3 from "./withInfinity.js";

const launch = function (system) {
    switch (system) {
        case 1:
            inputValue(tests);
            break;

        case 2:
            inputValue2(tests);
            break;

        case 3:
            inputValue3(tests);
            break;

        default:
            console.log("Please, only from 1 to 3");
    }
};

export default launch;
