
// Nested Object Example 1: Car

let car = {
    make: 'Tesla',
    model: 'Model 3',
    specifications: {
      color: 'Red',
      range: '350 miles',
      autopilot: true
    }
  };
  
  // Accessing Nested Object Properties
  console.log(car.specifications.color);        // Output: Red
  console.log(car['specifications']['range']);  // Output: 350 miles

  

  // Nested Object Example 2: Employee
  
  let employee = {
    name: 'John Doe',
    position: 'Software Engineer',
    contactInfo: {
      email: 'john.doe@example.com',
      phone: '555-1234'
    }
  };
  
  // Accessing Nested Object Properties
  console.log(employee.contactInfo.email);       // Output: john.doe@example.com
  console.log(employee['contactInfo']['phone']); // Output: 555-1234
  