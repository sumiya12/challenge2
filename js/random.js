// Collect input from a user

let min = prompt(" min too oruulana uu");
let max = prompt(" max too oruulana uu");
// Convert the input to a number
let convert = parseInt(min);
let convert1 = parseInt(max);

// Use Math.random() and the user's number to generate a random number
// let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let randomNumber2 = Math.floor(Math.random() * (convert1 - convert) + min + 1);
console.log(min);
// Create a message displaying the random number
let main = document.querySelector("main");
let result = `<h1>input number is ${convert} and ${convert1} random number is  and ${randomNumber2}  </h1>`;
main.innerHTML = result;
