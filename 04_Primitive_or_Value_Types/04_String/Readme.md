# Strings in JavaScript

## Table of Contents
- [What are Strings?](#what-are-strings)
- [Creating Strings](#creating-strings)
- [Special Characters](#special-characters)
- [String Representation](#string-representation)
- [Operations on Strings](#operations-on-strings)
- [Template Literals](#template-literals)
- [Strings are Immutable](#strings-are-immutable)
- [String Methods](#string-methods)
  - [trim()](#1-trim)
  - [toUpperCase() and toLowerCase()](#2-touppercase-and-tolowercase)
  - [indexOf()](#3-methods-with-arguments---indexof)
  - [Method Chaining](#4-method-chaining)
  - [slice()](#5-slice-method)
  - [replace() and repeat()](#6-replace--repeat-methods)

---

### What are Strings?
Strings are used to represent text in JavaScript. They are written by enclosing the content in quotes. You can use:
- Single quotes: `'Text'`
- Double quotes: `"Text"`
- Backticks: `` `Text` ``

---

### Creating Strings
Examples:
```javascript
'Down on the sea'
"Lie on the ocean"
`Float on the ocean`
```
The quotes at the start and end must match. You can include almost anything between the quotes to make a string.

---

### Special Characters
Some characters need special handling:
- **Quotes inside quotes**: Can be tricky as they may end the string.
- **Newlines**: Can only be included with backticks (`` ` ``).

To include special characters, use a backslash (`\`), which escapes the character following it:
- **Escaping quotes**: A backslash before a quote makes it part of the string, not the end.
- **Newline (`\n`)**: Represents a new line.
- **Tab (`\t`)**: Represents a tab character.

Example:
```javascript
"This is the first line\nAnd this is the second"
```

Actual text:
```text
This is the first line
And this is the second
```

To include a backslash itself, use double backslashes:
```javascript
"A newline character is written like \"\\n\"."
```

---

### String Representation
JavaScript strings are based on the Unicode standard, assigning a number to virtually every character (Greek, Arabic, Japanese, etc.). JavaScript uses 16 bits per character, but some characters (like emojis) take up two character positions.

---

### Operations on Strings
- **Concatenation (`+`)**: Glues two strings together.
```javascript
"con" + "cat" + "e" + "nate" // "concatenate"
```

---

### Template Literals
Strings with backticks can:
- **Span multiple lines**.
- **Embed other values** using `${}`.

Example:
```javascript
`half of 100 is ${100 / 2}` // "half of 100 is 50"
```

This computes the value inside `${}`, converts it to a string, and includes it in the text.

---

### Strings are Immutable
In JavaScript, **strings are immutable** (they cannot be changed)[cite: 2].
- No changes can be directly made to an existing string[cite: 2].
- Whenever we perform an operation or use a method to change a string, **a new string is created** and the original remains unchanged[cite: 2].

```javascript
let msg = "hello";
msg.toUpperCase(); // returns "HELLO"

console.log(msg); // still "hello" (original does not change)

// To keep the change, assign it to a new variable or reassign:
msg = msg.toUpperCase();
console.log(msg); // "HELLO"
```

---

### String Methods

Methods are built-in actions that can be performed on strings.

#### 1. `trim()`
Removes whitespace from both ends (start and end) of a string, returning a new string[cite: 3].

```javascript
let text = "   Hello World!   ";
let trimmedText = text.trim();

console.log(trimmedText); // "Hello World!"
```

#### 2. `toUpperCase()` and `toLowerCase()`
Converts all characters of the string to either uppercase or lowercase[cite: 3].

```javascript
let str = "Apna College";

console.log(str.toUpperCase()); // "APNA COLLEGE"
console.log(str.toLowerCase()); // "apna college"
```

#### 3. Methods with Arguments - `indexOf()`
Returns the first index (position) where a given substring is found[cite: 3]. If the substring is not found, it returns `-1`.

```javascript
let str = "ILoveCoding";

console.log(str.indexOf("Love")); // 1
console.log(str.indexOf("o"));    // 2 (first occurrence)
console.log(str.indexOf("z"));    // -1 (not found)
```

#### 4. Method Chaining
Using multiple string methods one after another in a single execution line[cite: 3]. Execution takes place from left to right.

```javascript
let msg = "   hello   ";
let result = msg.trim().toUpperCase();

console.log(result); // "HELLO"
```

#### 5. `slice()` Method
Extracts a part of a string and returns it as a new string without modifying the original string[cite: 3].
- Syntax: `str.slice(startIndex, endIndex)` (where `endIndex` is non-inclusive)

```javascript
let str = "ApnaCollege";

console.log(str.slice(0, 4)); // "Apna"
console.log(str.slice(4));    // "College" (slices till end)
console.log(str.slice(-3));   // "ege" (counts backwards from the end)
```

#### 6. `replace()` & `repeat()` Methods

- **`replace(searchValue, newValue)`**: Searches for a specified value and returns a new string where the first match is replaced[cite: 3].
- **`repeat(count)`**: Returns a new string with a specified number of copies of the string concatenated together[cite: 3].

```javascript
// replace()
let msg = "I love coding";
let newMsg = msg.replace("love", "enjoy");
console.log(newMsg); // "I enjoy coding"

// repeat()
let fruit = "Mango ";
console.log(fruit.repeat(3)); // "Mango Mango Mango "
```