# **JavaScript Array Methods: map(), filter(), and reduce()**

JavaScript provides several powerful methods to manipulate arrays, including **map()**, **filter()**, and **reduce()**. These methods allow developers to perform transformations, filtering, and aggregations efficiently.

---

## **1. The `map()` Method**

The **`map()`** method is used to transform each element in an array and return a new array with the transformed values.

### **Syntax:**
```js
array.map((element, index, array) => {
    // return new value for each element
})
```
- `element`: The current element being processed.
- `index`: The index of the current element.
- `array`: The original array.
- Returns a **new array** with the transformed values.

### **Example 1: Converting Month Names to Uppercase**
```js
const months = ['January', 'February', 'March', 'April', 'May', 'December'];

const capitalMonths = months.map((month, index, array) => {
    return month.toUpperCase();
});

console.log(capitalMonths);
// Output: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'DECEMBER']
```

### **Real-World Example: Formatting Prices**
```js
const prices = [100, 200, 300, 400];

const formattedPrices = prices.map(price => `$${price.toFixed(2)}`);
console.log(formattedPrices);
// Output: ['$100.00', '$200.00', '$300.00', '$400.00']
```

---

## **2. The `filter()` Method**

The **`filter()`** method is used to create a **new array** containing only elements that satisfy a given condition.

### **Syntax:**
```js
array.filter((element, index, array) => {
    return condition;
})
```
- Returns a **new array** with elements that pass the condition.

### **Example 1: Filtering Out Months Containing 'M'**
```js
const months = ['January', 'February', 'March', 'April', 'May', 'December'];

const filteredMonths = months.filter((month, index, array) => {
    return month.toLocaleLowerCase().includes('m');
});

console.log(filteredMonths);
// Output: ['March', 'May']
```

### **Example 2: Filtering Adult Students**
```js
const students = [
    { name: 'Akash', age: 21 },
    { name: 'Adarsh', age: 17 },
    { name: 'Amir', age: 18 },
    { name: 'Raman', age: 23 },
    { name: 'Nidhi', age: 16 },
];

const adultStudents = students.filter(student => student.age >= 18);
console.log(adultStudents);
// Output: [{ name: 'Akash', age: 21 }, { name: 'Amir', age: 18 }, { name: 'Raman', age: 23 }]
```

### **Real-World Example: Filtering Available Products**
```js
const products = [
    { name: 'Laptop', available: true },
    { name: 'Phone', available: false },
    { name: 'Tablet', available: true }
];

const availableProducts = products.filter(product => product.available);
console.log(availableProducts);
// Output: [{ name: 'Laptop', available: true }, { name: 'Tablet', available: true }]
```

---

## **3. The `reduce()` Method**

The **`reduce()`** method is used to accumulate values from an array into a single result.

### **Syntax:**
```js
array.reduce((accumulator, currentValue, index, array) => {
    return updatedAccumulator;
}, initialValue)
```
- `accumulator`: The accumulated result from previous iterations.
- `currentValue`: The current element being processed.
- `initialValue`: The initial value for the accumulator.

### **Example 1: Summing Up Numbers in an Array**
```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
// Output: 15
```

### **Real-World Example: Calculating Total Price in a Shopping Cart**
```js
const cart = [
    { product: 'Laptop', price: 800 },
    { product: 'Phone', price: 500 },
    { product: 'Tablet', price: 300 }
];

const totalPrice = cart.reduce((total, item) => total + item.price, 0);
console.log(totalPrice);
// Output: 1600
```

---

## 5. Chaining of Array Methods in JavaScript

**Chaining** is a technique in JavaScript where multiple array methods (such as `map()`, `filter()`, and `reduce()`) are **combined in a single statement** to perform multiple operations in a clean and readable way.

---

## **How Does Chaining Work?**
Chaining works because methods like `map()`, `filter()`, and `reduce()` return a **new array or value**, which allows another method to be applied directly on the result.

### **Example Without Chaining**
```js
const numbers = [1, 2, 3, 4, 5];

// Step 1: Filter even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

// Step 2: Square each even number
const squaredNumbers = evenNumbers.map(num => num * num);

console.log(squaredNumbers); 
// Output: [4, 16]
```
Here, we used two separate statements, which increases verbosity.

---

## **Using Method Chaining**
```js
const numbers = [1, 2, 3, 4, 5];

const squaredEvenNumbers = numbers
    .filter(num => num % 2 === 0) // Step 1: Filter even numbers
    .map(num => num * num);       // Step 2: Square the numbers

console.log(squaredEvenNumbers);
// Output: [4, 16]
```
### **Why is Chaining Useful?**
- **Improves readability** by avoiding temporary variables.
- **Reduces code clutter** and improves maintainability.
- **Enhances efficiency** by processing the array in a structured flow.

---

## **Example: Extracting Adult Students' Names**
```js
const students = [
    { name: 'Ahmed', age: 21 },
    { name: 'Sohail', age: 17 },
    { name: 'Amir', age: 18 },
    { name: 'Rehman', age: 23 },
    { name: 'Naadir', age: 16 },
];

const adultStudentNames = students
    .filter(student => student.age >= 18) // Step 1: Filter adults
    .map(student => student.name)         // Step 2: Extract names
    .filter(name => name.startsWith('A')); // Step 3: Keep names starting with 'A'

console.log(adultStudentNames);
// Output: ['Ahmed', 'Amir']
```

---

## **Example: Calculating Total Price of In-Stock Products**
```js
const products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Phone", price: 500, inStock: false },
    { name: "Tablet", price: 300, inStock: true }
];

const totalInStockPrice = products
    .filter(product => product.inStock) // Step 1: Filter in-stock products
    .map(product => product.price)      // Step 2: Extract prices
    .reduce((total, price) => total + price, 0); // Step 3: Sum the prices

console.log(totalInStockPrice);
// Output: 1300
```

---

## **Key Takeaways**
- **Chaining** allows multiple array methods to be used **sequentially** in a single statement.
- **Methods like `map()`, `filter()`, and `reduce()` return new arrays or values**, allowing further methods to be applied.
- **Enhances code readability, reusability, and maintainability**.



