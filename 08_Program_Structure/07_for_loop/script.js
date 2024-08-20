
for (let i = 0; i < 3; i++) {
    console.log("Hello, world!");
}

// Output:
// Hello, world!
// Hello, world!
// Hello, world!

// In this example, we used the for loop to print "Hello, world!" three times to the console.

//------------------------------------------------------------------------------------------------------------------------


for (let i = 1; i < 6; i++) {
    console.log(i);
}

// Output

// 1
// 2
// 3
// 4
// 5

// In this example, we have printed numbers from 1 to 5 using a for loop.

//------------------------------------------------------------------------------------------------------------------------

// program to display the sum of natural numbers

let sum = 0;
const n = 100

// loop from i = 1 to i = n
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    sum += i;  // sum = sum + i
}

console.log(`sum: ${sum}`);

// Output: sum: 5050

//------------------------------------------------------------------------------------------------------------------------


// A for loop can also be used to iterate over elements of an array. For example,

const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Output

// apple
// banana
// cherry

//------------------------------------------------------------------------------------------------------------------------


// adding last name in the elements of an array and iterating them through for loop

let friends = ["ishaque", "hamza", "ali", "hashim" , "ahtesham","afaq"]

for(let i = 0; i < friends.length ; i++){
    let result = friends[i] + " khan" 
    console.log(result);
    
}


//------------------------------------------------------------------------------------------------------------------------


// iterating over even numbers, 

for(let i = 0; i <= 100; i++){
    if(i % 2 === 1){
        console.log(i);
        
    }
    
}