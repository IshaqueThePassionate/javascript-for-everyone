// Logical AND (&&) Short-Circuiting:

// If the first condition is false, the second condition is not evaluated

false && (5 > 1);      // false (second part not evaluated)
0 && "apple";          // 0 (short-circuits, returns the falsy value)


// Logical AND stops at the first falsy value

null && true;          // null
"" && 5 > 3;           // "" (empty string is falsy)
"hello" && 123;        // 123 (both are truthy, returns last value)


// Logical OR (||) Short-Circuiting:

// If the first condition is true, the second condition is not evaluated
true || (5 > 10);      // true (second part not evaluated)
1 || "banana";         // 1 (short-circuits, returns the truthy value)


// Logical OR stops at the first truthy value

null || "apple";       // "apple" (null is falsy)
0 || 42;               // 42 (0 is falsy)
false || true;         // true (stops at true)


// Logical NOT (!) and Short-Circuiting:

!false && (5 > 1);     // true (first part negates to true, continues)
!true || (10 < 5);     // false (first part negates to false, continues)
