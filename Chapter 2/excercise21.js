// (Financial application: calculate future investment value) Write a program that 
// reads in investment amount, annual interest rate, and number of years, and dis
// plays the future investment value using the following formula:
// futureInvestmentValue =
// investmentAmount * (1 + monthlyInterestRate)numberOfYears*12
// For example, if you enter amount 1000, annual interest rate 3.25%, and number 
// of years 1, the future investment value is 1032.98.
// Here is a sample run:
let amount=Number(prompt('Enter investment amount'))
let anuual=Number(prompt('Enter the perccentage interest rate'))
let year=Number(prompt('Enter the year'))
let futurevalue= amount * (1 + anuual )**year*12
alert('Accumulated value is ' + futurevalue)