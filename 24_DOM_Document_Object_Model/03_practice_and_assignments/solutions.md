# DOM Practice & Assignment Solutions

This document provides step-by-step implementations and explanations for both problem sets.

---

## Starter HTML Template (`index.html`)

To test the solutions, use this minimal HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Practice & Assignments</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 24px;
      line-height: 1.6;
    }
    .spacer {
      height: 1200px; /* Provides scrollable space to test scroll events */
    }
  </style>
</head>
<body>
  <!-- Elements for Part 2 Q3 -->
  <input type="text" id="name-input" placeholder="enter your name">
  <h2 id="name-display">Your name will appear here</h2>

  <div class="spacer"></div>

  <script src="solutions.js"></script>
</body>
</html>
```

---

## Part 1: DOM Manipulation Solutions

```javascript
// ==========================================
// Qs 1: Create input and button elements
// ==========================================
const inputElement = document.createElement("input");
const btnElement = document.createElement("button");

btnElement.innerText = "Click me";

// Append both elements to the document body
document.body.prepend(btnElement);
document.body.prepend(inputElement);


// ==========================================
// Qs 2: Add attributes to elements
// ==========================================
// Set placeholder attribute on the input
inputElement.setAttribute("placeholder", "username");

// Set id attribute on the button
btnElement.setAttribute("id", "btn");


// ==========================================
// Qs 3: Access via querySelector and style
// ==========================================
const targetedBtn = document.querySelector("#btn");

targetedBtn.style.backgroundColor = "blue";
targetedBtn.style.color = "white";


// ==========================================
// Qs 4: Create underlined purple h1
// ==========================================
const heading1 = document.createElement("h1");

// Underline via innerHTML tag or textDecoration styling
heading1.innerHTML = "<u>DOM Practice</u>";
heading1.style.color = "purple";

document.body.prepend(heading1);


// ==========================================
// Qs 5: Create p tag with bold "Delta"
// ==========================================
const paragraph = document.createElement("p");

// Using <b> tag to make 'Delta' bold while keeping the rest normal text
paragraph.innerHTML = "Apna College <b>Delta</b> Practice";

document.body.append(paragraph);
```

---

## Part 2: DOM Events Solutions

```javascript
// ==========================================
// Qs 1: Exploring Core DOM Events
// ==========================================

// 1. 'mouseout' Event
const hoverBox = document.createElement("div");
hoverBox.innerText = "Hover over me and leave";
hoverBox.style.padding = "15px";
hoverBox.style.backgroundColor = "#eee";
hoverBox.style.margin = "10px 0";
document.body.append(hoverBox);

hoverBox.addEventListener("mouseout", () => {
  console.log("Mouse left the element boundary (mouseout triggered)");
});

// 2. 'keypress' Event (Modern alternative: keydown)
inputElement.addEventListener("keypress", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// 3. 'scroll' Event
window.addEventListener("scroll", () => {
  console.log(`Page scrolled to Y position: ${window.scrollY}px`);
});

// 4. 'load' Event
window.addEventListener("load", () => {
  console.log("Webpage and all external resources fully loaded (load event).");
});


// ==========================================
// Qs 2: Button that changes to green on click
// ==========================================
const greenBtn = document.createElement("button");
greenBtn.innerText = "Change My Color";
greenBtn.style.padding = "8px 16px";
greenBtn.style.margin = "10px 0";
document.body.append(greenBtn);

greenBtn.addEventListener("click", function () {
  // 'this' refers to greenBtn inside regular function
  this.style.backgroundColor = "green";
  this.style.color = "white";
});


// ==========================================
// Qs 3: Real-time Alphabet-Only Name Input Filter
// ==========================================
const nameInput = document.querySelector("#name-input");
const nameDisplay = document.querySelector("#name-display");

nameInput.addEventListener("input", (event) => {
  const rawValue = event.target.value;

  // Regular expression: matches only letters (a-z, A-Z) and spaces
  // Replaces all numbers and symbols with an empty string
  const sanitizedValue = rawValue.replace(/[^a-zA-Z ]/g, "");

  // Keep input field and heading in sync with allowed characters only
  event.target.value = sanitizedValue;

  if (sanitizedValue.trim() === "") {
    nameDisplay.textContent = "Your name will appear here";
  } else {
    nameDisplay.textContent = sanitizedValue;
  }
});
```