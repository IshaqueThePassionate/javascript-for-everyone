# Combined Operators in JavaScript

## Introduction

Combined operators, also known as compound assignment operators, allow you to perform an operation and assign the result to a variable in a single step. They help make your code more concise and easier to read.

In JavaScript, combined operators are available for most arithmetic and bitwise operations.

## Common Combined Operators

Here is a list of the most commonly used combined operators in JavaScript, along with detailed explanations.

### 1. Addition Assignment (`+=`)

This operator adds the value on the right to the variable on the left and assigns the result to the variable.

**Syntax:**

```javascript
x += y;
```

**Explanation:**

- This operator is shorthand for `x = x + y`.
- If `x` initially has the value `5` and `y` is `3`, then after `x += y`, `x` will be `8`.
- This operation is useful when you want to increase the value of a variable by a certain amount without writing repetitive code.

**Example:**

```javascript
let a = 5;
a += 3; // a = a + 3
console.log(a); // Output: 8
```

### 2. Subtraction Assignment (`-=`)

This operator subtracts the value on the right from the variable on the left and assigns the result to the variable.

**Syntax:**

```javascript
x -= y;
```

**Explanation:**

- This operator is shorthand for `x = x - y`.
- If `x` initially has the value `10` and `y` is `4`, then after `x -= y`, `x` will be `6`.
- This operation is helpful when you need to decrease the value of a variable by a specific amount.

**Example:**

```javascript
let b = 10;
b -= 4; // b = b - 4
console.log(b); // Output: 6
```

### 3. Multiplication Assignment (`*=`)

This operator multiplies the variable on the left by the value on the right and assigns the result to the variable.

**Syntax:**

```javascript
x *= y;
```

**Explanation:**

- This operator is shorthand for `x = x * y`.
- If `x` initially has the value `7` and `y` is `2`, then after `x *= y`, `x` will be `14`.
- This operation is beneficial when you want to scale the value of a variable by a certain factor.

**Example:**

```javascript
let c = 7;
c *= 2; // c = c * 2
console.log(c); // Output: 14
```

### 4. Division Assignment (`/=`)

This operator divides the variable on the left by the value on the right and assigns the result to the variable.

**Syntax:**

```javascript
x /= y;
```

**Explanation:**

- This operator is shorthand for `x = x / y`.
- If `x` initially has the value `20` and `y` is `4`, then after `x /= y`, `x` will be `5`.
- This operation is useful when you want to reduce the value of a variable by dividing it by a specific number.

**Example:**

```javascript
let d = 20;
d /= 4; // d = d / 4
console.log(d); // Output: 5
```

### 5. Remainder Assignment (`%=`)

This operator divides the variable on the left by the value on the right and assigns the remainder to the variable.

**Syntax:**

```javascript
x %= y;
```

**Explanation:**

- This operator is shorthand for `x = x % y`.
- If `x` initially has the value `15` and `y` is `4`, then after `x %= y`, `x` will be `3`.
- The remainder operator is useful when you want to know what remains after dividing one number by another, especially for tasks like checking even or odd numbers.

**Example:**

```javascript
let e = 15;
e %= 4; // e = e % 4
console.log(e); // Output: 3
```

### 6. Exponentiation Assignment (`**=`)

This operator raises the variable on the left to the power of the value on the right and assigns the result to the variable.

**Syntax:**

```javascript
x **= y;
```

**Explanation:**

- This operator is shorthand for `x = x ** y`.
- If `x` initially has the value `3` and `y` is `2`, then after `x **= y`, `x` will be `9`.
- The exponentiation operator is useful when you need to perform power calculations, like squaring a number.

**Example:**

```javascript
let f = 3;
f **= 2; // f = f ** 2
console.log(f); // Output: 9
```

## Bitwise Combined Operators

JavaScript also supports bitwise combined operators, which perform bit-level operations. Here are some common ones:

### 1. Bitwise AND Assignment (`&=`)

This operator performs a bitwise AND operation and assigns the result to the variable.

**Syntax:**

```javascript
x &= y;
```

**Explanation:**

- This operator is shorthand for `x = x & y`.
- The bitwise AND operator compares each bit of the two operands and returns a new value with bits set to 1 where both corresponding bits are 1, otherwise 0.
- If `x` is `5` (binary `0101`) and `y` is `3` (binary `0011`), then `x &= y` will result in `1` (binary `0001`).

**Example:**

```javascript
let g = 5; // binary: 0101
g &= 3;    // binary: 0011
console.log(g); // Output: 1 (binary: 0001)
```

### 2. Bitwise OR Assignment (`|=`)

This operator performs a bitwise OR operation and assigns the result to the variable.

**Syntax:**

```javascript
x |= y;
```

**Explanation:**

- This operator is shorthand for `x = x | y`.
- The bitwise OR operator compares each bit of the two operands and returns a new value with bits set to 1 where either of the corresponding bits is 1.
- If `x` is `5` (binary `0101`) and `y` is `3` (binary `0011`), then `x |= y` will result in `7` (binary `0111`).

**Example:**

```javascript
let h = 5; // binary: 0101
h |= 3;    // binary: 0011
console.log(h); // Output: 7 (binary: 0111)
```

### 3. Bitwise XOR Assignment (`^=`)

This operator performs a bitwise XOR operation and assigns the result to the variable.

**Syntax:**

```javascript
x ^= y;
```

**Explanation:**

- This operator is shorthand for `x = x ^ y`.
- The bitwise XOR operator compares each bit of the two operands and returns a new value with bits set to 1 where the corresponding bits are different.
- If `x` is `5` (binary `0101`) and `y` is `3` (binary `0011`), then `x ^= y` will result in `6` (binary `0110`).

**Example:**

```javascript
let i = 5; // binary: 0101
i ^= 3;    // binary: 0011
console.log(i); // Output: 6 (binary: 0110)
```

### 4. Bitwise Left Shift Assignment (`<<=`)

This operator shifts the bits of the variable on the left by the number of positions specified by the value on the right and assigns the result to the variable.

**Syntax:**

```javascript
x <<= y;
```

**Explanation:**

- This operator is shorthand for `x = x << y`.
- The bitwise left shift operator moves all bits in the binary representation of the left-hand operand to the left by the number of positions specified by the right-hand operand. Zeroes are shifted into the rightmost positions.
- If `x` is `5` (binary `0101`) and you shift it left by `1` bit (`x <<= 1`), the result will be `10` (binary `1010`).

**Example:**

```javascript
let j = 5; // binary: 0101
j <<= 1;
console.log(j); // Output: 10 (binary: 1010)
```

### 5. Bitwise Right Shift Assignment (`>>=`)

This operator shifts the bits of the variable on the left to the right by the number of positions specified by the value on the right and assigns the result to the variable.

**Syntax:**

```javascript
x >>= y;
```

**Explanation:**

- This operator is shorthand for `x = x >> y`.
- The bitwise right shift operator moves all bits in the binary representation of the left-hand operand to the right by the number of positions specified by the right-hand operand. The bits shifted out are lost, and the leftmost bits are filled with the sign bit (for signed integers).
- If `x` is `5` (binary `0101`) and you shift it right by `1` bit (`x >>= 1`), the result will be `

2` (binary `0010`).

**Example:**

```javascript
let k = 5; // binary: 0101
k >>= 1;
console.log(k); // Output: 2 (binary: 0010)
```

## Conclusion

Combined operators in JavaScript provide a more concise way to write operations that update the value of a variable. They are not only limited to arithmetic operations but also extend to bitwise operations. By using combined operators, your code can become cleaner and easier to maintain.
