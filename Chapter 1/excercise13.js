// (Algebra: solve 2 * 2 linear equations) You can use Cramer’s rule to solve the fol
// lowing 2 * 2 system of linear equation:
// ax + by = e
// cx + dy = f 
// x = ed- bf
//     ad- bc 
// y = af- ec
//     ad- bc
// Write a program that solves the following equation and displays the value for x and y:
// 3.4x + 50.2y = 44.5
// 2.1x + 55y = 5.9
let a=3.4
let b=50.2
let e=44.5
let c=2.1
let d=55
let f=5.9
let X=(44.5*55 - 50.2*5.9) / (3.4*55 - 50.2*2.1)
let Y=(3.4*5.9 - 44.5*2.1) / (3.4*55 - 50.2*2.1)
console.log('the value of X is ',X)
console.log('The value of Y is ',Y)