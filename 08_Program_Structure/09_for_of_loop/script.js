// ==========================================
// 1. Basic for...of Loop with Arrays
// ==========================================

const fruits = ["Apple", "Mango", "Banana", "Orange"];

for (const fruit of fruits) {
    console.log(fruit);
}

//------------------------------------------

// ==========================================
// 2. Iterating Over Strings
// ==========================================

const word = "JavaScript";

for (const char of word) {
    console.log(char);
}

//------------------------------------------

// ==========================================
// 3. Iterating Over Sets (Unique Values)
// ==========================================

const uniqueNumbers = new Set([10, 20, 30, 20, 10]);

for (const num of uniqueNumbers) {
    console.log(num);
}

//------------------------------------------

// ==========================================
// 4. Iterating Over Maps (Key-Value Pairs)
// ==========================================

const userRoles = new Map([
    ["Alice", "Admin"],
    ["Bob", "Editor"],
    ["Charlie", "Subscriber"]
]);

for (const [user, role] of userRoles) {
    console.log(`${user} is an ${role}`);
}

//------------------------------------------

// ==========================================
// 5. Nested for...of Loops (2D Arrays / Multidimensional)
// ==========================================

const heroTeams = [
    ["Ironman", "Thor", "Hulk"],
    ["Batman", "Superman", "Flash"]
];

for (const team of heroTeams) {
    console.log("--- Team ---");
    for (const hero of team) {
        console.log(hero);
    }
}

//------------------------------------------

// ==========================================
// 6. Using break and continue in for...of
// ==========================================

const scores = [45, 80, 92, 30, 99];

for (const score of scores) {
    if (score < 40) {
        continue; // Skips scores below 40
    }
    if (score > 95) {
        break; // Stops execution if score exceeds 95
    }
    console.log(`Accepted Score: ${score}`);
}

//------------------------------------------

// ==========================================
// 7. Getting Indices with entries()
// ==========================================

const items = ["Notebook", "Pen", "Eraser"];

for (const [index, item] of items.entries()) {
    console.log(`Index ${index}: ${item}`);
}

//------------------------------------------

// ==========================================
// 8. Iterating Over Objects using Object.entries()
// ==========================================

const student = {
    name: "Ishaque",
    rollNo: 101,
    course: "JavaScript"
};

for (const [key, value] of Object.entries(student)) {
    console.log(`${key}: ${value}`);
}