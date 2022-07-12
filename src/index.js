import strictEquals from "./valueChecker.js";
// Testea la función con este set de pruebas:

// Dada la función strictEquals
// Cuando se comparan <A> y <B>
// Entonces el resultado será <Result>

// A	B	RESULT
// 1	1	true
// NaN	NaN	false	// Rule Exception
// 0	-0	true	// Rule Exception
// -0	0	true	// Rule Exception
// 1	"1"	false
// true	false	false
// false	false	true
// "Water"	"oil"	false
