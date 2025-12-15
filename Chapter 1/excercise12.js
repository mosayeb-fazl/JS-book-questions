// (Average speed in kilometers) Assume a runner runs 24 miles in 1 hour, 40  minutes,
// and 35 seconds. Write a program that displays the average speed in kilometers per 
// hour. (Note that 1 mile is 1.6 kilometers.)
let miles=24
let kilometers=24*1.6
let hour= 1
let minutes=40
let seconds=35
let converthour= 60 / (minutes + seconds / 60) + hour
let speed= kilometers/converthour
console.log('the average speed is',spees)