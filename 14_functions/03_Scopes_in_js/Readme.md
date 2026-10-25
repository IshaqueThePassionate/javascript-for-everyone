# JavaScript Scope and Bindings

A comprehensive guide covering how JavaScript defines the accessibility, visibility, and lifetime of variables across Global, Local/Function, Block, and Lexical scopes.

---

## Table of Contents
- [Introduction to Bindings and Scope](#introduction-to-bindings-and-scope)
- [1. Global Scope](#1-global-scope)
  - [Example: App Version Identifier](#example-app-version-identifier)
  - [Example: Basic Application Name](#example-basic-application-name)
- [2. Local / Function Scope](#2-local--function-scope)
  - [Example: Function Scope Isolation](#example-function-scope-isolation)
  - [Example: Variable Shadowing](#example-variable-shadowing)
  - [Example: Multiple Function Isolation](#example-multiple-function-isolation)
  - [Example: Parameter vs Global Binding](#example-parameter-vs-global-binding)
- [3. Block Scope](#3-block-scope)
  - [Example: Conditional Block Isolation](#example-conditional-block-isolation)
  - [Example: Loop Index Isolation](#example-loop-index-isolation)
  - [Example: Comparing `let`, `const`, and `var`](#example-comparing-let-const-and-var)
- [4. Nested Scope](#4-nested-scope)
  - [Example: Recipe Ingredient Multiplier](#example-recipe-ingredient-multiplier)
- [5. Lexical Scope](#5-lexical-scope)
  - [Example: Basic Outer Variable Access](#example-basic-outer-variable-access)
  - [Example: Variable Declared After Function (Reference Error)](#example-variable-declared-after-function-reference-error)
  - [Example: Multi-Level Lexical Hierarchy](#example-multi-level-lexical-hierarchy)
  - [Example: One-Way Access Rule](#example-one-way-access-rule)
  - [Practice Question: Lexical Scope Output Tracing](#practice-question-lexical-scope-output-tracing)
- [Summary Matrix](#summary-matrix)

---

## Introduction to Bindings and Scope

In JavaScript, **bindings** (variables, constants, or functions) are bound to specific regions of execution called **scopes**. A scope determines where a binding is visible and accessible to other parts of the code.

JavaScript evaluates scopes hierarchically: if a variable is not found in the current execution context, JavaScript looks outward until it reaches the global environment.

---

## 1. Global Scope

Bindings declared outside of any function, code block (`{}`), or module reside in the **global scope**. They remain accessible from any point in the program.

### Example: App Version Identifier
```javascript
let appVersion = 1.2; // Global binding

console.log(appVersion); // Output: 1.2
```

### Example: Basic Application Name
```javascript
let appName = "TodoApp"; // Accessible anywhere

function showApp() {
    console.log(appName); // Output: TodoApp
}

showApp();
```

---

## 2. Local / Function Scope

Bindings declared inside a function exist within that function’s **local scope**. They are created when the function executes and discarded once execution finishes. Code outside the function cannot access them.

### Example: Function Scope Isolation
```javascript
function showApp() {
    let version = "1.0.0"; // Local to showApp
    console.log(version);  // Output: 1.0.0
}

showApp();
// console.log(version); // ReferenceError: version is not defined
```

### Example: Variable Shadowing
When a local variable shares the same name as a global variable, the local binding overrides (shadows) the global one within that function:

```javascript
let totalMarks = 100; // Global variable

function updateMarks() {
    let totalMarks = 85; // Local variable shadows global variable
    console.log("Local Marks:", totalMarks); // Output: 85
}

updateMarks();
console.log("Global Marks:", totalMarks); // Output: 100 (Global remains untouched)
```

### Example: Multiple Function Isolation
Variables defined inside one function are isolated from sibling functions:

```javascript
let balance = 1000;

function credit() {
    let bonus = 200;
    balance += bonus;
}

function debit() {
    let penalty = 50;
    balance -= penalty;
    // console.log(bonus); // ReferenceError: bonus is isolated to credit()
}

credit();
debit();
console.log("Remaining Balance:", balance); // Output: 1150
```

### Example: Parameter vs Global Binding
Function parameters act as local bindings and do not overwrite identical outer bindings:

```javascript
const double = function(num) {
    return num * 2; // 'num' parameter is local
};

let num = 5; 
console.log(double(10)); // Output: 20
console.log(num);        // Output: 5 (Global 'num' remains unchanged)
```

---

## 3. Block Scope

With ES6 (`let` and `const`), JavaScript introduced **block scoping**. Any pair of curly braces `{}`—such as those used in `if` statements, `switch` blocks, or loops—forms a boundary. Bindings declared with `var` ignore block boundaries and leak into the enclosing function or global scope.

### Example: Conditional Block Isolation
```javascript
let condition = true;

if (condition) {
    let insideVal = 25;
    console.log(insideVal); // Output: 25
}

// console.log(insideVal); // ReferenceError: insideVal is not defined
```

### Example: Loop Index Isolation
Variables declared with `let` inside a loop header belong strictly to that loop's execution:

```javascript
for (let i = 1; i <= 3; i++) {
    let stepName = `Step-${i}`;
    console.log(stepName);
}

// console.log(i);        // ReferenceError: i is not defined
// console.log(stepName); // ReferenceError: stepName is not defined
```

### Example: Comparing `let`, `const`, and `var`
```javascript
{
    let blockedLet = "Hidden";
    const blockedConst = "Locked";
    var leakedVar = "I escaped!";
}

console.log(leakedVar); // Output: "I escaped!" (var is not block-scoped)
// console.log(blockedLet);   // ReferenceError: blockedLet is not defined
// console.log(blockedConst); // ReferenceError: blockedConst is not defined
```

---

## 4. Nested Scope

JavaScript allows blocks and functions to be nested inside other blocks and functions. Every inner layer can access bindings from its parent layers, creating a scope chain.

### Example: Recipe Ingredient Multiplier
```javascript
const recipe = function(multiplier) {
    const addIngredient = function(amount, unit, ingredient) {
        let totalAmount = amount * multiplier; // Accesses 'multiplier' from parent
        if (totalAmount > 1) {
            unit += "s"; // Pluralize unit
        }
        console.log(`${totalAmount} ${unit} of ${ingredient}`);
    };
    
    addIngredient(1, "cup", "flour");
    addIngredient(0.5, "teaspoon", "salt");
    addIngredient(2, "tablespoon", "sugar");
    addIngredient(1, "cup", "water");
};

recipe(2);
// Output:
// 2 cups of flour
// 1 teaspoon of salt
// 4 tablespoons of sugar
// 2 cups of water
```

---

## 5. Lexical Scope

JavaScript uses **lexical scoping** (also known as static scoping). This means variable resolution depends strictly on where functions and blocks are physically defined in the source code, not where they are called.

### Example: Basic Outer Variable Access
```javascript
function outerFunction() {
    let outerVariable = "I am from the outer scope!";

    function innerFunction() {
        console.log(outerVariable); // Accessible via lexical scope
    }

    innerFunction();
}

outerFunction(); // Output: "I am from the outer scope!"
```

### Example: Variable Declared After Function (Reference Error)
Lexical scope requires that the variable is declared in a valid, reachable position relative to the function's declaration:

```javascript
function outerFunction() {
    function innerFunction() {
        console.log(outerVariable); // ReferenceError: Cannot access 'outerVariable' before initialization
    }

    innerFunction();
}

outerFunction();

let outerVariable = "I am from the outer scope!";
```

### Example: Multi-Level Lexical Hierarchy
```javascript
function grandParent() {
    let surname = "Ishaque";

    function parent() {
        let middle = "Ali";

        function child() {
            let first = "Hamza";
            console.log(`${first} ${middle} ${surname}`);
        }

        child();
    }

    parent();
}

grandParent(); // Output: Hamza Ali Ishaque
```

### Example: One-Way Access Rule
Parent scopes cannot reach down into child scopes:

```javascript
function department() {
    let deptName = "Computer Science";

    function lab() {
        let computers = 40;
        console.log(`Department: ${deptName}, Systems: ${computers}`);
    }

    lab();
    // console.log(computers); // ReferenceError: outer function cannot read inner scope
}

department();
```

---

### Practice Question: Lexical Scope Output Tracing

**Problem:** Trace the execution flow and predict the console output:

```javascript
let greet = "hello"; // Global Scope

function changeGreet() {
    let greet = "namaste"; // Function Scope (Outer)
    console.log(greet);

    function innerGreet() {
        console.log(greet); // Resolves to parent's lexical scope
    }

    innerGreet();
}

console.log(greet);
changeGreet();
```

**Output:**
```text
hello
namaste
namaste
```

**Step-by-Step Breakdown:**
1. The first `console.log(greet)` evaluates the global binding: `"hello"`.
2. `changeGreet()` executes and creates a local binding `greet = "namaste"`, logging `"namaste"`.
3. `innerGreet()` runs. Because it has no local `greet`, it climbs the lexical scope chain to `changeGreet()`, retrieving and logging `"namaste"`.

---

## Summary Matrix

| Scope Type | Defined By | Keywords Supported | Accessible Outside? |
| :--- | :--- | :--- | :--- |
| **Global** | Root file / outside blocks | `var`, `let`, `const` | Yes (everywhere) |
| **Function / Local** | Inside `function() {}` | `var`, `let`, `const` | No |
| **Block** | Inside `{}` braces | `let`, `const` (`var` leaks) | No |
| **Lexical** | Code structure / placement | `var`, `let`, `const` | Inward access only (parents $\rightarrow$ children) |