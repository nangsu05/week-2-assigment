let age = 20; 
let isCitizen = true;  

let miniVotingAge = 18; 

if (age >= miniVotingAge && isCitizen) {
    console.log("You are eligible to vote.");
} else if (age < miniVotingAge) {
    console.log("You are too young to vote.");
} else if (!isCitizen) {
    console.log("You must be a citizen to vote.");
} else {
    console.log("You are not eligible to vote.");
}

