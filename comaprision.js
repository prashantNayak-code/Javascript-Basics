// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

/*
! Avoid comparing different datatypes
* But if you compare a string with a number it works just fine for example.
? console.log("2" > 1); // true
It automatically convert string to a number
* Naturally comparision likes that can be wrong as it is automatically done by js so prefer to convert them mannually instead.

todo: Find out if null > 0, null == 0, or null >= 0
Same can be said about undefined but it always returns false
*/

// Strict check
console.log("2" === 1)  // Returns false

