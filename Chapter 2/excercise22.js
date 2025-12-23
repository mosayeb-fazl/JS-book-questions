// (Cost of driving) Write a program that prompts the user to enter the distance to 
// drive, the fuel efficiency of the car in miles per gallon, and the price per gallon, 
// and displays the cost of the trip. Here is a sample run:
let distence=prompt('Enter the driving distance')
let miles=prompt('Enter miles per gallon')
let price=prompt('Enter price per gallon')
let cost= (distence / miles) * price
alert('The cost of driving is ' + cost)