
let book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald'
};

// Dot Notation
book.title = '1984';

// Bracket Notation
book['author'] = 'George Orwell';

console.log(book.title);    // Output: 1984
console.log(book.author);   // Output: George Orwell

// ---------------------------------------------------------------------------------------------------------------



// Object Declaration: Animal

let animal = {
  species: 'Dog',
  name: 'Buddy',
  age: 5,
  isFriendly: true,
  favoriteToys: ['ball', 'bone', 'rope']
};

// Accessing Object Properties using Dot and Bracket Notation
console.log(animal.species);   // Dot Notation - Output: Dog
console.log(animal['name']);   // Bracket Notation - Output: Buddy
console.log(animal.age);       // Dot Notation - Output: 5
console.log(animal['isFriendly']); // Bracket Notation - Output: true

// Adding and Modifying Properties using Dot and Bracket Notation
animal.breed = 'Golden Retriever';  // Dot Notation
animal['age'] = 6;                  // Bracket Notation

console.log(animal.breed);   // Dot Notation - Output: Golden Retriever
console.log(animal['age']);  // Bracket Notation - Output: 6

// Modifying favoriteToys using both notations
animal.favoriteToys.push('frisbee');  // Dot Notation
animal['favoriteToys'].push('stick'); // Bracket Notation

console.log(animal.favoriteToys);     // Output: ['ball', 'bone', 'rope', 'frisbee', 'stick']

// ---------------------------------------------------------------------------------------------------------------



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
  
// ---------------------------------------------------------------------------------------------------------------


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
  
// ---------------------------------------------------------------------------------------------------------------

 
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
  
// ---------------------------------------------------------------------------------------------------------------


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
  