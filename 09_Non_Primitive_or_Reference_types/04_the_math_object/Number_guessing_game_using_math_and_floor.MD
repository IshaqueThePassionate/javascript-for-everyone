# Number Guessing Game (JavaScript)

An interactive CLI and browser prompt-based game built with JavaScript that dynamically generates a random integer using `Math.floor()` and `Math.random()`, guiding users toward the target value through condition-based hints.

---

## Table of Contents
- [Introduction](#introduction)
- [How the Game Works](#how-the-game-works)
- [Complete Source Code with Line-by-Line Comments](#complete-source-code-with-line-by-line-comments)
- [Detailed Code Explanation](#detailed-code-explanation)
  - [1. Setting the Upper Bound Range](#1-setting-the-upper-bound-range)
  - [2. Generating the Random Target Number](#2-generating-the-random-target-number)
  - [3. Getting the Initial Guess](#3-getting-the-initial-guess)
  - [4. The Infinite Game Loop (`while(true)`)](#4-the-infinite-game-loop-whiletrue)
  - [5. Handling the Quit Condition](#5-handling-the-quit-condition)
  - [6. Checking for Success](#6-checking-for-success)
  - [7. Providing Hints (Too Small vs Too Large)](#7-providing-hints-too-small-vs-too-large)
- [Dry Run Example](#dry-run-example)
- [Edge Cases & Possible Enhancements](#edge-cases--possible-enhancements)
- [Conclusion](#conclusion)

---

## Introduction

The **Number Guessing Game** is a classic programming project designed to demonstrate core control flow and mathematical concepts in JavaScript. By allowing the player to define the maximum possible range, the program uses the built-in `Math` object to choose an unpredictable secret number and challenges the user to deduce it using logical hints ("too small" or "too large").

---

## How the Game Works

1. **User Defines Range:** The player enters a maximum limit (`max`).
2. **Secret Target Chosen:** JavaScript generates an integer between `1` and `max`.
3. **Loop Begins:** The player enters their first guess.
4. **Validation & Feedback:**
   - If the player types `"quit"`, the game terminates immediately.
   - If the guess matches the secret number, congratulations are displayed and the loop breaks.
   - If the guess is lower, the user is prompted to try a larger number.
   - If the guess is higher, the user is prompted to try a smaller number.

---

## Complete Source Code with Line-by-Line Comments

```javascript
// Step 1: Prompt the user to set the upper boundary for the random number
const max = prompt("enter the max number");

// Step 2: Generate a random whole integer between 1 and the specified maximum value (inclusive)
const randm = Math.floor(Math.random() * max) + 1;

// Step 3: Collect the player's initial guess via prompt input
let guess = prompt("Guess the number");

// Step 4: Initiate an infinite loop that keeps running until an explicit break statement occurs
while (true) {

    // Step 5: Check if the user chose to surrender by typing "quit"
    if (guess == "quit") {
        console.log("You quit! better luck next time.");
        break; // Stop and exit the while loop completely
    }
    
    // Step 6: Check if the user successfully guessed the exact target number
    if (guess == randm) {
        console.log("congratulations, You guessed correct number!", randm);
        break; // Exit the loop upon winning
    } 
    // Step 7: Check if the entered guess is strictly less than the target value
    else if (guess < randm) {
        // Inform the player and collect their next attempt
        guess = prompt("Your guess is too small, try a larger number:");
    } 
    // Step 8: Handle the remaining case where the guess is greater than the target value
    else {
        // Inform the player and collect their next attempt
        guess = prompt("Your guess is too large, try a smaller number:");
    }

}
```

---

## Detailed Code Explanation

### 1. Setting the Upper Bound Range
```javascript
const max = prompt("enter the max number");
```
The `prompt()` function captures input from the user as a string. Here, `max` establishes the ceiling of the random distribution.

### 2. Generating the Random Target Number
```javascript
const randm = Math.floor(Math.random() * max) + 1;
```
- `Math.random()` provides a decimal value in the range `[0, 1)`.
- `Math.random() * max` scales the range to `[0, max)`.
- `Math.floor(...)` chops off the decimal part, leaving integers from `0` to `max - 1`.
- `+ 1` shifts the whole set upward, yielding a final range from `1` to `max`.

### 3. Getting the Initial Guess
```javascript
let guess = prompt("Guess the number");
```
Declared using `let` because the player's guess will be updated repeatedly across each unsuccessful iteration of the loop.

### 4. The Infinite Game Loop (`while(true)`)
```javascript
while (true) { ... }
```
An infinite loop structure is ideal here because the total number of attempts required to guess correctly is unpredictable at runtime. The loop is broken manually using the `break` keyword.

### 5. Handling the Quit Condition
```javascript
if (guess == "quit") {
    console.log("You quit! better luck next time.");
    break;
}
```
Provides an escape hatch so that players are not trapped indefinitely in prompt dialogues if they decide to quit.

### 6. Checking for Success
```javascript
if (guess == randm) {
    console.log("congratulations, You guessed correct number!", randm);
    break;
}
```
Using loose equality (`==`) allows JavaScript to compare the string from `prompt()` with the numeric integer `randm` through type coercion. Once matched, the success message prints and `break` stops the loop.

### 7. Providing Hints (Too Small vs Too Large)
```javascript
else if (guess < randm) {
    guess = prompt("Your guess is too small, try a larger number:");
} else {
    guess = prompt("Your guess is too large, try a smaller number:");
}
```
Provides binary feedback guiding the player to adjust their range, making subsequent guesses faster and more strategic.

---

## Dry Run Example

Assume the user enters `max = 10`, and `randm` evaluates to `7`.

| Step | User Input (`guess`) | Condition Evaluated | Result / Action |
| :---: | :---: | :---: | :---: |
| 1 | `"3"` | `3 < 7` is `true` | Prompts: *"Your guess is too small, try a larger number:"* |
| 2 | `"9"` | `9 < 7` is `false`, falls to `else` | Prompts: *"Your guess is too large, try a smaller number:"* |
| 3 | `"7"` | `7 == 7` is `true` | Logs *"congratulations, You guessed correct number! 7"* and breaks out. |

---

## Edge Cases & Possible Enhancements

1. **Explicit Type Parsing:** Wrap numeric inputs inside `parseInt()` to avoid relying on loose equality type coercion:
   ```javascript
   let numericGuess = parseInt(guess);
   ```
2. **Attempt Counter:** Track the total number of guesses using a variable `let attempts = 0;` and increment it inside the loop to display a score upon winning.
3. **Empty Input Handling:** Add a validation check to catch when a user presses "Cancel" or enters an empty string.

---

## Conclusion

This project brings together foundational JavaScript concepts—variable declaration, dynamic input handling, mathematical range formulas with `Math.floor()` and `Math.random()`, loop control with `while(true)`, and conditional branching with `if / else if / else`—into a clean, functioning, interactive game.