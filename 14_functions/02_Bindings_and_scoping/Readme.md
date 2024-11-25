# Bindings and Scopes in JavaScript

In JavaScript, **bindings** (variables or functions) have **scopes** that define where they can be accessed within a program. Understanding scopes is key to writing maintainable and bug-free code.

---

## 1. Global Scope

Bindings that are declared outside any function, block, or module are in the **global scope**. They are visible throughout the entire program.

### Example:
```javascript
let appVersion = 1.2; // global binding
```
Here, `appVersion` is a global binding and can be accessed from anywhere in the program.

---

## 2. Local Scope

Bindings defined inside a function are limited to that function’s **local scope**. These bindings are recreated each time the function is called.

### Example:
```javascript
const double = function(num) {
  return num * 2; // local binding inside the function
};

let num = 5; 
console.log(double(10)); // → 20
console.log(num); // → 5 (the global `num` remains unchanged)
```

In this example, the `num` inside the `double` function is a local variable and is only accessible within the function.

---

## 3. Block Scope

JavaScript introduced **block-level scope** with the `let` and `const` keywords. Bindings created with these keywords are limited to the block in which they are declared (e.g., inside loops or conditionals).

### Example:
```javascript
if (true) {
  let age = 25;  // block-scoped binding
  var name = "John"; // function/global-scoped binding
}
console.log(name); // → "John" (accessible because `var` is not block-scoped)
console.log(age); // → ReferenceError (not accessible because `let` is block-scoped)
```

In this example, `age` is block-scoped, so it is not accessible outside the `if` block, whereas `name` (declared with `var`) is accessible globally.

---

## 4. Nested Scope

JavaScript allows for **nested scopes**, meaning blocks and functions can be defined inside other blocks and functions. Each inner scope has access to variables in its parent scope, but not the other way around.

### Example:
```javascript
const recipe = function(multiplier) {
  const addIngredient = function(amount, unit, ingredient) {
    let totalAmount = amount * multiplier;
    if (totalAmount > 1) {
      unit += "s"; // pluralize unit
    }
    console.log(`${totalAmount} ${unit} of ${ingredient}`);
  };
  
  addIngredient(1, "cup", "flour");
  addIngredient(0.5, "teaspoon", "salt");
  addIngredient(2, "tablespoon", "sugar");
  addIngredient(1, "cup", "water");
};
```

Here, the `addIngredient` function has access to the `multiplier` variable from its parent `recipe` function. However, variables like `unit` and `totalAmount` within `addIngredient` are not accessible outside of that function.

---

## 5. Lexical Scoping

JavaScript uses **lexical scoping**, meaning the visibility of variables is determined by their location in the source code. An inner function can access variables from its outer scope, but the outer scope cannot access variables from the inner scope.

Here’s an example of **lexical scope** in JavaScript:

```javascript
function outerFunction() {
  let outerVariable = "I am from the outer scope!";

  function innerFunction() {
    console.log(outerVariable); // Can access outerVariable due to lexical scope
  }

  innerFunction();
}

outerFunction();
```

### Explanation:

- **Lexical scope** means that JavaScript determines the scope of variables based on the position where the function is declared in the source code, not where it's called.
- In this example, the `innerFunction` can access the `outerVariable` because it is defined inside `outerFunction` where `outerVariable` is declared.
- The **innerFunction** forms a closure over the scope of `outerFunction`, allowing it to access `outerVariable` even though it's not declared inside `innerFunction`.

**Key point**: Lexical scope ensures that inner functions have access to variables declared in their outer scope due to where they are defined in the code.

<br>
<br>

Here's an example that is the **opposite of lexical scope**, where the inner function cannot access a variable from the outer scope because of where it is declared:

```javascript
function outerFunction() {
  function innerFunction() {
    console.log(outerVariable); // ReferenceError: outerVariable is not defined
  }

  innerFunction();
}

outerFunction();

let outerVariable = "I am from the outer scope!";
```

### Explanation:
- In this example, `innerFunction` tries to access `outerVariable`, but since `outerVariable` is declared **after** the function is defined, it is not available to the inner function.
- **Lexical scope** means that JavaScript determines which variables are accessible based on where the function is **defined**, not where it is **called**.
- As a result, this code will throw an error: **ReferenceError: outerVariable is not defined**.

**Key Point**: If a variable is declared after a function, it will not be available to the inner function due to the rules of lexical scope, which depend on where functions are defined, not where they are called.

### Summary

- **Global Scope**: Variables are accessible throughout the entire program.
- **Local Scope**: Variables are accessible only within the function they are declared in.
- **Block Scope**: Variables declared with `let` and `const` are confined to the block in which they are declared.
- **Nested Scope**: Inner functions can access outer scope variables.
- **Lexical Scoping**: Visibility is based on where variables are declared in the code.

Understanding and managing scope properly allows for better control over variable accessibility and reduces the chances of bugs.
