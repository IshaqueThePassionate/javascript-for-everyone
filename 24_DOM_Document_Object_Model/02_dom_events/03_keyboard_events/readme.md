# DOM Keyboard Events (Complete Guide)

## 1. What are Keyboard Events?

### Definition:
Keyboard Events are signals dispatched by the browser whenever a user interacts with a physical or virtual keyboard. These events allow JavaScript to monitor keystrokes, detect game controls, execute keyboard shortcuts, and validate character inputs in real time.

### Core Characteristics:
- **`KeyboardEvent` Interface:** Extends the standard `UIEvent` and provides precise information about the pressed key, physical key location, and modifier states.
- **Focus Requirement:** Keyboard events typically fire on the element that currently holds active document focus (e.g., an `<input>`, `<textarea>`, or an element with a `tabindex`). To monitor global keystrokes across the entire page, listeners are registered directly on `document` or `window`.
- **Modern Standards:** Modern keyboard handling uses `event.key` and `event.code`, completely replacing deprecated properties like `event.keyCode`, `event.which`, and the obsolete `keypress` event.

---

## 2. Modern Keyboard Event Types

| Event Name | Trigger Condition | Best Used For |
| :--- | :--- | :--- |
| **`keydown`** | Fires immediately when a key is pressed down. Repeats continuously if the key is held down. | Global hotkeys, game controls, navigation keys (`ArrowUp`, `Escape`, `Enter`). |
| **`keyup`** | Fires once when a key is released. | Character counting, search input updates, ending key-hold mechanics. |

> **Note on Deprecation:** The `keypress` event is officially deprecated across modern web standards and should not be used. Use `keydown` for instantaneous key capture and input events for textual changes.

---

## 3. Key Identification: `event.key` vs `event.code`

Understanding the difference between `event.key` and `event.code` prevents layout and localization bugs.

### 1. `event.key` (Value / Char-Oriented):
Returns the printed character value produced by the keystroke. It is **layout and modifier aware** (respects Shift, CapsLock, and international keyboard language layouts).
- Pressing `a` returns `"a"`.
- Pressing `Shift + a` returns `"A"`.
- Pressing Enter returns `"Enter"`.

### 2. `event.code` (Physical Key-Oriented):
Returns the **physical key location on the keyboard**, completely ignoring layout changes, CapsLock, or modifier shifts.
- Pressing the physical 'Q' key on a QWERTY keyboard returns `"KeyQ"`.
- On an AZERTY layout, pressing that exact same key physical location returns `"KeyQ"`.

```javascript
// Target: Global document listener
document.addEventListener("keydown", (e) => {
  console.log(`Key pressed: "${e.key}" | Physical Code: "${e.code}"`);
});

// Example output when pressing Shift + Z:
// Key pressed: "Z" | Physical Code: "KeyZ"
```

---

## 4. Modifier Keys (`shiftKey`, `ctrlKey`, `altKey`, `metaKey`)

Every `KeyboardEvent` provides boolean properties to verify if auxiliary modifier keys are held during the interaction:

- `e.shiftKey`: `true` if the Shift key is active.
- `e.ctrlKey`: `true` if the Control key is active.
- `e.altKey`: `true` if the Alt / Option key is active.
- `e.metaKey`: `true` if the Command (Mac) or Windows key is active.

```javascript
// Detecting a global shortcut: Ctrl + S (or Cmd + S on Mac)
document.addEventListener("keydown", (e) => {
  const isSaveShortcut = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s";

  if (isSaveShortcut) {
    e.preventDefault(); // Prevents default browser page saving dialog
    console.log("Custom save operation triggered!");
  }
});
```

---

## 5. Architectural Comparison: `event.key` vs `event.code`

| Feature | `event.key` | `event.code` |
| :--- | :--- | :--- |
| **Focus** | Resulting character value | Physical key on the board |
| **Shift / CapsLock Aware** | Yes (`"a"` vs `"A"`) | No (`"KeyA"` in both cases) |
| **Language Layout Aware** | Yes | No (Always US-standard code name) |
| **Ideal Use Case** | Form logic, text inputs, search filters | Game mechanics (WASD movements), fixed hardware hotkeys |

---

## 6. Real-World Applications

### Example 1: Directional Game Controls (WASD & Arrow Keys)

#### Scenario Context:
Controlling the movement of an interactive on-screen character or element using directional keys. `event.code` ensures keys function uniformly regardless of the user's localized keyboard layout.

```javascript
// Simulated HTML Structure:
// <div id="player" style="position: absolute; top: 100px; left: 100px; width: 30px; height: 30px; background: royalblue;"></div>

const player = document.querySelector("#player");
let positionX = 100;
let positionY = 100;
const stepSize = 10;

function movePlayer(e) {
  switch (e.code) {
    case "ArrowUp":
    case "KeyW":
      positionY -= stepSize;
      break;
    case "ArrowDown":
    case "KeyS":
      positionY += stepSize;
      break;
    case "ArrowLeft":
    case "KeyA":
      positionX -= stepSize;
      break;
    case "ArrowRight":
    case "KeyD":
      positionX += stepSize;
      break;
    default:
      return; // Ignore any unrelated key
  }

  // Update element visual location
  player.style.top = `${positionY}px`;
  player.style.left = `${positionX}px`;
}

// Global window event listener
window.addEventListener("keydown", movePlayer);
```

### Example 2: Live Character Counter with Keystroke Feedback

#### Scenario Context:
A textarea with a maximum character limit of 150 characters. As the user types, `keyup` tracks input length and updates a character counter dynamically, warning the user when approaching the limit.

```javascript
// Simulated HTML Structure:
// <textarea id="feedback-text" maxlength="150" placeholder="Enter review..."></textarea>
// <p id="counter-label">150 characters remaining</p>

const feedbackInput = document.querySelector("#feedback-text");
const counterLabel = document.querySelector("#counter-label");
const maxLimit = 150;

feedbackInput.addEventListener("keyup", (e) => {
  const currentLength = e.target.value.length;
  const remaining = maxLimit - currentLength;

  counterLabel.textContent = `${remaining} characters remaining`;

  // Visual warning when nearing the character limit
  if (remaining <= 20) {
    counterLabel.style.color = "crimson";
    counterLabel.style.fontWeight = "bold";
  } else {
    counterLabel.style.color = "inherit";
    counterLabel.style.fontWeight = "normal";
  }
});
```

### Example 3: Modal Close on `Escape` Key

#### Scenario Context:
Improving accessibility by closing an open dialog or modal whenever the user presses the `Escape` key.

```javascript
// Simulated HTML Structure:
// <div id="app-modal" class="modal-box">Press Esc to close</div>

const appModal = document.querySelector("#app-modal");

document.addEventListener("keydown", (e) => {
  // Check specifically for the Escape key
  if (e.key === "Escape") {
    if (!appModal.classList.contains("hidden")) {
      appModal.classList.add("hidden");
      console.log("Modal dismissed via Escape key.");
    }
  }
});
```