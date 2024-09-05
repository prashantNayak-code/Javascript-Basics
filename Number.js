
/*
todo: Run this code in browser console and find out more functions releated to each concept.
*/
const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)
// console.log(balance.toString(), typeof(balance))    // It is a object data type
console.log(balance.toString().length)
/*
! Note to have a fixed number within point is to be done using tofixed() function like this:
console.log(balance.toFixed(2))
* With the help of these function you can evalutate that there will be fixed numbers after the decimal point.
*/
// toPrecision() function is used to find approx value
const ex = 234.567
console.log(ex.toPrecision(4))  // use it in your subconcious mind only and to make it simpler this functions argument is maximun number of digit befor the point.
const e = 1000000000
console.log(e.toLocaleString('en-IN'))

/*
? Quick fact: If you ever want to learn about more functions and methods then go to your browsers console.
*/