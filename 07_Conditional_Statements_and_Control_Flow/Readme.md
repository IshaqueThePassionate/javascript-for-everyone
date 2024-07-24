### Conditions of Control Flow Statements

In JavaScript, statements like `if`, `while`, and `do-while` use conditions to decide what code to run. These conditions usually check if something is `true` or `false`.

However, JavaScript is flexible and accepts any value in these conditions. It treats some values as `true` (truthy) and others as `false` (falsy).

#### Examples of Truthy and Falsy Values

**Falsy Values:**
These values are considered false when checked in a condition:
- `undefined`
- `null`
- `false`
- `0`
- `NaN` (Not-a-Number)
- `''` (empty string)

**Truthy Values:**
Any value that is not falsy is considered truthy. For example:
- `true`
- Any number other than 0 (like `1`, `-1`)
- Any non-empty string (like `'hello'`)
- Objects and arrays (like `{}`, `[]`)

#### How Conditions Work

The following two `if` statements do the same thing because both check if the value is truthy:

```javascript
if (value) {
    // Runs if value is truthy
}

if (Boolean(value) === true) {
    // Runs if value is truthy
}
```

### Example

Let's see this in action:

```javascript
let value1 = 0;
let value2 = 'Hello';

if (value1) {
    console.log('value1 is truthy');
} else {
    console.log('value1 is falsy');  // This will run because 0 is falsy
}

if (value2) {
    console.log('value2 is truthy');  // This will run because 'Hello' is truthy
} else {
    console.log('value2 is falsy');
}
```

- `value1` is `0`, which is a falsy value, so the `else` block runs.
- `value2` is `'Hello'`, which is a truthy value, so the `if` block runs.

### Summary

- **Control Flow Statements:** `if`, `while`, and `do-while` use conditions to decide what code to run.
- **Falsy Values:** These are values that are treated as `false` in conditions (`undefined`, `null`, `false`, `0`, `NaN`, `''`).
- **Truthy Values:** Everything else is treated as `true`.

For more detailed information on truthy and falsy values, see §16.2 "Falsy and truthy values".