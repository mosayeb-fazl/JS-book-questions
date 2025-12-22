//  (Geometry: distance of two points) Write a program that prompts the user to enter 
// two points (x1, y1) and (x2, y2) and displays their distance between them. 
// The formula for computing the distance is 2(x2- x1)2 + (y2- y1)2. Note that 
// you can use Math.pow(a, 0.5) to compute 2a. Here is a sample run
let x1 = Number(prompt('Enter the first X', 'x1'));
let y1 = Number(prompt('Enter the first Y', 'y1'));
let x2 = Number(prompt('Enter the second X', 'x2'));
let y2 = Number(prompt('Enter the second Y', 'y2'));
let distence=Math.sqrt((x1 -x2 )**2 + (y1 - y2)**2)
alert('The distance between the two points is ' + distence)