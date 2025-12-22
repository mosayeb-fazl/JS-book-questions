//  (Financial application: compound value) Suppose you save $100 each month 
// into a savings account with the annual interest rate 5%. Thus, the monthly inter
// est rate is 0.05/12 = 0.00417. After the first month, the value in the account 
// becomes
// 100 * (1 + 0.00417) = 100.417
// After the second month, the value in the account becomes
// (100 + 100.417) * (1 + 0.00417) = 201.252 
// After the third month, the value in the account becomes
// (100 + 201.252) * (1 + 0.00417) = 302.507 
// and so on.
// Write a program that prompts the user to enter a monthly saving amount and 
// displays the account value after the sixth month. (In Exercise 5.30, you will use a 
// loop to simplify the code and display the account value for any month.)
let money= Number(prompt('Enter the monthly saving amount'))
let interest= 0.00417
let v1= money * (1 + interest)
let v2= (money + v1 ) * (1 + interest)
let v3= (money + v2 ) * (1 + interest)
let v4= (money + v3 ) * (1 + interest)
let v5= (money + v4 ) * (1 + interest)
let v6= (money + v5 ) * (1 + interest)
alert('After the sixth month, the account value is ' + v6)