# DOM Practice & Assignment Questions

This file contains the complete problem set covering DOM Manipulation and DOM Events. Attempt each problem independently in your code editor before referencing the solutions.

---

## Part 1: DOM Manipulation

### Question 1
Create a new `<input>` and a `<button>` element on the page using **JavaScript only** (do not write them inside HTML). Set the text content of the button to `"Click me"`.

### Question 2
Add the following attributes to the newly created elements using JavaScript:
- Set the `placeholder` attribute of the input element to `"username"`.
- Set the `id` attribute of the button element to `"btn"`.

### Question 3
Access the button using `document.querySelector` and its ID (`#btn`). Change its styling using JavaScript:
- Set `background-color` to `blue`.
- Set text `color` to `white`.

### Question 4
Create an `<h1>` element on the page using JavaScript only:
- Set its text to `"DOM Practice"` with an underline.
- Change its color to `purple`.

### Question 5
Create a `<p>` tag on the page using JavaScript only:
- Set its content to `"Apna College Delta Practice"`, where the word **Delta** must be bold.

---

## Part 2: DOM Events

### Question 1
Implement and test the following event types using `addEventListener`:
- `mouseout`: Triggered when the mouse leaves an element.
- `keypress`: Explore key capture on an input field (compare with modern `keydown`).
- `scroll`: Detect scrolling events on the browser window or container.
- `load`: Detect when the complete webpage and all resources (images/stylesheets) have finished loading.

### Question 2
Create a button on the page dynamically using JavaScript. Attach a click event listener to the button so that whenever it is clicked, its background color changes to `green`.

### Question 3
Create an `<input>` element with a placeholder `"enter your name"` and an `<h2>` heading element on the page.
- The input is intended for a user's name: it must **only accept letters (`a-z`, `A-Z`) and single spaces** (all numbers and special characters must be ignored/filtered out).
- As the user types their name, the sanitized input must update dynamically inside the `<h2>` heading in real time.
- No characters other than the permitted ones should appear in the heading.