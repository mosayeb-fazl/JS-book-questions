// (Population projection) Rewrite Programming Exercise 1.11 to prompt the user 
// to enter the number of years and displays the population after the number of years. 
// Use the hint in Programming Exercise 1.11 for this program. The population 
// should be cast into an integer. Here is a sample run of the program:
let yearss=prompt('Enter the number of years')
let p=312032486
let birth=7
let death=13
let imeigrant=45
let year=365*24*60*60
let births= year/birth
let deaths= year/death
let imigrants= year/imeigrant
let after= yearss*(births+ p + imigrants - deaths)
alert('The population after  year is: ' + after)