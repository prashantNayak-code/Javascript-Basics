let age = 24;
let score = "87";
console.log(typeof(score))
let valueInNumber = Number(score);
console.log(typeof(valueInNumber))

/* Number() function
! It is a major problem with js that it does convert a string that should not be able to convert in number to NaN
* Number() function converts the given value to a number.
* If the conversion is not possible, it returns NaN (Not a Number).
* If the value is a null then it will return 0
? It is also possible to convert boolean values into number if it is true then 1 else 0.
todo: check what Number() function will do when the condition is undefined
*/

// for example :- 
let a = "33a"
ab = Number(a);
console.log(ab) // return NaN

// Boolean() funtion
// let isLoggedin = 1  // true
let isLoggedin = 0  // false
let inBoolean = Boolean(isLoggedin)
console.log(inBoolean)
/*
* If you take the value be empty string then it will result false, instead take the value be something inside then returns true.
*/

// String() funtion
let num = 123

let inString = String(num)
console.log(typeof inString, inString)