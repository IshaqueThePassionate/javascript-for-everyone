// Example 1: Checking for an Odd Number

const evenNumbers1 = [0, 2, 10, 4, 61, 8];

const result1 = evenNumbers.some((num, i) => {
    if(num % 2 === 1) {
        console.log(i); // Logs index of first odd number found
    }
    return num % 2 === 1;
});

console.log(result); // Output: true (because 61 is odd)

// Example 2: Checking for Expired Subscriptions
const subscriptions = [
  { name: "User1", isActive: true },
  { name: "User2", isActive: false },
  { name: "User3", isActive: true }
];

const hasInactiveUsers = subscriptions.some(sub => !sub.isActive);
console.log(hasInactiveUsers); // Output: true (User2 has an inactive subscription)

// Example 3: Checking if Any Student Passed
const scores = [45, 50, 38, 29, 70];
const hasPassed = scores.some(score => score >= 40);
console.log(hasPassed); // Output: true (since 45, 50, and 70 are passing marks)


// Example 1: Checking if All Numbers Are Even
const evenNumbers = [0, 2, 10, 4, 61, 8];

const result = evenNumbers.every((num) => {
    debugger;
    return num % 2 === 0;
});

console.log(result); // Output: false (because 61 is not even)

// Example 2: Checking if All Employees Are Verified
const employees = [
  { name: "Alice", isVerified: true },
  { name: "Bob", isVerified: true },
  { name: "Charlie", isVerified: false }
];

const allVerified = employees.every(emp => emp.isVerified);
console.log(allVerified); // Output: false (Charlie is not verified)

// Example 3: Checking if All Students Have Submitted Assignments
const students = [
  { name: "Ali", submitted: true },
  { name: "Sara", submitted: true },
  { name: "John", submitted: false }
];

const allSubmitted = students.every(student => student.submitted);
console.log(allSubmitted); // Output: false (John has not submitted)
