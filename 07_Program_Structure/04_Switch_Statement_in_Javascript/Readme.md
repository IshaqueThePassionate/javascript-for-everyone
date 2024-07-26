# README

## JavaScript Switch Statements

### Introduction

In programming, dispatching means choosing and running specific code based on the value of a variable or expression. This helps handle different conditions or situations in a program. In JavaScript, you can use the `switch` statement to select and run the correct block of code based on the value of an expression.

The `switch` statement is used to execute one block of code among many based on the evaluation of an expression. It is a cleaner alternative to using multiple `if...else if...else` statements when you need to compare a value against multiple possible matches.

### When to Use `if-else` and `switch`

**if-else**
- Use `if-else` statements when you have a few conditions to check.
- `if-else` is more flexible, allowing complex conditions and logical expressions.
- `if-else` can handle conditions that are not strictly equal (e.g., using comparison operators).

**switch**
- Use `switch` statements when you have multiple specific values to check against a single variable.
- `switch` is more readable and cleaner for dispatching based on a single variable with many possible values.
- `switch` can be easier to maintain and understand when dealing with multiple discrete cases.

### Syntax

A `switch` statement looks as follows:

```javascript
switch (expression) {
  case value1:
    // statements
    break;
  case value2:
    // statements
    break;
  // other cases
  default:
    // default statements
}
```

### How It Works

1. It evaluates the `switch` expression.
2. It jumps to the first `case` clause whose expression matches the `switch` expression.
3. If no match is found, it jumps to the `default` clause (if present).
4. If there is no `default` clause, it does nothing.

### Example

Let's look at an example where a number from 1 to 7 is converted to the name of a weekday:

```javascript
function dayOfTheWeek(num) {
  switch (num) {
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    case 7:
      return 'Sunday';
    default:
      return 'Invalid day';
  }
}

console.log(dayOfTheWeek(5)); // Output: Friday
```

**Explanation:**

- The function `dayOfTheWeek` takes a number `num` as an argument.
- The `switch` statement checks the value of `num` and matches it against the `case` clauses.
- If `num` is 1, it returns 'Monday'; if `num` is 2, it returns 'Tuesday'; and so on.
- If `num` does not match any case (i.e., it's not between 1 and 7), it returns 'Invalid day'.
- In the example, `dayOfTheWeek(5)` is called, which matches `case 5` and returns 'Friday'.

<br>

### Don't Forget to `return` or `break`

At the end of a `case` clause, execution continues with the next `case` clause unless you `return` or `break`. For example:

```javascript
function englishToFrench(english) {
  let french;
  switch (english) {
    case 'hello':
      french = 'bonjour';
      break;
    case 'goodbye':
      french = 'au revoir';
      break;
    default:
      french = 'not recognized';
  }
  return french;
}

console.log(englishToFrench('hello')); // Output: bonjour
```

**Explanation:**

- The function `englishToFrench` takes a string `english` as an argument.
- The `switch` statement checks the value of `english` and matches it against the `case` clauses.
- If `english` is 'hello', it assigns 'bonjour' to the variable `french` and breaks out of the `switch` statement.
- If `english` is 'goodbye', it assigns 'au revoir' to `french` and breaks out of the `switch` statement.
- If `english` does not match any case, it assigns 'not recognized' to `french`.
- In the example, `englishToFrench('hello')` is called, which matches `case 'hello'`, assigns 'bonjour' to `french`, and returns 'bonjour'.

<br>

Without `break`, the execution falls through to the next `case` clause:

```javascript
function englishToFrenchWithoutBreak(english) {
  let french;
  switch (english) {
    case 'hello':
      french = 'bonjour';
    case 'goodbye':
      french = 'au revoir';
  }
  return french;
}

console.log(englishToFrenchWithoutBreak('hello')); // Output: au revoir
```

**Explanation:**

- The function `englishToFrenchWithoutBreak` is similar to the previous function but lacks `break` statements.
- When `englishToFrenchWithoutBreak('hello')` is called, it matches `case 'hello'` and assigns 'bonjour' to `french`.
- However, due to the lack of a `break` statement, execution falls through to the next `case` clause, assigning 'au revoir' to `french`.
- As a result, the function returns 'au revoir' instead of 'bonjour'.

<br>

### Empty Case Clauses

The statements of a `case` clause can be omitted, which effectively gives us multiple case expressions per case clause. For example:

```javascript
function getColor(value) {
  let color;
  switch (value) {
    case 1:
    case 2:
    case 3:
      color = 'Red';
      break;
    case 4:
    case 5:
    case 6:
      color = 'Green';
      break;
    default:
      color = 'Unknown';
  }
  return color;
}

console.log(getColor(2)); // Output: Red
console.log(getColor(5)); // Output: Green
console.log(getColor(7)); // Output: Unknown
```

**Explanation:**

- The function `getColor` takes a number `value` as an argument.
- The `switch` statement checks the value and matches it against multiple `case` clauses without statements.
- If `value` is 1, 2, or 3, it assigns 'Red' to the variable `color` and breaks out of the `switch` statement.
- If `value` is 4, 5, or 6, it assigns 'Green' to `color` and breaks out of the `switch` statement.
- If `value` does not match any case, it assigns 'Unknown' to `color`.
- In the examples:
  - `getColor(2)` matches `case 2` and returns 'Red'.
  - `getColor(5)` matches `case 5` and returns 'Green'.
  - `getColor(7)` does not match any case and returns 'Unknown'.

<br>

### Checking for Illegal Values via a Default Clause

A default clause is jumped to if the `switch` expression has no other match. That makes it useful for error checking:

```javascript
function isWeekDay(name) {
  switch (name) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
      return true;
    case 'Saturday':
    case 'Sunday':
      return false;
    default:
      throw new Error('Illegal value: ' + name);
  }
}

console.log(isWeekDay('Wednesday')); // Output: true
console.log(isWeekDay('Sunday')); // Output: false
```

**Explanation:**

- The function `isWeekDay` takes a string `name` as an argument.
- The `switch` statement checks the value of `name` and matches it against the `case` clauses.
- If `name` is a weekday ('Monday' to 'Friday'), it returns `true`.
- If `name` is a weekend day ('Saturday' or 'Sunday'), it returns `false`.
- If `name` does not match any case, the `default` clause throws an error with a message indicating the illegal value.
- In the examples:
  - `isWeekDay('Wednesday')` matches `case 'Wednesday'` and returns `true`.
  - `isWeekDay('Sunday')` matches `case 'Sunday'` and returns `false`.

<br>

To demonstrate the error handling with an illegal value:

```javascript
assert.throws(
  () => isWeekDay('January'),
  { message: 'Illegal value: January' }
);
```

**Explanation:**

- The `assert.throws` function checks if calling `isWeekDay('January')` throws an error.
- Since 'January' does not match any case, the `default` clause is executed, throwing an error with the message 'Illegal value: January'.

<br>

### Summary

- The `switch` statement provides a way to execute different blocks of code based on the evaluation of an expression.
- It is an alternative to using multiple `if...else if...else` statements.
- Use `break` to prevent fall-through to subsequent `case` clauses.
- `default` provides a way to handle cases where no matching `case` is found.
- Empty `case` clauses can be used to group multiple values together.
- The `default` clause can be used for error checking by handling illegal or unexpected values..

