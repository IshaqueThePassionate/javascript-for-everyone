# Numbers in JavaScript

## Introduction

Numbers are a fundamental data type in JavaScript, used for arithmetic operations, comparisons, and more. This guide covers the essentials of working with numbers in JavaScript, including types, operations, and how numbers are stored and handled.


## What are Number Values?

Number values are numeric values used in JavaScript programs. For example, writing `13` in a program creates the bit pattern for the number 13 in the computer's memory.

## How Numbers are Stored

JavaScript uses 64 bits to store a single number value. With 64 bits, you can create \(2^{64}\) different patterns, which equals about 18 quintillion different numbers.

## Handling Large Numbers

In the past, smaller memory sizes meant numbers were often stored using 8 or 16 bits, making overflow common. Modern computers, even those in your pocket, have ample memory, so 64-bit numbers are standard, and overflow is rare.

## Fractional Numbers

Fractional numbers are written with a dot, like `9.81`. For very large or very small numbers, scientific notation can be used, such as `2.998e8` (which equals 299,800,000).

## Precision in Calculations

- **Integers**: Calculations with whole numbers less than 9 quadrillion are always precise.
- **Fractional Numbers**: Calculations may lose precision due to the 64-bit limit. This is similar to how π (pi) cannot be precisely expressed with finite decimal digits. Thus, treat fractional digital numbers as approximations, not exact values.

## Types of Numbers

JavaScript has a single `Number` type to represent both integers and floating-point values. This type is based on the IEEE 754 standard for floating-point arithmetic.

### Integers

Integers are whole numbers without a decimal point.

```javascript
let integer = 42;
```

### Floating-Point Numbers

Floating-point numbers have a decimal point.

```javascript
let float = 3.14;
```

### BigInt

JavaScript also has the `BigInt` type for representing integers with arbitrary precision. This is useful for dealing with large integers that exceed the safe integer limit for the `Number` type.

```javascript
let bigInt = 1234567890123456789012345678901234567890n;
```

## Number Operations

JavaScript supports a variety of arithmetic operations on numbers:

- Addition: `+`
- Subtraction: `-`
- Multiplication: `*`
- Division: `/`
- Modulus (Remainder): `%`
- Exponentiation: `**`

### Example

```javascript
let x = 10;
let y = 3;

console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.3333333333333335
console.log(x % y); // 1
console.log(x ** y); // 1000
```
