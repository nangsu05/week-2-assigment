
let seniorDiscount = 20; // senior discount
let memberDiscount = 10; // member discount

let age = 65; 
let isMember = true; 
let discount = 0; 

if (age >= 60) {
    discount = 20; 
    console.log("You are eligible for a 20% senior discount.");
} else if (isMember) {
    discount = 10; 
    console.log("You are eligible for a 10% member discount.");
} else {
    console.log("Sorry, you are not eligible for any discount.");
}

console.log("Your discount is: " + discount + "%");





