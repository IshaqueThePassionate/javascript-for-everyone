
// Numeric string to number conversion in comparisons

"5" == 5;              // true (automatic conversion to number)
"10" > 5;              // true (string "10" converted to number 10)
"20" < 30;             // true (string "20" converted to number 20)


// Boolean to number conversion

true == 1;             // true (true is converted to 1)
false == 0;            // true (false is converted to 0)
true + false;          // 1 (true is 1, false is 0)


// Null and undefined behavior

null == undefined;     // true (both treated as equivalent in loose equality)
null === undefined;    // false (no type conversion in strict equality)


// Automatic conversion with arithmetic operators

"5" - 2;               // 3 (string "5" converted to number)
"5" + 2;               // "52" (number 2 is converted to a string)
"10" * "2";            // 20 (both strings are converted to numbers)
"10" / "2";            // 5 (both strings are converted to numbers)


// Non-numeric strings result in NaN during arithmetic operations

"hello" - 2;           // NaN (string "hello" cannot be converted to a number)
"world" * 3;           // NaN (string "world" cannot be converted to a number)


// Boolean conversion in logical operators

false || "hello";      // "hello" (false is falsy, so returns "hello")
true && 10;            // 10 (true is truthy, so returns the number)
0 || "apple";          // "apple" (0 is falsy, so returns "apple")


// Null and undefined in arithmetic

null + 5;              // 5 (null is converted to 0)
undefined + 5;         // NaN (undefined cannot be converted to a number)
