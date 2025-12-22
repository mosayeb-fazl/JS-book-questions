// (Health application: computing BMI) Body Mass Index (BMI) is a measure of 
// health on weight. It can be calculated by taking your weight in kilograms and 
// dividing by the square of your height in meters. Write a program that prompts the 
// user to enter a weight in pounds and height in inches and displays the BMI. Note 
// that one pound is 0.45359237 kilograms and one inch is 0.0254 meters. Here is 
// a sample run:
let height=prompt('Enter your height in inches')
let weight=prompt('Enter your weight in pounds')
let hconvert= height * 0.0254
let wconvert= weight * 0.45359237
let BMI= wconvert / hconvert**2
alert('BMI is ' + BMI)