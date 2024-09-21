// Logical AND: Both conditions must be true   

(5 > 3) && (7 > 2);        // true
(10 > 20) && (3 < 5);      // false
(4 === 4) && ("apple" === "apple");  // true
(5 === 5) && (true);       // true


// Logical OR: At least one condition must be true

(5 < 3) || (7 > 2);        // true
(10 > 20) || (3 < 5);      // true
(4 !== 4) || ("banana" === "apple");  // false
(5 === 5) || (false);      // true


// Logical NOT: Negates the condition

!(5 > 3);                  // false
!(10 < 20);                // false
!(4 === 4);                // false
!("apple" !== "apple");    // true


// Combining Logical AND, OR, and NOT

(5 > 3) && !(7 < 2);       // true
(10 <= 20) || !(3 > 5);    // true
(4 === 4) && ("apple" === "banana") || !(true);  // false
(5 !== 5) || (true && false);  // false


// Logical AND with mixed types

(true && 1 > 0);           // true
(false && "apple" === "apple");  // false


// Logical OR with mixed types

(0 || "apple");            // "apple" (since 0 is falsy)
(false || 5);              // 5 (since false is falsy)
