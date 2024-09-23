
let n = 0;

while (n < 3) {
  n++;
}

console.log(n);
// Expected output: 3


// --------------------------------------------------------------------------------------------------------------------------------


let m = 0;
let x = 0;

while (m < 3) {
  n++;
  x += n;
  console.log(m);
  
}

// --------------------------------------------------------------------------------------------------------------------------------


// Example : Sum of Only Positive Numbers

let num = 0, sum = 0;

// loop as long as num is 0 or positive
while (num >= 0) {

    // add all positive numbers
    sum += num;

    // take input from the user
  num = parseInt(prompt("Enter a number: "));
}

// last, display sum
console.log(`The sum is ${sum}`);

// Output

// Enter a number: 2
// Enter a number: 4
// Enter a number: -3
// The sum is 6


// --------------------------------------------------------------------------------------------------------------------------------


// Initialize the array


const friends = ["Ahmed", "Sara", "Zain", "Fatima", "Ali"];

// Initialize the loop counter
let i = 0;

// Use while loop to iterate through the array
while (i < friends.length) {
    console.log(friends[i]);
    i++; // Increment the counter
}

// // Output

// Ahmed  
// Sara
// Zain
// Fatima
// Ali

// --------------------------------------------------------------------------------------------------------------------------------


// Initializing Last Name to Each Friend in the Array

// Initialize the array of first names

const friendss = ["Ahmed", "Sara", "Zain", "Fatima", "Ali"];

// Initialize the loop counter
let j = 0;

// Add last name "Khan" in the loop's body and print full names

while (j<friends.length) {
    const fullName = friends[j] + " Khan"; // Combine first name with last name
    console.log(fullName);
    j++; // Increment the counter
}

// output

// Ahmed Khan
// Sara Khan
// Zain Khan
// Fatima Khan
// Ali Khan


// --------------------------------------------------------------------------------------------------------------------------------


// Example 1. ATM Withdrawal System

// using while statement to prompt the user for the input repetedly until they give the valid response 
// or want be continued with transection.

const correctPassword = "12345";
let userPassword;
let attempts = 0;
let maxAttempts = 3;

// Password verification with limited attempts
while (userPassword !== correctPassword) {
    userPassword = prompt("Enter your pin Code:");
    attempts++;
    
    if (userPassword !== correctPassword) {
        if (attempts >= maxAttempts) {
            console.log("Too many incorrect attempts. Access denied.");
            break; // Exit if user exceeds max attempts
        } else {
            console.log("Incorrect password. Try again.");
        }
    }
}

// Continue if password is correct and user hasn't exceeded attempts
if (userPassword === correctPassword) {
    console.log("Access granted!");
    
    let balance = 1000; // Initial balance
    let withdrawAmount;

    // ATM withdrawal system
    while (balance > 0) {
        withdrawAmount = parseFloat(prompt(`Your current balance is $${balance}. Enter amount to withdraw:`));
        
        if (withdrawAmount <= balance) {
            balance -= withdrawAmount;  // Deduct the withdraw amount from balance
            console.log(`You withdrew $${withdrawAmount}. Your new balance is $${balance}.`);
        } else {
            console.log(`Insufficient funds! You cannot withdraw more than $${balance}.`);
        }

        if (balance === 0) {
            console.log("Your balance is zero. You cannot withdraw any more.");
            break;
        }
        
        const continueWithdrawal = prompt("Do you want to withdraw more? (yes/no)").toLowerCase();
        if (continueWithdrawal !== 'yes') {
            console.log("Transaction complete. Thank you for using the ATM.");
            break;
        }
    }
}

// -------------------------------------------------------------------------------------------------------------------------------


// Example 2. Shopping Cart System

// In this example, the user can keep adding items to their shopping cart until they decide to checkout.

let shoppingCart = [];
let continueShopping = true;

while (continueShopping) {
    let item = prompt("Enter the item you want to add to your cart:");
    shoppingCart.push(item);  // Add the item to the cart

    let moreItems = prompt("Do you want to add more items? (yes/no)").toLowerCase();

    if (moreItems !== 'yes') {
        continueShopping = false;  // Exit the loop if user says 'no'
    }
}

console.log("Here are the items in your cart:");
shoppingCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});

// -------------------------------------------------------------------------------------------------------------------------------


// Example 3. Data Entry for Employee Records

// This loop allows the HR department to enter employee information continuously, until they choose to stop.

let employees = [];
let addMore = true;

while (addMore) {
    let name = prompt("Enter employee name:");
    let age = prompt("Enter employee age:");
    let position = prompt("Enter employee position:");

    // Store the employee's details
    employees.push({
        name: name,
        age: age,
        position: position
    });

    // Ask if they want to add another employee
    let moreEmployees = prompt("Do you want to add another employee? (yes/no)").toLowerCase();
    if (moreEmployees !== 'yes') {
        addMore = false;
    }
}

console.log("Employee Records:");
employees.forEach((employee, index) => {
    console.log(`${index + 1}. ${employee.name}, Age: ${employee.age}, Position: ${employee.position}`);
});

// -------------------------------------------------------------------------------------------------------------------------------


// Example 4. Bus Ticket Booking System

// In this example, users can continue booking bus tickets until they choose to stop.

let availableSeats = 10;  // Example bus with 10 available seats
let ticketsBooked = 0;

while (availableSeats > 0) {
    let seatsToBook = parseInt(prompt(`There are ${availableSeats} seats available. How many would you like to book?`));

    if (seatsToBook <= availableSeats) {
        availableSeats -= seatsToBook;
        ticketsBooked += seatsToBook;
        console.log(`You have successfully booked ${seatsToBook} seats. ${availableSeats} seats remaining.`);
    } else {
        console.log(`Sorry, we don't have that many seats available. Only ${availableSeats} seats left.`);
    }

    if (availableSeats === 0) {
        console.log("All seats are booked.");
        break;
    }

    let moreBookings = prompt("Do you want to book more tickets? (yes/no)").toLowerCase();
    if (moreBookings !== 'yes') {
        console.log("Thank you for using the ticket booking system.");
        break;
    }
}

console.log(`You booked a total of ${ticketsBooked} tickets.`);

