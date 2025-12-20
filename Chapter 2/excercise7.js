// (Find the number of years) Write a program that prompts the user to enter the 
// minutes (e.g., 1 billion), and displays the number of years and days for the min
// utes. For simplicity, assume a year has 365 days. Here is a sample run:
let minute=prompt('Enter the minute')
let minutesindays= 24 * 60
let days= Math.floor(minute / minutesindays) 
let minutesinyear= 60 * 24 * 365
let year= (minute / minutesinyear)
alert(minute + ' minutes equals to ' + days + ' day')
alert(minute + ' minutes equals to ' + year + ' year')
