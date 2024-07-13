# Comparison in JavaScript

Comparison operators in JavaScript are used to compare values and return Boolean results. The`>`, `<`, `>=`, `<=`, `==`, and `!=` operators help determine the relationship between values, with type coercion in the case of `==` and `!=`. Understanding these operators is essential for making decisions in your programs.

### Producing Boolean Values
Comparison operators are used to produce Boolean values. They compare two values and return `true` or `false`.

Examples:
```javascript
console.log(3 > 2); // → true
console.log(3 < 2); // → false
```
- **`>`**: Greater than
- **`<`**: Less than

### String Comparisons
Strings can be compared in the same way as numbers. The comparison is roughly alphabetic, based on Unicode values.

Examples:
```javascript
console.log("Aardvark" < "Zoroaster"); // → true
```
- Uppercase letters are less than lowercase letters: `"Z" < "a"`.
- Nonalphabetic characters are also included in the ordering.

### Understanding Unicode
Unicode is a standard that assigns a unique code to virtually every character from various languages and scripts around the world, including Greek, Arabic, Japanese, and more. JavaScript uses Unicode to represent characters in strings. When comparing strings, JavaScript compares the Unicode values of the characters from left to right.

Example of Unicode comparison:
```javascript
console.log("A" < "a"); // → true
console.log("a" < "b"); // → true
console.log("Z" < "a"); // → true
```
Here, `"A"` has a lower Unicode value than `"a"`, and `"Z"` has a lower Unicode value than `"a"`.

### Other Comparison Operators
- **`>=`**: Greater than or equal to
- **`<=`**: Less than or equal to
- **`==`**: Equal to
- **`!=`**: Not equal to


## Greater Than or Equal To (`>=`)

The `>=` operator checks if the value on the left is greater than or equal to the value on the right.

### Example

```javascript
let x = 10;
let y = 5;
let z = 10;

console.log(x >= y); // true
console.log(y >= x); // false
console.log(x >= z); // true
```

## Less Than or Equal To (`<=`)

The `<=` operator checks if the value on the left is less than or equal to the value on the right.

### Example

```javascript
let x = 10;
let y = 15;
let z = 10;

console.log(x <= y); // true
console.log(y <= x); // false
console.log(x <= z); // true
```

## Equal To (`==`)

The `==` operator checks if the value on the left is equal to the value on the right. This operator performs type coercion, meaning it converts the values to the same type before comparing them.

### Example

```javascript
let a = 10;
let b = "10";
let c = 20;

console.log(a == b); // true, because "10" is converted to 10
console.log(a == c); // false
console.log(b == c); // false
```

## Not Equal To (`!=`)

The `!=` operator checks if the value on the left is not equal to the value on the right. This operator also performs type coercion.

### Example

```javascript
let a = 10;
let b = "10";
let c = 20;

console.log(a != b); // false, because "10" is converted to 10
console.log(a != c); // true
console.log(b != c); // true
```

Examples:
```javascript
console.log("Garnet" != "Ruby"); // → true
console.log("Pearl" == "Amethyst"); // → false
```

### Special Case: NaN
`NaN` (Not a Number) is a special value in JavaScript that is not equal to itself.

Example:
```javascript
console.log(NaN == NaN); // → false
```
`NaN` denotes the result of an invalid or nonsensical computation, and as such, it isn't considered equal to any other value, including itself.