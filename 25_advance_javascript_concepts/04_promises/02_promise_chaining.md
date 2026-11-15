# JavaScript Promise Chaining (Complete Guide)

A comprehensive guide covering how **Promise Chaining** solves Callback Hell by executing dependent asynchronous tasks sequentially in a flat, readable structure.

---

## Table of Contents
- [1. What is Promise Chaining?](#1-what-is-promise-chaining)
- [2. The Golden Rule of Promise Chaining (Avoiding Accidental Nesting)](#2-the-golden-rule-of-promise-chaining-avoiding-accidental-nesting)
  - [Common Trap: Nesting `.then()` Inside `.then()`](#common-trap-nesting-then-inside-then)
  - [The Right Way: Flat Sequential Chaining](#the-right-way-flat-sequential-chaining)
- [3. Complete Executable Code & Outputs](#3-complete-executable-code--outputs)
  - [Complete Code (`saveToDb` Chain)](#complete-code-savetodb-chain)
  - [Possible Console Outputs](#possible-console-outputs)
- [4. Why Promise Chaining Beats Callback Hell (3 Key Advantages)](#4-why-promise-chaining-beats-callback-hell-3-key-advantages)

---

## 1. What is Promise Chaining?

When we have multiple **dependent asynchronous tasks** that must execute one after another (for example: save Data 1 $\rightarrow$ then save Data 2 $\rightarrow$ then save Data 3), nesting callbacks leads to **Callback Hell**.

**Promise Chaining** solves this by linking multiple `.then()` methods together in a **flat, top-to-bottom sequence**. Because every `.then()` block can return a new Promise, we can chain the next `.then()` directly outside it.

---

## 2. The Golden Rule of Promise Chaining (Avoiding Accidental Nesting)

To keep Promise Chaining flat and readable, follow one core rule:
> **Inside a `.then()` block, only `return` the next Promise—never attach its `.then()` inside the same block.**

### Common Trap: Nesting `.then()` Inside `.then()`

If you attach `.then()` directly onto the returned Promise inside the first callback, you accidentally recreate Callback Hell's nested pyramid:

```javascript
// ❌ Incorrect: Attaching .then() inside .then() causes nesting again
saveToDb("apnna college")
    .then(() => {
        console.log("data 1 saved");

        return saveToDb("apka college").then(() => {
        })
        .then(() => {
            console.log("data 2 saved");
            return saveToDb("apna school");
        })
        .then(() => {
            console.log("data 3 saved");
        });
    })
    .catch(() => {
        console.log("promise was rejected");
    });
```

### The Right Way: Flat Sequential Chaining

Instead, simply `return` the next Promise and place the next `.then()` outside at the exact same indentation level:

```javascript
// ✅ Correct: Clean, flat, top-to-bottom Promise Chaining
saveToDb("apnna college")
    .then(() => {
        console.log("data 1 saved");
        return saveToDb("apka college");
    })
    .then(() => {
        console.log("data 2 saved");
        return saveToDb("apna school");
    })
    .then(() => {
        console.log("data 3 saved");
    })
    // A single .catch() at the end handles rejections from ANY step above
    .catch(() => {
        console.log("promise was rejected");
    });
```

---

## 3. Complete Executable Code & Outputs

### Complete Code (`saveToDb` Chain)

```javascript
function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if (internetSpeed > 4) {
            resolve("success: data was saved");
        } else {
            reject("failure: weak connection");
        }
    });
}

saveToDb("apnna college")
    .then(() => {
        console.log("data 1 saved");
        return saveToDb("apka college");
    })
    .then(() => {
        console.log("data 2 saved");
        return saveToDb("apna school");
    })
    .then(() => {
        console.log("data 3 saved");
    })
    .catch(() => {
        console.log("promise was rejected");
    });
```

### Possible Console Outputs

**Case 1: All 3 Promises Resolve (`internetSpeed > 4` for all calls)**
```text
data 1 saved
data 2 saved
data 3 saved
```

**Case 2: Step 1 Resolves, Step 2 Rejects (`internetSpeed <= 4` on the 2nd call)**
*Notice that Step 3 never executes; execution jumps directly to `.catch()`.*
```text
data 1 saved
promise was rejected
```

---

## 4. Why Promise Chaining Beats Callback Hell (3 Key Advantages)

1. **Flat & Readable Structure:** Eliminates horizontal pyramid nesting; code reads vertically from top to bottom.
2. **Centralized Error Handling:** Instead of writing separate failure callbacks for every single step, one `.catch()` block at the bottom catches rejections from the entire chain.
3. **Predictable Flow Control:** If any step in the chain rejects, all subsequent `.then()` blocks are automatically skipped and control passes immediately to `.catch()`.