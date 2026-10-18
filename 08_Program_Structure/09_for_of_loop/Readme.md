# JavaScript `for...of` Loop

A comprehensive reference guide covering the JavaScript `for...of` loop, its syntax, iteration over iterable objects (arrays, strings, sets, and maps), comparison with traditional loops, nested `for...of` loops, and practical use cases.

---

## Table of Contents
- [Introduction](#introduction)
- [Syntax](#syntax)
- [How It Works](#how-it-works)
- [Iterating Over Different Data Types](#iterating-over-different-data-types)
  - [Iterating Over Arrays](#iterating-over-arrays)
  - [Iterating Over Strings](#iterating-over-strings)
  - [Iterating Over Sets](#iterating-over-sets)
  - [Iterating Over Maps](#iterating-over-maps)
- [Nested `for...of` Loops](#nested-forof-loops)
- [Using `break` and `continue`](#using-break-and-continue)
- [`for...of` vs Traditional `for` vs `for...in`](#forof-vs-traditional-for-vs-forin)
- [Getting Indices with `entries()`](#getting-indices-with-entries)
- [Common Mistakes](#common-mistakes)
- [Conclusion](#conclusion)

---

## Introduction

Introduced in ECMAScript 2015 (ES6), the `for...of` loop provides a clean, concise, and readable way to iterate over iterable collections. Unlike traditional `for` loops, you do not need to manage an index variable, check conditions, or write increment statements.

---

## Syntax

```javascript
for (const variable of iterable) {
    // Code block to execute for each element
}
```

- **`variable`**: On each iteration, a value of a different property is assigned to `variable`. It is best practice to declare this with `const` if the variable is not reassigned inside the block, or `let` if it is.
- **`iterable`**: An object that has iterable properties (such as an `Array`, `String`, `Set`, `Map`, or `arguments` object).

---

## How It Works

1. The loop accesses the iterator of the collection.
2. For every step, it extracts the direct **value** of the current element.
3. The extracted value is assigned to the loop variable.
4. The body executes.
5. The loop automatically moves to the next element and stops when no items remain.

---

## Iterating Over Different Data Types

### Iterating Over Arrays

The most common use case is extracting elements directly from an array without indexing:

```javascript
const fruits = ["Apple", "Mango", "Banana", "Orange"];

for (const fruit of fruits) {
    console.log(fruit);
}
```

**Output:**
```text
Apple
Mango
Banana
Orange
```

---

### Iterating Over Strings

Strings are iterables in JavaScript. A `for...of` loop traverses character by character, correctly handling Unicode surrogate pairs (such as emojis):

```javascript
const word = "JavaScript";

for (const char of word) {
    console.log(char);
}
```

**Output:**
```text
J
a
v
a
S
c
r
i
p
t
```

---

### Iterating Over Sets

A `Set` stores unique values. A `for...of` loop iterates in insertion order:

```javascript
const uniqueNumbers = new Set([10, 20, 30, 20, 10]);

for (const num of uniqueNumbers) {
    console.log(num);
}
```

**Output:**
```text
10
20
30
```

---

### Iterating Over Maps

A `Map` holds key-value pairs. Using array destructuring with `for...of` allows clean extraction:

```javascript
const userRoles = new Map([
    ["Alice", "Admin"],
    ["Bob", "Editor"],
    ["Charlie", "Subscriber"]
]);

for (const [user, role] of userRoles) {
    console.log(`${user} is an ${role}`);
}
```

**Output:**
```text
Alice is an Admin
Bob is an Editor
Charlie is an Subscriber
```

---

## Nested `for...of` Loops

When handling two-dimensional arrays or collections of collections, nested `for...of` loops eliminate nested index variables (`i`, `j`):

```javascript
const heroTeams = [
    ["Ironman", "Thor", "Hulk"],
    ["Batman", "Superman", "Flash"]
];

for (const team of heroTeams) {
    console.log("--- Team ---");
    for (const hero of team) {
        console.log(hero);
    }
}
```

**Output:**
```text
--- Team ---
Ironman
Thor
Hulk
--- Team ---
Batman
Superman
Flash
```

---

## Using `break` and `continue`

Unlike array helper methods such as `forEach()`, `map()`, or `filter()`, a `for...of` loop fully supports standard loop control statements:

```javascript
const scores = [45, 80, 92, 30, 99];

for (const score of scores) {
    if (score < 40) {
        continue; // Skips scores below 40
    }
    if (score > 95) {
        break; // Stops execution if score exceeds 95
    }
    console.log(`Accepted Score: ${score}`);
}
```

---

## `for...of` vs Traditional `for` vs `for...in`

| Feature | Traditional `for` | `for...of` | `for...in` |
| :--- | :--- | :--- | :--- |
| **Iterates Over** | Index / Counter numbers | **Values** of iterables | **Keys / Property names** |
| **Best Used For** | Custom step jumps, backwards traversal | Arrays, Strings, Sets, Maps | Plain JavaScript Objects (`{}`) |
| **Index Access** | Direct access via `i` | Needs `.entries()` | Returns property key as a string |
| **Supports `break` / `continue`** | Yes | Yes | Yes |

---

## Getting Indices with `entries()`

If you need both the index and the value while using `for...of`, combine it with the `arr.entries()` method:

```javascript
const items = ["Notebook", "Pen", "Eraser"];

for (const [index, item] of items.entries()) {
    console.log(`Index ${index}: ${item}`);
}
```

**Output:**
```text
Index 0: Notebook
Index 1: Pen
Index 2: Eraser
```

---

## Common Mistakes

### Iterating Over Plain Objects

Plain JavaScript objects are **not** iterable by default. Passing an object directly into a `for...of` loop results in a `TypeError`:

```javascript
const student = { name: "Ishaque", rollNo: 101 };

// Incorrect (Throws TypeError: student is not iterable):
// for (const val of student) { console.log(val); }

// Correct (Use Object.keys, Object.values, or Object.entries):
for (const [key, value] of Object.entries(student)) {
    console.log(`${key}:${value}`);
}
```

---

## Conclusion

The `for...of` statement provides readable, expressive, and safe traversal over values across all iterable structures in modern JavaScript. When custom step sizes or reverse index arithmetic are not required, `for...of` serves as the preferred standard over index-managed loops.