// Example Object: User with Nested Address
const user = {
    name: 'Alice',
    age: 30,
    address: {
      city: 'Wonderland',
      street: 'Rabbit Hole',
    }
  };
  
  // 1. Nested Object Destructuring
  // Method A: Directly extract 'city' from the nested 'address'
  const { address: { city } } = user;
  console.log("Directly destructured city:", city); // Output: Wonderland
  
  // Method B: First extract 'address' and then extract 'city'
  const { address } = user;
  const { city: cityFromAddress } = address;
  console.log("Destructured city from extracted address:", cityFromAddress); // Output: Wonderland
  
  // 2. Function Parameter Destructuring
  // Function 'intro' extracts 'age' and 'name' directly from its parameter
  function intro({ age, name }) {
    console.log("User Intro - Age:", age, ", Name:", name);
  }
  intro(user); // Output: User Intro - Age: 30 , Name: Alice
  
  // 3. Array Destructuring with Skipped Elements
  // Define an array of colors
  const colors = ['red', 'green', 'blue', 'yellow'];
  
  // Function 'printColor' uses array destructuring and skips the third element
  function printColor([a, b, , g]) {
    console.log("Colors extracted:", a, b, g);
  }
  
  printColor(colors); // Output: Colors extracted: red green yellow
  