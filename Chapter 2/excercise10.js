//  (Science: calculating energy) Write a program that calculates the energy needed 
// to heat water from an initial temperature to a final temperature. Your program 
// should prompt the user to enter the amount of water in kilograms and the initial 
// and final temperatures of the water. The formula to compute the energy is
// Q = M * (finalTemperature – initialTemperature) * 4184
// where M is the weight of water in kilograms, temperatures are in degrees Celsius, 
// and energy Q is measured in joules. Here is a sample run\
let kilo=prompt('Eneter the amount of wanter in kilogram')
let initial=prompt('Eneter the initial temperature')
let final=prompt('Eneter the final temperature')
let q= kilo * ( initial - final ) * 4184
alert('The energy needed is '+ q)