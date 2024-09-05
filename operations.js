/*
todo: go through the type casting details with these websites 
? https://262.ecma-international.org/14.0/index.html#sec-type-conversion true js website

*/

let value = 3
let negvalue = -value
console.log(negvalue)
/*
? Basic fundamental maths concepts
* console.log(2+2)
* console.log(2-2)
* console.log(2*2)
* console.log(2**3)
* console.log(2%3)
* console.log(2&3) 
// Run if you don't know the results
*/
let str1 = "Hello"
let str2 = " Prashant"
let str3 = str1 + str2
console.log(str3)

// The problem arises when a value is string and other is number or string it will give wrong answers.
// check out these for reference
let n = 23
let s = "2"
let r = n + s
console.log(r)  // returns 232
// To solve this kind of error use
let sn = Number(s)
console.log(sn + n)

/* 
! Question: IF YOU pass console.log(+true) then what would be the result, write in the bottom.
*/

let gamecounter = 100;
gamecounter++;  
console.log(gamecounter);