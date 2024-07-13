# Arithmetic Operators in JavaScript

## Introduction

Arithmetic operators are used to perform arithmetic operations on numbers in JavaScript. These operations include addition, subtraction, multiplication, division, modulus, exponentiation, increment, and decrement. This guide covers each of these operators with examples.

## Table of Contents
- [Arithmetic Operators in JavaScript](#arithmetic-operators-in-javascript)
  - [Introduction](#introduction)
  - [Table of Contents](#table-of-contents)
  - [Basic Arithmetic Operations](#basic-arithmetic-operations)
  - [Operator Precedence](#operator-precedence)
  - [Other Operators](#other-operators)
  - [Precedence Rules](#precedence-rules)
  - [The Remainder Operator](#the-remainder-operator)
  - [Addition (`+`)](#addition-)
  - [Subtraction (`-`)](#subtraction--)
  - [Multiplication (`*`)](#multiplication-)
  - [Division (`/`)](#division-)
  - [Modulus (`%`)](#modulus-)
  - [Exponentiation (`**`)](#exponentiation-)
  - [Increment (`++`)](#increment-)
    - [Post-increment](#post-increment)
    - [Pre-increment](#pre-increment)
  - [Decrement (`--`)](#decrement---)
    - [Post-decrement](#post-decrement)
    - [Pre-decrement](#pre-decrement)
  - [Summary](#summary)

## Basic Arithmetic Operations

In JavaScript, arithmetic operations like addition and multiplication take two number values and produce a new number. Here are some examples:

```javascript
100 + 4 * 11
```

- **Operators**: The `+` symbol stands for addition and the `*` symbol stands for multiplication. Applying an operator between two values will perform the operation and produce a new value.

## Operator Precedence

Does `100 + 4 * 11` mean "Add 4 to 100 and then multiply by 11", or "Multiply 4 by 11 and then add 100"? The multiplication is done first, just like in standard mathematics. To change the order, use parentheses:

```javascript
(100 + 4) * 11
```

## Other Operators

- **Subtraction**: Use the `-` operator.
- **Division**: Use the `/` operator.

## Precedence Rules

When operators appear together without parentheses, their order is determined by precedence:
- Multiplication (`*`) and division (`/`) have the same precedence.
- Addition (`+`) and subtraction (`-`) have the same precedence.
- Operators with the same precedence are applied from left to right.

For example:

```javascript
1 - 2 + 1 // Evaluates to (1 - 2) + 1
```

When in doubt, use parentheses to clarify the order of operations.

## The Remainder Operator

The `%` symbol represents the remainder operation, also known as modulo. It gives the remainder of dividing one number by another:

```javascript
314 % 100 // Produces 14
144 % 12  // Produces 0
```

The `%` operator has the same precedence as multiplication and division.

## Addition (`+`)

The addition operator adds two numbers.

```javascript
let a = 5;
let b = 3;
let sum = a + b; // 8
console.log(sum); // 8
```

## Subtraction (`-`)

The subtraction operator subtracts the second number from the first.

```javascript
let a = 5;
let b = 3;
let difference = a - b; // 2
console.log(difference); // 2
```

## Multiplication (`*`)

The multiplication operator multiplies two numbers.

```javascript
let a = 5;
let b = 3;
let product = a * b; // 15
console.log(product); // 15
```

## Division (`/`)

The division operator divides the first number by the second.

```javascript
let a = 6;
let b = 3;
let quotient = a / b; // 2
console.log(quotient); // 2
```

## Modulus (`%`)

The modulus operator returns the remainder of the division of the first number by the second.

```javascript
let a = 5;
let b = 3;
let remainder = a % b; // 2
console.log(remainder); // 2
```

## Exponentiation (`**`)

The exponentiation operator raises the first number to the power of the second number.

```javascript
let a = 2;
let b = 3;
let power = a ** b; // 8
console.log(power); // 8
```

## Increment (`++`)

The increment operator increases a number by one.

### Post-increment

In post-increment, the operator returns the value before incrementing.

```javascript
let a = 5;
console.log(a++); // 5 (a is now 6)
console.log(a);   // 6
```

### Pre-increment

In pre-increment, the operator returns the value after incrementing.

```javascript
let a = 5;
console.log(++a); // 6
console.log(a);   // 6
```

## Decrement (`--`)

The decrement operator decreases a number by one.

### Post-decrement

In post-decrement, the operator returns the value before decrementing.

```javascript
let a = 5;
console.log(a--); // 5 (a is now 4)
console.log(a);   // 4
```

### Pre-decrement

In pre-decrement, the operator returns the value after decrementing.

```javascript
let a = 5;
console.log(--a); // 4
console.log(a);   // 4
```

## Summary

JavaScript provides a range of arithmetic operators to perform common mathematical operations. Understanding how to use these operators and their precedence is fundamental for manipulating numerical data in your programs.
