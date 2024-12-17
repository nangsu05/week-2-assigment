
let minCreditScore = 700;  //  minicredit score 
let minIncome = 40000;     //  miniannual income 

let creditScore = 750;     //  credit score
let annualIncome = 45000;  //  annual income


if (creditScore >= minCreditScore && annualIncome >= minIncome) {
    console.log("You are eligible for the loan.");
}

else if (creditScore >= minCreditScore) {
    console.log("Credit score is sufficient, but income is too low.");
}

else if (annualIncome >= minIncome) {
    console.log("Income is sufficient, but credit score is too low.");
}

else {
    console.log("Sorry, you don't qualify for the loan.");
}
