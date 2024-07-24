# Ternary (Conditional) Operator (?:) in JavaScript

## Introduction

The ternary operator, also known as the conditional operator, is a quick way to write an `if-else` statement. It takes three parts and helps make simple condition checks more concise.
The conditional operator (`? :`) also uses short-circuit evaluation. Only the selected value is evaluated.

## Syntax

```javascript
condition ? expressionIfTrue : expressionIfFalse
```

- **condition**: The expression that is checked (must be true or false).
- **expressionIfTrue**: The value or action if the condition is true.
- **expressionIfFalse**: The value or action if the condition is false.

## Examples

### Basic Example

Example:
```javascript
let isMember = true;
console.log(isMember ? "Welcome back!" : "Sign up now!"); // → "Welcome back!"
```


```javascript
let age = 18;
let isAdult = (age >= 18) ? 'Yes' : 'No';
console.log(isAdult); // Output: Yes
```

If `age` is 18 or more, `isAdult` is `'Yes'`. Otherwise, it is `'No'`.

### Nested Ternary Operator

```javascript
let score = 85;
let grade = (score >= 90) ? 'A' : (score >= 80) ? 'B' : 'C';
console.log(grade); // Output: B
```

If `score` is 90 or more, `grade` is `'A'`. If `score` is 80 or more but less than 90, `grade` is `'B'`. Otherwise, `grade` is `'C'`.

### Using Ternary Operator in Functions

```javascript
function greet(isMorning) {
  return isMorning ? 'Good morning!' : 'Good evening!';
}

console.log(greet(true));  // Output: Good morning!
console.log(greet(false)); // Output: Good evening!
```

The function `greet` returns 'Good morning!' if `isMorning` is true, otherwise 'Good evening!'.

## Best Practices

- **Keep It Simple**: Use the ternary operator for simple conditions. For complex conditions, use `if-else` statements for clarity.
- **Avoid Nesting**: Nesting ternary operators can make code hard to read. Use `if-else` statements if multiple conditions need checking.
- **Readability**: Always prioritize code readability. If the ternary operator makes the code unclear, use an `if-else` statement instead.

## Conclusion

The ternary operator is a handy tool for making simple conditional checks more concise. Remember to use it for straightforward conditions and keep your code easy to read.
