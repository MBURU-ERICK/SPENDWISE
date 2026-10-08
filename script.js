

// 1. APPLICATION DATA
// -------------------

// Basic budgeting information
let monthlyBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// Expense categories
let foodExpenses = 0;
let transportExpenses = 0;
let billsExpenses = 0;
let otherExpenses = 0;
    

// 2. COLLECT USER INPUT
// ---------------------

// Ask the user for their monthly budget
monthlyBudget = Number(
    prompt("Enter your monthly budget:")
);

// Ask the user for expenses
foodExpenses = Number(
    prompt("Enter your food expenses:")
);

transportExpenses = Number(
    prompt("Enter your transport expenses:")
);

billsExpenses = Number(
    prompt("Enter your bills expenses:")
);

otherExpenses = Number(
    prompt("Enter your other expenses:")
);


// 3. REUSABLE FUNCTIONS
// ---------------------

// Calculate total expenses
function calculateTotalExpenses(food, transport, bills, other) {
    return food + transport + bills + other;
}


// Calculate remaining balance
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}


// Display a budget summary
function displayBudgetSummary(budget, expenses, balance) {
    console.log("========== SpendWise Budget Summary ==========");
    console.log("Monthly Budget: KES " + budget);
    console.log("Total Expenses: KES " + expenses);
    console.log("Remaining Balance: KES " + balance);
    console.log("==============================================");
}


// 4. PERFORM CALCULATIONS
// -----------------------

// Calculate total spending
totalExpenses = calculateTotalExpenses(
    foodExpenses,
    transportExpenses,
    billsExpenses,
    otherExpenses
);

// Calculate money remaining
remainingBalance = calculateRemainingBalance(
    monthlyBudget,
    totalExpenses
);


// 5. DISPLAY RESULTS IN CONSOLE
// ----------------------------

displayBudgetSummary(
    monthlyBudget,
    totalExpenses,
    remainingBalance
);


// Display individual expense categories
console.log("Food Expenses: KES " + foodExpenses);
console.log("Transport Expenses: KES " + transportExpenses);
console.log("Bills Expenses: KES " + billsExpenses);
console.log("Other Expenses: KES " + otherExpenses);


// Display whether the user is within budget
if (remainingBalance > 0) {
    console.log(
        "Status: You are within your budget."
    );
} else if (remainingBalance === 0) {
    console.log(
        "Status: You have used your entire budget."
    );
} else {
    console.log(
        "Status: You have exceeded your budget by KES " +
        Math.abs(remainingBalance)
    );
}