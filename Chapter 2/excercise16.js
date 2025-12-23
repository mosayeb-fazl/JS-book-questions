//  (Geometry: area of a hexagon) Write a program that prompts the user to enter the 
// side of a hexagon and displays its area. The formula for computing the area of a 
// hexagon is 
// Area = 323
// 2 s2,
// where s is the length of a side. Here is a sample run
let hexagon = Number(prompt('Enter the side of the hexagon'));
let area = (3 * Math.sqrt(3) / 2) * hexagon ** 2;
alert("Area of the hexagon is: " + area);
