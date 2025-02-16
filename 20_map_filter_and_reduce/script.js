// =====================
// MAP() METHOD EXAMPLES
// =====================

// Example 1: Converting Month Names to Uppercase
const months = ['January', 'February', 'March', 'April', 'May', 'December'];

const capitalMonths = months.map((month) => {
    return month.toUpperCase();
});

console.log(capitalMonths);
// Output: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'DECEMBER']


// Real-World Example: Formatting Prices
const prices = [100, 200, 300, 400];

const formattedPrices = prices.map(price => `$${price.toFixed(2)}`);
console.log(formattedPrices);
// Output: ['$100.00', '$200.00', '$300.00', '$400.00']


// =====================
// FILTER() METHOD EXAMPLES
// =====================

// Example 1: Filtering Out Months Containing 'M'
const filteredMonths = months.filter((month) => {
    return month.toLocaleLowerCase().includes('m');
});

console.log(filteredMonths);
// Output: ['March', 'May']


// Example 2: Filtering Adult Students
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


// Real-World Example: Filtering Available Products
const products = [
    { name: 'Laptop', available: true },
    { name: 'Phone', available: false },
    { name: 'Tablet', available: true }
];

const availableProducts = products.filter(product => product.available);
console.log(availableProducts);
// Output: [{ name: 'Laptop', available: true }, { name: 'Tablet', available: true }]


// =====================
// REDUCE() METHOD EXAMPLES
// =====================

// Example 1: Summing Up Numbers in an Array
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
// Output: 15


// Real-World Example: Calculating Total Price in a Shopping Cart
const cart = [
    { product: 'Laptop', price: 800 },
    { product: 'Phone', price: 500 },
    { product: 'Tablet', price: 300 }
];

const totalPrice = cart.reduce((total, item) => total + item.price, 0);
console.log(totalPrice);
// Output: 1600


// =====================
// CHAINING OF ARRAY METHODS EXAMPLES
// =====================

// Example: Extracting Adult Students' Names
const adultStudentNames = students
    .filter(student => student.age >= 18) // Step 1: Filter adults
    .map(student => student.name)         // Step 2: Extract names
    .filter(name => name.startsWith('A')); // Step 3: Keep names starting with 'A'

console.log(adultStudentNames);
// Output: ['Akash', 'Amir']


// Example: Calculating Total Price of In-Stock Products
const totalInStockPrice = products
    .filter(product => product.inStock) // Step 1: Filter in-stock products
    .map(product => product.price)      // Step 2: Extract prices
    .reduce((total, price) => total + price, 0); // Step 3: Sum the prices

console.log(totalInStockPrice);
// Output: 1300


// =====================
// CHAINING DEMONSTRATION
// =====================

// Example Without Chaining
const evenNumbers = numbers.filter(num => num % 2 === 0);
const squaredNumbers = evenNumbers.map(num => num * num);
console.log(squaredNumbers);
// Output: [4, 16]

// Example Using Method Chaining
const squaredEvenNumbers = numbers
    .filter(num => num % 2 === 0) // Step 1: Filter even numbers
    .map(num => num * num);       // Step 2: Square the numbers

console.log(squaredEvenNumbers);
// Output: [4, 16]
