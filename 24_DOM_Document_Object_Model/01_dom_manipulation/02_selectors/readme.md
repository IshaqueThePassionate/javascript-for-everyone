
# DOM Selectors & Content Manipulation 

1. **Selecting Element by ID** (`getElementById`)


2. **Selecting Elements by Class Name** (`getElementsByClassName`)


3. **Selecting Elements by Tag Name** (`getElementsByTagName`)


4. **Query Selectors** (`querySelector` & `querySelectorAll`)


5. **Setting Content in Objects** (`innerText`, `textContent`, `innerHTML`)


6. **Manipulating Attributes** (`getAttribute`, `setAttribute`, `hasAttribute`, `removeAttribute`)


## 1. What are DOM Selectors?

### Definition:
DOM Selectors are built-in methods provided by the `document` interface that allow JavaScript programs to search, locate, and retrieve references to HTML elements in the Document Object Model tree. Once an element is selected, JavaScript can read its properties, modify its content, manipulate its attributes, and register user events dynamically.

### Core Characteristics:
- **Direct Element References:** Methods like `getElementById` and `querySelector` return a single direct reference to an `HTMLElement` object (or `null` if not found).
- **Collections vs Arrays:** Methods like `getElementsByClassName` and `getElementsByTagName` return a live `HTMLCollection`, whereas `querySelectorAll` returns a static `NodeList`. Neither is a genuine JavaScript array.
- **HTMLCollection (Live):** Automatically updates in memory if the DOM structure changes dynamically. Does not support `.forEach()` directly.
- **NodeList (Static):** Represents a fixed snapshot of matching nodes at the moment of query execution. Supports `.forEach()` natively.
- **Content Replacement APIs:** Property interfaces (`innerText`, `textContent`, `innerHTML`) handle internal text rendering and HTML parsing with distinct performance and security implications.

---

## 2. Selection by Identifier (`getElementById`)

### Syntax & Mechanics:
Selects the unique element whose `id` attribute matches the specified string. Since `id` values must be document-unique, it performs the fastest lookup and returns a single node.

```javascript
// Target element: <h1 id="main-heading">Welcome to DOM</h1>
const mainTitle = document.getElementById("main-heading");

// Returns null if no match exists
const nonExistent = document.getElementById("unknown-id");

console.log(mainTitle);     // Output: <h1 id="main-heading">...</h1>
console.log(nonExistent);   // Output: null
```

---

## 3. Selection by Class Name (`getElementsByClassName`)

### Syntax & Mechanics:
Searches the document for all elements containing the specified class name. Returns a live `HTMLCollection`.

```javascript
// Target elements: <p class="lead-text">Para 1</p>, <p class="lead-text">Para 2</p>
const leadParagraphs = document.getElementsByClassName("lead-text");

console.log(leadParagraphs.length); // Output: 2
console.log(leadParagraphs[0]);      // Access individual item via zero-based index

// ❌ Cannot run leadParagraphs.forEach() directly (Throws TypeError)
// ✅ Convert to Array to use modern array iteration methods
const paragraphsArray = Array.from(leadParagraphs);
paragraphsArray.forEach((para) => {
  console.log(para.nodeName);
});
```

---

## 4. Selection by Tag Name (`getElementsByTagName`)

### Syntax & Mechanics:
Retrieves all elements belonging to a specific HTML tag (e.g., `li`, `button`, `div`). Returns a live `HTMLCollection`.

```javascript
// Target elements: <li>Home</li>, <li>About</li>, <li>Contact</li>
const listItems = document.getElementsByTagName("li");

console.log(listItems.length); // Output: 3

// Accessing first matching tag
const firstItem = listItems[0];
console.log(firstItem);
```

---

## 5. Modern Universal Selectors (`querySelector` & `querySelectorAll`)

### Overview:
Accepts any standard CSS selector string (ID `#`, Class `.`, Tag, Attribute `[type="text"]`, or descendant combinations).

### 1. `document.querySelector(cssSelector)`:
Returns the **first matching element** found in the document tree, or `null`.

```javascript
// Select first element with class 'btn-action'
const primaryBtn = document.querySelector(".btn-action");

// Select input with type password
const passwordField = document.querySelector('input[type="password"]');

// Complex descendant selector
const activeNavAnchor = document.querySelector("nav ul li.active a");
```

### 2. `document.querySelectorAll(cssSelector)`:
Returns **all matching elements** as a static `NodeList`.

```javascript
// Select all buttons inside the modal container
const modalButtons = document.querySelectorAll(".modal button");

// Directly iterate using the native NodeList forEach implementation
modalButtons.forEach((btn, index) => {
  console.log(`Button ${index + 1}:`, btn);
});
```

### Quick Reference: HTMLCollection vs NodeList

| Feature | `HTMLCollection` | `NodeList` |
| :--- | :--- | :--- |
| **Returned By** | `getElementsByClassName`, `getElementsByTagName` | `querySelectorAll` |
| **Updates** | **Live** (Updates when DOM changes) | **Static** (Fixed snapshot) |
| **Content** | Element nodes only | Can contain element, text, and comment nodes |
| **Array Methods** | ❌ No native `.forEach()` | ✅ Native `.forEach()` supported |

