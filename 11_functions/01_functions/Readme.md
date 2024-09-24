# Functions in JavaScript

**Functions** are central tools in JavaScript programming. They allow us to wrap a piece of code in a value, providing a way to structure larger programs, reduce repetition, associate names with subprograms, and isolate these subprograms from each other.


## Defining a Function

A function definition is a regular binding where the value of the binding is a function.

### Example: Square Function

This example defines a function `square` that returns the square of a given number:

```javascript
const square = function(x) {
    return x * x;
};

console.log(square(12));
// → 144
```

#### Explanation:

- `const square = function(x) { return x * x; };`: Defines a function `square` that takes one parameter `x` and returns the square of `x`.
- `console.log(square(12));`: Calls the `square` function with the argument `12` and logs the result, which is `144`.

---

### Example: makeNoise Function

This example defines a function `makeNoise` that logs a sound to the console:

```javascript
const makeNoise = function() {
    console.log("Pling!");
};

makeNoise();
// → Pling!
```

#### Explanation:

- `const makeNoise = function() { console.log("Pling!"); };`: Defines a function `makeNoise` that takes no parameters and logs "Pling!" to the console.
- `makeNoise();`: Calls the `makeNoise` function, resulting in the log output.

---

### Example: roundTo Function

This example defines a function `roundTo` that rounds a number to the nearest multiple of a given step:

```javascript
const roundTo = function(n, step) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(23, 10));
// → 20
```

#### Explanation:

- `const roundTo = function(n, step) { let remainder = n % step; return n - remainder + (remainder < step / 2 ? 0 : step); };`: Defines a function `roundTo` that takes two parameters, `n` and `step`. It rounds `n` to the nearest multiple of `step`.
- `console.log(roundTo(23, 10));`: Calls the `roundTo` function with the arguments `23` and `10`, resulting in `20`.

---

## Returning Values from Functions

Some functions, like `roundTo` and `square`, return a value. Others, like `makeNoise`, do not return a value but instead perform a side effect (e.g., logging to the console). The `return` statement is used to return a value from a function. When encountered, the function execution stops, and the specified value is returned.

- If a `return` statement is used without an expression, the function returns `undefined`.
- Functions without a `return` statement also return `undefined`.

### Example: Returning Undefined

```javascript
const doNothing = function() {
    return;
};

console.log(doNothing());
// → undefined
```

#### Explanation:

- `const doNothing = function() { return; };`: Defines a function `doNothing` that returns `undefined` because the `return` statement has no expression.
- `console.log(doNothing());`: Calls the `doNothing` function, which returns and logs `undefined`.

---

## Parameters and Bindings

Parameters in a function behave like regular bindings, but their initial values are provided by the caller of the function.

### Example: Function with Parameters

```javascript
const add = function(a, b) {
    return a + b;
};

console.log(add(5, 3));
// → 8
```

#### Explanation:

- `const add = function(a, b) { return a + b; };`: Defines a function `add` that takes two parameters `a` and `b`, and returns their sum.
- `console.log(add(5, 3));`: Calls the `add` function with the arguments `5` and `3`, resulting in `8`.

