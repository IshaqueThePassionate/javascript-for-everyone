# DOM Styling & `classList` Manipulation (Complete Guide)

## 1. Overview & Core Concepts

### Definition:
DOM style manipulation allows JavaScript to dynamically inspect, update, apply, and remove CSS styles on HTML elements at runtime. This can be accomplished through two primary approaches: directly modifying inline CSS styles using the element's `style` object, or cleanly toggling predefined CSS classes using the `classList` property.

### Core Differences Between `style` and `classList`:
- **`style` Object:** Targets and writes CSS rules directly into the element's inline `style="..."` attribute. It has high CSS specificity and expects properties formatted in camelCase (e.g., `backgroundColor`).
- **`classList` Property:** Manipulates classes linked to external stylesheets or internal `<style>` tags. It provides convenient methods (`add`, `remove`, `toggle`, `contains`) to maintain separation of concerns between structure, styling, and behavior.

---

## 2. Manipulating Style via the `style` Property

### Syntax & camelCase Naming Convention:
CSS properties containing hyphens (e.g., `background-color`, `font-size`) are converted into **camelCase** identifiers in JavaScript (e.g., `backgroundColor`, `fontSize`). Values assigned to these properties must always be strings, including units like `px`, `rem`, or `%`.

```javascript
// Target element: <h1 id="heading">Hello World</h1>
const mainHeading = document.querySelector("#heading");

// 1. Setting color and typography
mainHeading.style.color = "purple";
mainHeading.style.fontSize = "32px";

// 2. Modifying layout and background
mainHeading.style.backgroundColor = "#f0f0f0";
mainHeading.style.padding = "10px 15px";
mainHeading.style.borderRadius = "8px";

// 3. Inspecting inline styles
console.log(mainHeading.style.color); // Output: "purple"
```

> **Important Note:** The `element.style` property can only read **inline styles** that were set directly on the element tag or applied via JavaScript. It cannot read styles computed from external CSS stylesheets.

---

## 3. The `classList` Property & Methods

### Overview:
The `classList` property returns a live `DOMTokenList` representing the element's `class` attribute. It provides clean helper methods to add, remove, and toggle classes without manually parsing space-delimited class strings.

### Key Methods:
- **`element.classList.add(...classNames)`**: Adds one or more classes to the element.
- **`element.classList.remove(...classNames)`**: Removes one or more classes from the element.
- **`element.classList.toggle(className, force?)`**: Adds the class if it is missing, or removes it if it already exists.
- **`element.classList.contains(className)`**: Returns a boolean (`true` or `false`) indicating whether the element has the specified class.

```javascript
// Target element: <div id="card" class="card"></div>
const card = document.querySelector("#card");

// 1. Adding classes
card.classList.add("shadow", "rounded");
console.log(card.className); // Output: "card shadow rounded"

// 2. Removing a class
card.classList.remove("shadow");

// 3. Checking for class presence
if (card.classList.contains("rounded")) {
  console.log("Card has rounded corners");
}

// 4. Toggling a class (adds if absent, removes if present)
card.classList.toggle("active"); // Added -> returns true
card.classList.toggle("active"); // Removed -> returns false
```

---

## 4. Architectural Comparison: `style` vs `classList`

| Feature | `element.style` | `element.classList` |
| :--- | :--- | :--- |
| **Output Target** | Inline `style="..."` attribute | `class="..."` attribute |
| **CSS Specificity** | Highest specificity (overrides classes) | Standard class specificity |
| **Maintainability** | Low (mixes styling directly in JS) | High (keeps styling inside CSS files) |
| **Bulk Updates** | Requires setting multiple individual properties | Single class handles multiple rules |
| **Best Used For** | Dynamic calculations (e.g., coordinates, drag-and-drop) | Theme toggles, visibility, active states |

---

## 5. Real-World Applications

### Example 1: Dark Mode Theme Switcher

#### Scenario Context:
A user toggles a theme switch button. Instead of modifying each element's colors manually via `style`, JavaScript toggles a `.dark-theme` class on the `<body>` element, allowing predefined CSS rules to handle the presentation.

```javascript
// HTML: <button id="theme-btn">Toggle Dark Mode</button>
const themeBtn = document.querySelector("#theme-btn");

function toggleTheme() {
  const body = document.body;

  // Toggle the dark-theme class on body
  body.classList.toggle("dark-theme");

  // Check state to update button label
  const isDark = body.classList.contains("dark-theme");
  themeBtn.textContent = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
}

themeBtn.addEventListener("click", toggleTheme);
```

### Example 2: Form Input Validation State Management

#### Scenario Context:
When validating form inputs in real time, apply visual error or success states dynamically by adding and removing contextual validation classes.

```javascript
// HTML: <input id="user-email" type="email" placeholder="Enter your email">
const emailInput = document.querySelector("#user-email");

function validateEmailInput(email) {
  // Simple check for valid email pattern
  const isValid = email.includes("@") && email.includes(".");

  if (isValid) {
    // Add success styling and clear error state
    emailInput.classList.remove("input-error");
    emailInput.classList.add("input-success");
  } else {
    // Add error styling and clear success state
    emailInput.classList.remove("input-success");
    emailInput.classList.add("input-error");
  }
}

// Attach input listener to validate on keystroke
emailInput.addEventListener("input", (e) => {
  validateEmailInput(e.target.value);
});
```