# Understanding Deep and Shallow Copy in JavaScript

### What is a Copy in JavaScript?

In JavaScript, when you copy an object or array, you either create:
1. **Shallow Copy**: Only the top-level properties are copied; nested objects or arrays still reference the original data.
2. **Deep Copy**: All levels of an object or array are copied, and no references to the original data remain.

---

### Shallow Copy

A shallow copy replicates only the first level of an object or array. Any nested objects or arrays inside remain linked to the original data.

#### 1. Using `Object.assign()`
##### Syntax:
```javascript
const target = Object.assign({}, source);
```

##### Example:
```javascript
const original = { name: "Ali", address: { city: "Karachi" } };
const shallowCopy = Object.assign({}, original);

shallowCopy.name = "Sara";
shallowCopy.address.city = "Lahore";

console.log(original.name); // Output: "Ali"
console.log(original.address.city); // Output: "Lahore"
```

##### Real-World Example:
Imagine you’re managing user settings in an application, and you need to copy the user preferences without modifying the original:
```javascript
const userSettings = { theme: "dark", preferences: { fontSize: "16px" } };
const updatedSettings = Object.assign({}, userSettings);
updatedSettings.preferences.fontSize = "18px";

console.log(userSettings.preferences.fontSize); // Output: "18px"
```

---

#### 2. Using the Spread Operator (`...`)
##### Syntax:
```javascript
const copy = { ...original };
```

##### Example:
```javascript
const original = { name: "Ali", address: { city: "Karachi" } };
const shallowCopy = { ...original };

shallowCopy.name = "Sara";
shallowCopy.address.city = "Lahore";

console.log(original.address.city); // Output: "Lahore"
```

##### Real-World Example:
When duplicating a product object for display purposes:
```javascript
const product = { id: 1, details: { price: 100 } };
const duplicateProduct = { ...product };

duplicateProduct.details.price = 120;

console.log(product.details.price); // Output: "120"
```

---

#### 3. Array Methods (`slice`, `concat`)
##### Syntax:
```javascript
const shallowArrayCopy = originalArray.slice();
```

##### Example:
```javascript
const original = [1, 2, { nested: 3 }];
const shallowCopy = original.slice();

shallowCopy[2].nested = 5;

console.log(original[2].nested); // Output: 5
```

##### Real-World Example:
When making a backup of a list of tasks:
```javascript
const tasks = [{ id: 1, done: false }, { id: 2, done: true }];
const tasksBackup = tasks.slice();

tasksBackup[0].done = true;

console.log(tasks[0].done); // Output: true
```

---

### Deep Copy

A deep copy creates an entirely new copy of all levels of an object or array, ensuring there is no link to the original data.

#### 1. Using `JSON.parse(JSON.stringify())`
##### Syntax:
```javascript
const deepCopy = JSON.parse(JSON.stringify(original));
```

##### Example:
```javascript
const original = { name: "Ali", address: { city: "Karachi" } };
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.address.city = "Lahore";

console.log(original.address.city); // Output: "Karachi"
```

##### Real-World Example:
Backing up user data in a chat application:
```javascript
const chatData = { user: "Ali", messages: [{ text: "Hi", time: "10:00 AM" }] };
const backupData = JSON.parse(JSON.stringify(chatData));

backupData.messages[0].text = "Hello";

console.log(chatData.messages[0].text); // Output: "Hi"
```

---

#### 2. Using `structuredClone`
##### Syntax:
```javascript
const deepCopy = structuredClone(original);
```

##### Example:
```javascript
const original = { name: "Ali", address: { city: "Karachi" }, dates: [new Date()] };
const deepCopy = structuredClone(original);

deepCopy.address.city = "Lahore";

console.log(original.address.city); // Output: "Karachi"
```

##### Real-World Example:
When duplicating a configuration object in a game application:
```javascript
const gameConfig = { level: 5, settings: { sound: true }, timestamps: [new Date()] };
const gameConfigBackup = structuredClone(gameConfig);

gameConfigBackup.settings.sound = false;

console.log(gameConfig.settings.sound); // Output: true
```

---

### Key Differences Between Shallow Copy and Deep Copy

| Feature                     | Shallow Copy                       | Deep Copy                              |
|-----------------------------|-------------------------------------|---------------------------------------|
| **Nested Objects**          | References the original            | Completely new copy                   |
| **Performance**             | Faster                             | Slower                                |
| **Use Cases**               | Simple objects                     | Complex nested objects                |

---

### Conclusion

- **Use Shallow Copy**: When you only need to duplicate top-level properties and are okay with nested objects sharing references.
- **Use Deep Copy**: When you want a completely independent copy of all levels of an object or array.

Understanding when to use shallow vs. deep copy helps prevent bugs and ensures your code manages data efficiently.