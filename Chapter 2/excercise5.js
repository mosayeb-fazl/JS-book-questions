// (Financial application: calculate tips) Write a program that reads the subtotal 
// and the gratuity rate, then computes the gratuity and total. For example, if the 
// user enters 10 for subtotal and 15% for gratuity rate, the program displays $1.5
// as gratuity and $11.5 as total. Here is a sample run:
let sub=prompt('Enter the subtotal')
let gratuity=prompt('Enter the gratuity rate')
let gratuity2= sub * (gratuity / 100)
let total= +sub + +gratuity2
alert('the gratuity is $' + gratuity2 + '   total   $' + total )
