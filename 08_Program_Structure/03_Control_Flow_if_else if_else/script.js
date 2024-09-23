// If Statement

let temperature = 30;
if (temperature > 25) {
  console.log("It's a hot day!");   // Executes if the condition is true
}


// If-Else Statement

let isRaining = false;
if (isRaining) {
  console.log("Take an umbrella!");  // Executes if true
} else {
  console.log("Enjoy the sunshine!");  // Executes if false
}


// If-Else If-Else Statement

let score = 85;
if (score >= 90) {
  console.log("Excellent!");   // Executes if score is 90 or above
} else if (score >= 75) {
  console.log("Good job!");   // Executes if score is between 75 and 89
} else {
  console.log("Keep trying!");  // Executes if score is below 75
}


// Ternary Operator (Conditional Operator)

let isAdult = age >= 18 ? "Yes, you're an adult." : "No, you're not an adult.";
console.log(isAdult);   // Executes based on the condition


// Nested Conditions

let time = 19;
if (time >= 6 && time < 12) {
  console.log("Good morning!");
} else if (time >= 12 && time < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");   // Executes for all other times
}


// Short-circuiting in Control Flow

let userRole = "admin";
userRole === "admin" && console.log("Access granted to admin panel.");  // Executes if true
userRole !== "admin" || console.log("You are not allowed to enter.");   // Executes if false




//////////////////// Real world examples ////////////////////////////


// Example 1. E-Commerce Shipping Cost Calculation

// This example calculates shipping costs based on the total amount of a user's purchase.

let totalAmount = parseFloat(prompt("Enter the total purchase amount:"));

if (totalAmount > 100) {
    console.log("You qualify for free shipping!");
} else if (totalAmount > 50) {
    console.log("Shipping cost is $5.");
} else if (totalAmount > 0) {
    console.log("Shipping cost is $10.");
} else {
    console.log("Invalid total amount. Please enter a valid amount.");
}

// Explanation:
// If the total amount is above $100, the user gets free shipping.
// If it's between $51 and $100, the shipping cost is $5.
// If the total amount is between $1 and $50, the shipping cost is $10.
// If the total is zero or negative, it gives an error message.

//--------------------------------------------------------------------------------------------------------------------------------



// Example 2. Form Validation in Web Applications

// Form validation is a key feature in web applications. Before submitting a form, 
// the application checks if all the fields are correctly filled. If any field is invalid,
// the user is prompted to correct it.


let username = "JohnDoe";
let password = "password123";
let email = "john@example.com";

if (username.length < 5) {
    console.log("Username must be at least 5 characters long.");
} else if (!email.includes("@")) {
    console.log("Please enter a valid email address.");
} else if (password.length < 8) {
    console.log("Password must be at least 8 characters long.");
} else {
    console.log("Form submitted successfully.");
    // Proceed with form submission
}

// Where It's Used:
// Registration forms on websites like Facebook, Google, or any social media platform.
// Checkout pages on e-commerce websites that validate payment information.
// Contact forms or any kind of user input form in business applications.

//--------------------------------------------------------------------------------------------------------------------------------



// Example 3. Product Recommendation Logic in E-commerce

// Based on user behavior and purchase history, e-commerce websites offer personalized product recommendations. 
// This can be achieved through simple if-else logic combined with machine learning algorithms behind the scenes.

let lastPurchasedItem = "laptop";
let recommendedProduct;

if (lastPurchasedItem === "laptop") {
    recommendedProduct = "laptop bag";
} else if (lastPurchasedItem === "phone") {
    recommendedProduct = "phone case";
} else if (lastPurchasedItem === "camera") {
    recommendedProduct = "camera lens";
} else {
    recommendedProduct = "Check out our latest offers!";
}

console.log(`Recommended for you: ${recommendedProduct}`);


// Where It's Used:
// Amazon, eBay, and AliExpress for offering related products after a purchase.
// Streaming services like Netflix and YouTube, which recommend similar shows or videos based on user history.

//--------------------------------------------------------------------------------------------------------------------------------



// Example 4. Discount Calculation Based on User Type

// Many applications offer different discounts based on whether the user is a regular
// customer, a premium customer, or has a promotional code. Conditional logic determines what discount to apply.

let userType = "premium";  // User type can be 'regular', 'premium', or 'guest'
let discount;

if (userType === "premium") {
    discount = 20;  // 20% discount for premium users
} else if (userType === "regular") {
    discount = 10;  // 10% discount for regular users
} else {
    discount = 5;  // Default 5% discount for guests
}

console.log(`You get a ${discount}% discount on your purchase!`);


// Where It's Used:
// E-commerce websites offering special discounts to loyal or premium customers.
// Subscription services like Spotify, YouTube, or streaming services that offer discounts on premium plans.
// Loyalty programs in retail businesses that reward frequent buyers.

//--------------------------------------------------------------------------------------------------------------------------------



// Example 5. Login Attempts Limiting Using Comparison and Error Counters

// Websites and apps limit the number of login attempts a user can make. After multiple failed attempts, 
// the system can lock the user out or display a CAPTCHA.


let correctPassword = "secret123";
let enteredPassword = "wrongpass";
let attempts = 3;

if (enteredPassword !== correctPassword && attempts > 0) {
    attempts--;
    console.log(`Incorrect password. You have ${attempts} attempts left.`);
} else if (attempts === 0) {
    console.log("Account locked due to too many failed attempts.");
} else {
    console.log("Login successful.");
}

// Where It's Used:
// Login systems for platforms like Facebook, Instagram, or Google that lock the user out after multiple failed attempts.
// Security systems for banking and finance apps where account safety is crucial.

// Explanation:
// Decrementing the attempts variable keeps track of how many login attempts the user has left.
// String comparison (!==) is used to check whether the entered password is correct or not.

//--------------------------------------------------------------------------------------------------------------------------------



// Bank Account Withdrawal with Error Handling and Conditions

// In banking applications, you need to validate user actions such as withdrawals. 
// The application checks if the withdrawal amount exceeds the balance or if the account is overdrawn.

let balance = 500;
let withdrawalAmount = 600;

if (withdrawalAmount > balance) {
    console.log("Insufficient balance. Cannot proceed with the withdrawal.");
} else if (withdrawalAmount <= 0) {
    console.log("Invalid amount. Please enter a positive value.");
} else {
    balance -= withdrawalAmount;
    console.log(`Withdrawal successful! Your new balance is $${balance}.`);
}

// Where It's Used:
// Online banking systems for handling user withdrawals and transfers (like PayPal, Venmo).
// ATM systems where the user inputs the withdrawal amount and the system validates it.

// Explanation:
// Relational operators (>, <=) are used to compare the balance and withdrawal amount.
// Logical branching ensures that invalid input (like negative amounts) is handled properly.