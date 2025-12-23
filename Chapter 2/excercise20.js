// (Financial application: calculate interest) If you know the balance and the annual 
// percentage interest rate, you can compute the interest on the next monthly pay
// ment using the following formula:
// interest = balance * (annualInterestRate/1200)
// Write a program that reads the balance and the annual percentage interest rate and 
// displays the interest for the next month. Here is a sample run:
let balance=prompt('Enter the balance')
let anuual=prompt('Enter the perccentage interest rate')
let interest= balance * (anuual/1200)
alert('the interest is ' + interest)