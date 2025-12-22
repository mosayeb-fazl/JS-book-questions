// (Physics: finding runway length) Given an airplane’s acceleration a and take-off 
// speed v, you can compute the minimum runway length needed for an airplane to 
// take off using the following formula:
// length = v2
// 2a
// Write a program that prompts the user to enter v in meters/second (m/s) and the 
// acceleration a in meters/second squared (m/s2), and displays the minimum run
// way length. Here is a sample run:
let speed=prompt('Enter the speed in meter/second')
let accceleration=prompt('Enter the accceleration in meter/second^2')
let length1= speed**2 / 2*accceleration
alert('The minimum runway length for this airplane is ' + length1)

