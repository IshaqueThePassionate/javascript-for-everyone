# Values in Computers

A guide covering values in JavaScript, how primitive value types work with the photocopying concept, and the fundamental differences between Value Types and Reference Types.

---

## Table of Contents
- [Value Types (Primitives like number, string, boolean)](#value-types-primitives-like-number-string-boolean)
  - [1. Value Type: Photocopying a Page](#1-value-type-photocopying-a-page)
- [How Values Exist in a Computer](#how-values-exist-in-a-computer)
- [Understanding Values in JavaScript](#understanding-values-in-javascript)
- [Creating and Managing Values](#creating-and-managing-values)
- [Types of Values in JavaScript](#types-of-values-in-javascript)
  - [Primitive Types (Value Types)](#primitive-types-value-types)
  - [Introduction to Reference Types](#introduction-to-reference-types)
- [Conclusion](#conclusion)

---

## Value Types (Primitives like number, string, boolean)

The variable directly holds the actual value in memory. If you copy it to another variable, it makes an independent, separate duplicate. Changing one never affects the other.

### 1. Value Type: Photocopying a Page

Imagine you have a piece of paper with notes on it (`x`).
- You use a copy machine to make a duplicate for your friend (`y`).
- If your friend takes a red pen and writes on their page, your original paper remains completely unchanged.
- **Why:** You gave them an entirely separate copy of the data, not your original paper.

```javascript
let x = 10;
let y = x; // Makes an independent copy

y = 20;

console.log(x); // 10 (untouched)
console.log(y); // 20
```

---

## How Values Exist in a Computer

To understand data in programming, think of your computer's memory as a massive grid of small storage switches called bits. 

Instead of dealing with individual bits directly, JavaScript organizes them into usable packages called **values**.

---

## Understanding Values in JavaScript

Every piece of information you work with in JavaScript is a value. Each value has a specific data type that defines what you can do with it:

- **Numbers**: Represent regular numeric values used for counts and math (e.g., `5`, `42`, `3.14`).
- **Text (Strings)**: Represent words, letters, and sentences enclosed in quotes (e.g., `"Hello"`, `"JavaScript"`).
- **Booleans**: Represent logical choices (`true` or `false`).
- **Functions**: Chunks of executable code that perform actions when called.

---

## Creating and Managing Values

Creating a value is straightforward—you assign it to a variable, and JavaScript allocates the space for it in memory:

```javascript
let score = 100;
let greeting = "Welcome";
```

- **Memory Allocation**: Each value takes up a tiny amount of memory while in use.
- **Automatic Cleanup**: When your code is finished using a value, JavaScript automatically clears it from memory (Garbage Collection), so you do not have to worry about running out of space.

---

## Types of Values in JavaScript

JavaScript divides values into two major categories: **Primitives (Value Types)** and **Reference Types**.

### Primitive Types (Value Types)

Primitive values are simple, independent units of data. They directly store their value and are immutable (the value itself cannot be broken apart or modified in-place):

- **Number**: Simple numbers for math and counting (`10`, `99.5`).
- **String**: Sequences of characters used for text (`"Hello world"`).
- **Boolean**: Simple decision values (`true` or `false`).
- **null**: Represents an intentional empty or absent value.
- **undefined**: Indicates a variable has been declared but not yet assigned any value.
- **BigInt**: Used for extremely large integers beyond everyday numbers.
- **Symbol**: Used to create unique, private identifiers.

### Introduction to Reference Types

Unlike primitive types, **Reference Types** do not store the actual data directly inside the variable. Instead, the variable holds a **memory address (reference)** pointing to where the data is stored. 

Common reference types include:
- **Objects**
- **Arrays**
- **Functions**

> *Note: This is just a brief introduction to get you familiar with the term. We will explore Reference Types in complete detail with memory diagrams, references, and mutation examples in the upcoming **Non Primitive or Reference Types** section.*

---

## Conclusion

Understanding how values behave in memory makes writing code predictable:
- **Value Types (Primitives)** behave like photocopies: each variable gets its own independent copy that can never overwrite another variable.
- **Reference Types** point to shared data structures in memory.

Keeping this distinction clear prevents unexpected bugs whenever you copy or pass data around in your programs.