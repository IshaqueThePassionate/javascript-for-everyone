# JavaScript Logic-Building Practice Problems

A curated collection of fundamental JavaScript programming logic problems focused on array manipulation, string processing, tracking maximum lengths, and random range generation.

---

## Table of Contents
- [Question 1: Elements Larger Than a Number](#question-1-elements-larger-than-a-number)
- [Question 2: Extract Unique Characters from a String](#question-2-extract-unique-characters-from-a-string)
- [Question 3: Longest Country Name](#question-3-longest-country-name)
- [Question 4: Count Vowels in a String](#question-4-count-vowels-in-a-string)
- [Question 5: Random Number in a Range (start, end)](#question-5-random-number-in-a-range-start-end)

---

## Question 1: Elements Larger Than a Number

**Problem Statement:**  
Write a JavaScript function that takes an array and a target number, then outputs all elements in the array that are strictly greater than that number.

### Logical Approach
1. Iterate through the array using a standard `for` loop.
2. At each iteration, evaluate whether the current element `arr[i]` is greater than `num`.
3. If the condition is true, log or collect the element; otherwise, proceed to the next iteration.

```javascript
let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

// Function to print elements strictly greater than 'num'
function getElements(arr, num) {
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Check if current element is greater than the given number
        if (arr[i] > num) {
            console.log(arr[i]); // Print matching element
        }
    }
}

// Function call
getElements(arr, num);
```

---

## Question 2: Extract Unique Characters from a String

**Problem Statement:**  
Write a JavaScript function to extract all unique characters from a given string, removing all duplicate occurrences.  
*Example:* `str = "abcdabcdefgggh"` $\rightarrow$ `ans = "abcdefgh"`

### Logical Approach
1. Initialize an empty string variable `ans` to hold unique characters.
2. Iterate through each character of the input string from left to right.
3. Check if the current character already exists in `ans` using `indexOf()`.
4. If `indexOf(currChar) === -1` (meaning not yet present), append it to `ans`; otherwise, ignore it.

```javascript
let str = "abcdabcdefgggh";

// Function to build and return a string of unique characters
function getUnique(str) {
    let ans = ""; // Holds unique characters

    for (let i = 0; i < str.length; i++) {
        let currChar = str[i]; // Current character under evaluation

        // indexOf returns -1 if the character does not exist in 'ans'
        if (ans.indexOf(currChar) === -1) {
            ans += currChar; // Append character since it is not a duplicate
        }
    }

    return ans; // Return the final string with unique characters
}

// Function call
console.log(getUnique(str)); // Output: "abcdefgh"
```

---

## Question 3: Longest Country Name

**Problem Statement:**  
Write a JavaScript function that accepts an array of country names and returns the longest country name.  
*Example:* `country = ["Australia", "Germany", "United States of America"]` $\rightarrow$ `output = "United States of America"`

### Logical Approach
1. Assume the first country at index `0` is the longest and store its index in `ansIdx`.
2. Loop through the array and compare the length of the country at the current index against the length of the country at `ansIdx`.
3. If the current country's length is strictly greater, update `ansIdx` to point to the current index.
4. Return `country[ansIdx]` after checking all elements.

```javascript
let country = ["Australia", "Germany", "United States of America"];

// Function to find and return the longest string from an array of country names
function longestName(country) {
    let ansIdx = 0; // Assume the first item has the longest length initially

    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length; // Current record-holding length
        let currLen = country[i].length;       // Length of current country in iteration

        // If current element is longer than previous record, update the record index
        if (currLen > ansLen) {
            ansIdx = i; // Save new longest index
        }
    }

    return country[ansIdx]; // Return the longest country string
}

// Function call
console.log(longestName(country)); // Output: "United States of America"
```

---

## Question 4: Count Vowels in a String

**Problem Statement:**  
Write a JavaScript function that accepts a string argument and counts the total number of vowels (`a`, `e`, `i`, `o`, `u`) present in it.

### Logical Approach
1. Initialize a counter variable `count = 0`.
2. Traverse through each character of the string using a loop.
3. Compare the current character against each vowel (`a`, `e`, `i`, `o`, `u`) using logical `||` operators or conversion.
4. Increment `count` by 1 whenever a match occurs, and return `count` at the end.

```javascript
let str = "apnacollege";

// Function to calculate the total frequency of vowel characters in a string
function countVowels(str) {
    let count = 0; // Counter for vowels

    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i).toLowerCase(); // Normalize character to lowercase

        // Check if character matches any of the 5 standard vowels
        if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
            count++; // Increment count on vowel match
        }
    }

    return count; // Return total vowels found
}

// Function call
console.log(countVowels(str)); // Output: 5
```

---

## Question 5: Random Number in a Range (start, end)

**Problem Statement:**  
Write a JavaScript function to generate a random integer within a specified range `(start, end)`.

### Logical Approach
1. Compute the size of the interval: `diff = end - start`.
2. Generate a random decimal between `0` and `diff` using `Math.random() * diff`.
3. Round down to the nearest whole integer using `Math.floor()`.
4. Shift the baseline by adding `start` so the resulting integer falls strictly between `start` and `end`.

```javascript
let start = 100;
let end = 200;

// Function to generate a random integer within [start, end)
function generateRandom(start, end) {
    let diff = end - start; // Determine range spread

    // Math.random() * diff gives [0, diff)
    // Math.floor() converts to integer [0, diff - 1]
    // + start shifts the range to [start, end - 1]
    return Math.floor(Math.random() * diff) + start;
}

// Function call
console.log(generateRandom(start, end)); // Output: A random number between 100 and 199
```

---