---

## 6. Setting Content in Objects (`innerText` vs `textContent` vs `innerHTML`)

### 1. `innerText`:
Retrieves or sets visible, human-readable text. It is aware of CSS styling (omits text hidden via `display: none`) and triggers browser layout recalculations (reflow).

### 2. `textContent`:
Retrieves or sets the raw textual content of all nodes, including hidden script tags and elements styled with `display: none`. It is faster than `innerText` because it ignores layout computations.

### 3. `innerHTML`:
Retrieves or sets the entire internal HTML markup of an element. Parses input strings into actual DOM elements.

```javascript
// Consider: <div id="info-box"><p>Hello <span style="display: none;">Secret</span></p></div>
const infoBox = document.getElementById("info-box");

// Reading differences:
console.log(infoBox.innerText);   // Output: "Hello" (skips hidden element)
console.log(infoBox.textContent); // Output: "Hello Secret" (includes raw hidden text)
console.log(infoBox.innerHTML);   // Output: "<p>Hello <span style="display: none;">Secret</span></p>"

// Setting differences:
// Sets plain string (tags are not rendered, printed literally)
infoBox.innerText = "<b>Updated Title</b>"; 
// Sets actual parsed HTML node
infoBox.innerHTML = "<b>Updated Title</b>"; 
```

> **Security Warning:** Never assign unsanitized, user-provided inputs to `innerHTML`. This introduces Cross-Site Scripting (XSS) vulnerabilities. Use `textContent` for plain text insertions.

---

## 7. Manipulating Attributes

### Overview:
HTML attributes (like `id`, `src`, `href`, `data-*`, `disabled`) provide metadata for elements. The standard DOM attribute interface handles dynamic attribute inspection and updates.

### Core Methods:
- `getAttribute(name)`: Reads the current value of the specified attribute.
- `setAttribute(name, value)`: Adds a new attribute or updates an existing attribute's value.
- `hasAttribute(name)`: Returns a boolean indicating whether the element contains the attribute.
- `removeAttribute(name)`: Completely deletes the attribute from the element node.

```javascript
// Target element: <a id="profile-link" href="/legacy-profile" target="_self">View Profile</a>
const profileAnchor = document.getElementById("profile-link");

// 1. Inspect existing attribute
const currentHref = profileAnchor.getAttribute("href");
console.log(currentHref); // Output: "/legacy-profile"

// 2. Modify existing attribute
profileAnchor.setAttribute("href", "/modern-dashboard");

// 3. Set a new attribute
profileAnchor.setAttribute("target", "_blank");

// 4. Verify attribute existence
console.log(profileAnchor.hasAttribute("data-vetted")); // Output: false

// 5. Remove an attribute
profileAnchor.removeAttribute("target");
```

---

## 8. Real-World Applications

### Example 1: Dynamic Search Filter on User List

#### Scenario Context:
A user search bar where typing instantly searches through a list of students, comparing input against each card's `textContent`, and adjusting visibility without page reloads.

```javascript
// Simulated HTML Structure:
// <input id="student-search" type="text" placeholder="Search students...">
// <ul id="student-roster">
//   <li class="student-item">Muhammad Ishaque</li>
//   <li class="student-item">Ali Khan</li>
//   <li class="student-item">Hamza Ahmed</li>
// </ul>

function filterStudentRoster() {
  const searchInput = document.querySelector("#student-search");
  const studentItems = document.querySelectorAll(".student-item");

  const query = searchInput.value.toLowerCase().trim();

  // Iterate over static NodeList using native forEach
  studentItems.forEach((student) => {
    // Read clean text content
    const studentName = student.textContent.toLowerCase();

    // Show/hide element depending on search match
    if (studentName.includes(query)) {
      student.style.display = "block";
    } else {
      student.style.display = "none";
    }
  });
}
```

### Example 2: Secure Dynamic Alert Notification Box

#### Scenario Context:
A reusable function to dynamically inject system notifications into an alert box, updating status colors, setting access keys, and swapping text securely.

```javascript
// Simulated HTML Structure:
// <div id="notification-box" role="alert" data-state="idle">
//   <span class="alert-icon"></span>
//   <p class="alert-message"></p>
// </div>

function triggerSystemNotification(type, messageText) {
  // Query targeted container and descendants
  const alertContainer = document.querySelector("#notification-box");
  const messageNode = alertContainer.querySelector(".alert-message");

  // Prevent XSS vulnerabilities by assigning plain text using textContent
  messageNode.textContent = messageText;

  // Update element state attributes dynamically
  alertContainer.setAttribute("data-state", type);
  alertContainer.setAttribute("aria-live", "assertive");

  if (type === "success") {
    alertContainer.setAttribute("class", "alert-banner bg-success text-white");
  } else if (type === "error") {
    alertContainer.setAttribute("class", "alert-banner bg-danger text-white");
  }
}

// Trigger alert with success status
triggerSystemNotification("success", "Operation completed successfully!");
```

```