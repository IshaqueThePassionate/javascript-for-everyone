
// Alert Box: Displays a message to the user

alert("Welcome to our website!");     // A simple popup with "OK" button


// Prompt Box: Asks the user for input

let userName = prompt("Please enter your name:");   // Displays an input box, returns the input value or null if canceled
alert("Hello, " + userName + "!");   // Displays the user's input


// Confirm Box: Asks the user to confirm an action

let confirmAction = confirm("Do you want to delete this file?");
if (confirmAction) {
    alert("File deleted.");   // User clicked "OK"
} else {
    alert("File not deleted.");   // User clicked "Cancel"
}


// Example with Prompt and Confirm:

let age = prompt("Enter your age:");
if (age >= 18) {
    let isConfirmed = confirm("Are you sure you want to proceed?");
    if (isConfirmed) {
        alert("You are allowed to enter.");
    } else {
        alert("Action canceled.");
    }
} else {
    alert("You are not old enough.");
}
