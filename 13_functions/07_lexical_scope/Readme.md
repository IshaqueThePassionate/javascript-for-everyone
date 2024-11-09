# Lexical Scope in JavaScript

## Problem Statement

Understanding how JavaScript manages the accessibility of variables in different functions and blocks is crucial. This concept is called **lexical scope**, and it defines how variable lookup works when a function is called. Lexical scope helps manage variable visibility and ensures cleaner, more organized code.

---

## Explanation

In JavaScript, lexical scope means that the accessibility of variables is determined by their location within the code during the declaration (not during execution). The scope chain is established based on where functions are defined, not where they are called.

So, when a function is declared, it "remembers" the scope where it was created. This is why inner functions can access outer variables, but outer functions can’t access variables from inner functions.

### Key Points:
1. **Scope Chain**: A chain of contexts where the interpreter looks for variable declarations.
2. **Global Scope**: Variables declared outside of any function or block are available throughout the code.
3. **Local/Function Scope**: Variables declared inside a function are only available within that function.
4. **Block Scope (with `let` and `const`)**: Introduced in ES6, variables declared inside a block `{}` are only accessible within that block.

---

## Solution

Let’s break it down with an example:

```javascript
// Global Scope
let name = "Muhammad Hashim";  // accessible everywhere

function greet() {
    // Local Scope
    let greeting = "Hello";

    function display() {
        // Nested function (lexically scoped)
        console.log(`${greeting}, ${name}!`); 
        // It can access both 'greeting' (local scope) and 'name' (global scope)
    }

    display();
}

greet();  // Output: Hello, Muhammad Hashim!
```

### Explanation:
1. **Global Scope**: The variable `name` is accessible anywhere in the code.
2. **Function Scope**: The variable `greeting` is only available within the `greet` function.
3. **Lexical Scope**: The `display` function is inside `greet`, so it has access to both `greeting` (from `greet`) and `name` (from the global scope).

### Key Rule: **Functions remember the scope where they were created!**

---

## Additional Example with Block Scope:

```javascript
function checkAge() {
    let age = 24; // Local to this function

    if (age >= 18) {
        let isAdult = true;  // Block-scoped variable (only available within the 'if' block)
        console.log(isAdult);  // Output: true
    }

    console.log(isAdult);  // Error: isAdult is not defined outside the 'if' block
}

checkAge();
```

Here, `isAdult` is only accessible within the `if` block due to block scope (`let`).


## Another example.

The scope of the `function` is defined where its been `written` not from where its
being called or executed, so the `inner functions` can access the variables of the `outer funtions` but outer function can't access the varibales of the inner function.


```javascript
const globalVar = 'I am a global variable';

function parentFunction() {
    const parentVar = 'I am from parent';

    function childFunction() {
        const childVar = 'I am from child';

        function grandchildFunction() {
            console.log(globalVar);    // I am a global variable
            console.log(parentVar);    // I am from parent
            console.log(childVar);     // I am from child
        }

        grandchildFunction();
    }

    childFunction();
}

parentFunction();
```

## Another example..

In this example when you are defining two functions with two differenct scopes, in this specific situation both can access the varibles of the outer function but, one can not be able to access the varible of another, means `inner2` won't be able to access the varibales of `innner`, function.

In this code, the `outer` function defines two inner functions: `inner` and `inner2`. The `inner` function declares a variable `secret` that is **local** to itself. This means `secret` exists only within the `inner` function and cannot be accessed outside of it.

When `inner2` tries to `console.log(secret)`, it results in an error because `secret` is not defined in the scope of `inner2` or `outer`. Each function has its own separate scope, and variables declared inside one inner function aren't accessible to its sibling functions.

Here's a simplified view:

```javascript
function outer() {
    let username = "ishaque";
    
    function inner() {
        let secret = "12345"; // Only accessible within inner
    }

    function inner2(){
        console.log(secret); // Error: secret is not accessible here
    }

    inner();
    inner2();
}

outer();
```

To allow `inner2` to access `secret`, you would need to define `secret` in a scope that's accessible to both functions, such as within `outer`.

so to solve this ,

### Move `secret` to `outer`:

```javascript
function outer() {
    let username = "ishaque";
    let secret = "12345"; // Moved to `outer`

    console.log("outer", username);
    
    function inner() {
        console.log("inner", username);
    }

    function inner2(){
        console.log(secret); // Now accessible
        console.log("inner2", username);
    }

    inner();
    inner2();
}

outer();
```

``` javascript
function outer() {
    let username = "ishaque";

    console.log("outer", username);
    
    function inner() {
        let secret = "12345";
        console.log("inner", username);
        
        function inner2(){
            console.log(secret); // Accessible because `inner2` is inside `inner`
            console.log("inner2", username);
        }

        inner2();
    }

    inner();
}

outer();
```

### Return `secret` from `inner` and Pass It to `inner2`:

```javascript
function outer() {
    let username = "ishaque";

    console.log("outer", username);
    
    function inner() {
        let secret = "12345";
        console.log("inner", username);
        return secret;
    }

    function inner2(secret){
        console.log(secret); // Now accessible
        console.log("inner2", username);
    }

    const secret = inner();
    inner2(secret);
}

outer();
```

## Takeaways:
- **Lexical Scope** is determined at the time of **declaration**, not execution.
- Functions can access variables from outer scopes due to the **scope chain**.
- **Block Scope** (`let`, `const`) ensures variables are limited to the blocks they are declared in.

