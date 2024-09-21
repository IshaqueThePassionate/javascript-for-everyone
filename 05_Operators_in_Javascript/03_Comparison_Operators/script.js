
// Greater than comparison

10 > 5;             // true



// Less than comparison

3 < 2;              // false


// Greater than or equal to comparison

5 >= 5;             // true


// Less than or equal to comparison

9 <= 9;             // true


// Strict equality comparison (both value and type)

"dog" === "cat";    // false


// Strict inequality comparison (both value and type)

"bird" !== "bird";  // false


// Loose equality comparison (only value, type conversion allowed)

false == 0;         // true


// Loose inequality comparison (only value, type conversion allowed)

true != 0;          // true


// Strict equality comparison with undefined and null

undefined === null; // false


// Loose equality comparison with undefined and null (type conversion allowed)

undefined == null;  // true


// Strict equality with type (0 is not strictly equal to false)

0 === false;        // false


// Loose equality with type conversion (0 equals false)

0 == false;         // true


// Loose equality with type conversion ("5" is loosely equal to 5)

"5" == 5;           // true


// Strict equality comparison (different types are not strictly equal)

"5" === 5;          // false


// Special case: NaN is not equal to anything, even itself

NaN !== NaN;        // true


// NaN comparison (always false)

NaN == NaN;         // false
