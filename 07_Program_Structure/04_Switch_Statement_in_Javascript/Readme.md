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
- The `switch` statement evaluates `num` and matches it against each `case`.
- If `num` is `1`, it returns 'Monday'. If `num` is `2`, it returns 'Tuesday', and so on.
- If `num` does not match any `case`, it returns 'Invalid day'.
- When `dayOfTheWeek(5)` is called, it matches `case 5` and returns 'Friday'.

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
- The `switch` statement evaluates `english` and matches it against each `case`.
- If `english` is 'hello', it sets `french` to 'bonjour' and breaks out of the switch.
- If `english` is 'goodbye', it sets `french` to 'au revoir' and breaks out of the switch.
- If `english` does not match any `case`, it sets `french` to 'not recognized'.
- When `englishToFrench('hello')` is called, it matches `case 'hello'`, sets `french` to 'bonjour', and returns 'bonjour'.

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
- In this version, the `break` statements are omitted.
- When `englishToFrenchWithoutBreak('hello')` is called, it matches `case 'hello'`, sets `french` to 'bonjour', and then falls through to `case 'goodbye'`, setting `french` to 'au revoir'.
- This demonstrates the importance of using `break` to prevent fall-through behavior.

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
- The `switch` statement evaluates `value` and matches it against each `case`.
- `case 1`, `case 2`, and `case 3` share the same block of code, setting `color` to 'Red'.
- `case 4`, `case 5`, and `case 6` share another block of code, setting `color` to 'Green'.
- If `value` does not match any `case`, it sets `color` to 'Unknown'.
- When `getColor(2)` is called, it matches `case 2` and returns 'Red'.
- When `getColor(5)` is called, it matches `case 5` and returns 'Green'.
- When `getColor(7)` is called, it does not match any `case` and returns 'Unknown'.

<br>
### Summary

- The `switch` statement provides a way to execute different blocks of code based on the evaluation of an expression.
- It is an alternative to using multiple `if...else if...else` statements.
- Use `break` to prevent fall-through to subsequent `case` clauses.
- `default` provides a way to handle cases where no matching `case` is found.
- Empty `case` clauses can be used to group multiple values together.
