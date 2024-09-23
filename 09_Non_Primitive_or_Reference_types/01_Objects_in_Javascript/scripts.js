
// Object Declaration: Animal

let animal = {
    species: 'Dog',
    name: 'Buddy',
    age: 5,
    isFriendly: true,
    favoriteToys: ['ball', 'bone', 'rope']
  };

  // Accessing Object Properties

  console.log(animal.species); // Output: Dog
  console.log(animal['name']); // Output: Buddy
  
  // Adding and Modifying Properties
  animal.breed = 'Golden Retriever';
  animal.age = 6;
  
  console.log(animal.breed); // Output: Golden Retriever
  console.log(animal.age);    // Output: 6

  

  // Object Declaration: Laptop
  
  let laptop = {
    brand: 'Dell',
    model: 'XPS 13',
    year: 2021,
    color: 'Silver',
    specs: {
      processor: 'Intel i7',
      ram: '16GB',
      storage: '512GB SSD'
    }
  };
  
  // Accessing Laptop Properties
  console.log(laptop.brand);  // Output: Dell
  console.log(laptop['model']); // Output: XPS 13
  
  // Modifying Laptop Properties
  laptop.year = 2022;
  laptop.color = 'Black';
  
  console.log(laptop.year);  // Output: 2022
  console.log(laptop.color); // Output: Black
  


  // Object Declaration: Book
  
  let book = {
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    yearPublished: 2019,
    genres: ['Thriller', 'Mystery', 'Psychological Fiction']
  };
  
  // Accessing Book Properties
  console.log(book.title);  // Output: The Silent Patient
  console.log(book['author']); // Output: Alex Michaelides
  
  // Modifying Book Properties
  book.yearPublished = 2020;
  book.genres.push('Drama');
  
  console.log(book.yearPublished); // Output: 2020
  console.log(book.genres);        // Output: ['Thriller', 'Mystery', 'Psychological Fiction', 'Drama']
  


  // Object Declaration: Smartphone
  let smartphone = {
    brand: 'Samsung',
    model: 'Galaxy S21',
    screenSize: 6.2,
    batteryLife: '24 hours',
    features: ['5G', 'Wireless Charging', 'Water-resistant']
  };
  

  // Accessing Smartphone Properties
  console.log(smartphone.brand);   // Output: Samsung
  console.log(smartphone['model']); // Output: Galaxy S21
  
  // Modifying Smartphone Properties
  smartphone.batteryLife = '30 hours';
  smartphone.features.push('Face ID');
  
  console.log(smartphone.batteryLife); // Output: 30 hours
  console.log(smartphone.features);    // Output: ['5G', 'Wireless Charging', 'Water-resistant', 'Face ID']
  


  // Object Declaration: Apartment
  
  let apartment = {
    location: 'New York',
    rooms: 3,
    hasBalcony: true,
    rent: 2500
  };
  
  // Accessing Apartment Properties
  console.log(apartment.location); // Output: New York
  console.log(apartment['rooms']); // Output: 3
  
  // Modifying Apartment Properties
  apartment.rent = 2600;
  apartment.hasBalcony = false;
  
  console.log(apartment.rent);       // Output: 2600
  console.log(apartment.hasBalcony); // Output: false
  