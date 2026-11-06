# DOM Form Events & Data Extraction (Complete Guide)

## 1. What are Form Events?

### Definition:
Form Events are DOM signals fired by interactive form controls (`<form>`, `<input>`, `<textarea>`, `<select>`) when a user enters text, toggles options, changes focus, or submits data to a server[cite: 24]. Handling form events enables client-side validation, prevents disruptive full-page reloads, and extracts input values into clean data payloads for modern APIs[cite: 24].

### Core Characteristics:
- **Default Reload Behavior:** Submitting an HTML form natively triggers a page refresh or navigation to the `action` attribute URL. Modern JavaScript prevents this using `event.preventDefault()`.
- **Form-Level vs Control-Level:** The `submit` event fires on the `<form>` element itself, while state events (`input`, `change`, `focus`, `blur`) fire on individual input controls.
- **Data Encapsulation:** Form elements expose structured properties like `.value`, `.checked`, and the dedicated `elements` collection for predictable data retrieval[cite: 24].
- **Live Input vs Committed Change:** The `input` event tracks character-by-character updates immediately, whereas `change` commits only after focus leaves the element or a selection is finalized.

---

## 2. Core Form Event Types

| Event Name | Attached To | Trigger Condition | Best Used For |
| :--- | :--- | :--- | :--- |
| **`submit`** | `<form>` | User clicks submit button or hits `Enter` | Validating overall form and dispatching API requests |
| **`input`** | `<input>`, `<textarea>` | Instant value changes (typing, pasting, deleting) | Live search filters, instant character counters |
| **`change`** | `<input>`, `<select>` | Value changes and control loses focus (or dropdown changes) | Select dropdowns, checkboxes, radio groups |
| **`focus`** | Any form control | Element receives focus (cursor enters) | Highlighting active inputs, displaying hint tooltips |
| **`blur`** | Any form control | Element loses focus (cursor leaves) | Field-by-field inline error validation |

---

## 3. Preventing Default Submission (`event.preventDefault()`)

By default, an HTML form attempts an HTTP POST/GET request and reloads the browser tab. In modern Single Page Applications (SPAs) and asynchronous flows, you must intercept this behavior.

```javascript
// Target form element: <form id="registration-form">...</form>
const form = document.querySelector("#registration-form");

form.addEventListener("submit", (e) => {
  // Prevent browser page reload
  e.preventDefault();

  console.log("Form submission intercepted via JavaScript.");
});
```

---

## 4. Extracting Form Data: 3 Standard Techniques

### Approach 1: Individual Input Selection via `.value`
Directly targets individual elements using standard query selectors.

```javascript
const emailInput = document.querySelector("#user-email");
const termsCheckbox = document.querySelector("#terms-agree");

// Text, Email, Number inputs expose the .value string
console.log(emailInput.value);

// Checkbox and Radio controls expose the .checked boolean
console.log(termsCheckbox.checked); // true or false
```

### Approach 2: Using the `form.elements` Collection
The `elements` property provides an indexed and named collection of all interactive controls inside that form. It eliminates the need to run multiple `document.querySelector` calls across the DOM.

```javascript
// HTML:
// <form id="signup-form">
//   <input type="text" name="username">
//   <input type="password" name="password">
// </form>

const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Access inputs directly by their HTML 'name' attribute
  const username = signupForm.elements["username"].value;
  const password = signupForm.elements["password"].value;

  console.log({ username, password });
});
```

### Approach 3: Modern `FormData` API (Recommended for Large Forms)
The `FormData` constructor automatically gathers all named input values into an iterable key-value mapping.

```javascript
const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Extract all fields that contain a 'name' attribute
  const formData = new FormData(signupForm);

  // Convert entries directly into a clean JavaScript Object
  const dataPayload = Object.fromEntries(formData.entries());

  console.log("Structured Form Payload:", dataPayload);
});
```

---

## 5. Event Comparison: `input` vs `change`

Understanding when these two events fire prevents common performance and validation issues:

```javascript
const searchInput = document.querySelector("#search-query");

// Fires on EVERY single keystroke immediately
searchInput.addEventListener("input", (e) => {
  console.log("Current live text:", e.target.value);
});

// Fires ONLY when user presses Enter or clicks away after changing text
searchInput.addEventListener("change", (e) => {
  console.log("Committed change value:", e.target.value);
});
```

---

## 6. Real-World Applications

### Example 1: Real-Time Password Match & Blur Validation

#### Scenario Context:
A signup screen where the user must type a password and confirm it. When the user leaves the confirm input (`blur`), JavaScript verifies that the passwords match and displays inline feedback immediately.

```javascript
// Simulated HTML Structure:
// <form id="auth-form">
//   <input type="password" id="pwd" placeholder="Enter password">
//   <input type="password" id="confirm-pwd" placeholder="Confirm password">
//   <span id="pwd-error" style="color: red; display: none;">Passwords do not match!</span>
//   <button type="submit">Register</button>
// </form>

const authForm = document.querySelector("#auth-form");
const pwdInput = document.querySelector("#pwd");
const confirmPwdInput = document.querySelector("#confirm-pwd");
const errorLabel = document.querySelector("#pwd-error");

// Inline validation when user tabs or clicks away from confirm input
confirmPwdInput.addEventListener("blur", () => {
  if (pwdInput.value !== confirmPwdInput.value) {
    errorLabel.style.display = "block";
    confirmPwdInput.style.borderColor = "crimson";
  } else {
    errorLabel.style.display = "none";
    confirmPwdInput.style.borderColor = "green";
  }
});

// Form submission handler
authForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (pwdInput.value !== confirmPwdInput.value) {
    alert("Please fix validation errors before submitting.");
    return;
  }

  console.log("Registration successfully submitted!");
});
```

### Example 2: Interactive Dynamic Filter with Dropdown (`change`)

#### Scenario Context:
A dynamic filter where changing a department `<select>` dropdown automatically filters a displayed list of university courses without a submit button.

```javascript
// Simulated HTML Structure:
// <select id="dept-filter">
//   <option value="all">All Departments</option>
//   <option value="cs">Computer Science</option>
//   <option value="se">Software Engineering</option>
// </select>
// <ul id="course-list">
//   <li data-dept="cs">CS101: Intro to Programming</li>
//   <li data-dept="se">SE201: Software Architecture</li>
//   <li data-dept="cs">CS301: Data Structures</li>
// </ul>

const deptFilter = document.querySelector("#dept-filter");
const courseItems = document.querySelectorAll("#course-list li");

deptFilter.addEventListener("change", (e) => {
  const selectedDept = e.target.value;

  courseItems.forEach((item) => {
    const courseDept = item.getAttribute("data-dept");

    if (selectedDept === "all" || courseDept === selectedDept) {
      item.style.display = "list-item";
    } else {
      item.style.display = "none";
    }
  });

  console.log(`Course roster filtered by: ${selectedDept}`);
});
```