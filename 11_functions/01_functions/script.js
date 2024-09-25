// Example 1: Basic Function


// Function declaration
function sayHello() {
    console.log("Hello, World!");
  }
  
  // Calling the function
  sayHello(); // Output: Hello, World!
  
  //-------------------------------------------------------------------------------------------------
  


  // Example 2: Function with Parameters
  
  
  // Function with one parameter
  function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  // Calling the function with different arguments
  greet("Alice"); // Output: Hello, Alice!
  greet("Bob");   // Output: Hello, Bob!
  
  
  //-------------------------------------------------------------------------------------------------
  


  // Example 3: Function with Multiple Parameters
  
  
  // Function with two parameters
  function add(a, b) {
    console.log(a + b);
  }
  
  // Calling the function with different arguments
  add(3, 4); // Output: 7
  add(10, 5); // Output: 15
  
  //-------------------------------------------------------------------------------------------------
  
  

  // Example 4: Function with a Return Value
  
  
  // Function that returns a value
  function multiply(a, b) {
    return a * b;
  }
  
  // Storing the returned value in a variable
  let result = multiply(5, 3);
  console.log(result); // Output: 15
  
  //-------------------------------------------------------------------------------------------------
  
  
  // Example 5: Anonymous Function
  
  
  // Assigning an anonymous function to a variable
  let subtract = function(a, b) {
    return a - b;
  };
  
  // Calling the anonymous function
  console.log(subtract(10, 4)); // Output: 6
  
  //-------------------------------------------------------------------------------------------------
  

  
  // Example 6: Arrow Function
  
  
  // Using arrow function syntax
  let divide = (a, b) => {
    return a / b;
  };
  
  // Calling the arrow function
  console.log(divide(20, 4)); // Output: 5
  
  //-------------------------------------------------------------------------------------------------
  
  
  // Example 7: Arrow Function with Implicit Return
  
  
  // Arrow function with implicit return (no curly braces needed for one-liners)
  let square = x => x * x;
  
  // Calling the arrow function
  console.log(square(5)); // Output: 25
  
  //-------------------------------------------------------------------------------------------------
  


  // Example 8: Higher-Order Function
  
  // A higher-order function is a function that takes another function as an argument or returns a function as a result.
  
  
  // Higher-order function that takes a function as an argument
  
  function repeat(operation, num) {
    for (let i = 0; i < num; i++) {
      operation();
    }
  }
  
  // Function to be passed as an argument
  
  function sayHello() {
    console.log("Hello!");
  }
  
  
  // Calling the higher-order function 
  
  repeat(sayHello, 3); // Output: Hello! Hello! Hello!
  
  //-------------------------------------------------------------------------------------------------
  

  
  // Example 9: Using Functions as Object Methods
  
  
  // Object with a method
  
  let calculator = {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    }
  };
  
  // Calling methods of the object
  
  console.log(calculator.add(10, 5)); // Output: 15
  console.log(calculator.subtract(10, 5)); // Output: 5
  
  //-------------------------------------------------------------------------------------------------
  

  
  //Example 10: IIFE (Immediately Invoked Function Expression)
  
  
  // IIFE to create a new scope
  
  (function() {
    let message = "Hello, IIFE!";
    console.log(message); // Output: Hello, IIFE!
  })();
  
  // The variable message is not accessible outside the IIFE
  // console.log(message); // This would throw an error

  