const name = "Prashant Nayak"
let repo = 8

console.log(`Hello, my name is ${name} and I have ${repo} public repositories on GitHub.`)
const gamename = new String("HighFives-04")
// console.log(gamename.__proto__)
// console.log(gamename.length) 
console.log(gamename.toUpperCase())
console.log(gamename)
/*
todo: Search for more string methods in jsdoc
? If you want to check the value ion which index then use charAt function().
*/

console.log(gamename.charAt(0))
console.log(gamename[0])
// To find value with index
console.log(gamename.indexOf("F"))

// More string methods
let newstring = gamename.substring(0, 5)    // returns 0, 4-1
console.log(newstring)

const anotherstring = gamename.slice(-8, 3)
// console.log(anotherstring)

// Trim function()
let newName = "    Prashant    "
console.log(newName)
console.log(newName.trim())

let url = "https://www.youtube%34%46.com"
check = url.replace("%", "-")   // replaces "%" with "-"
console.log(check)
console.log(url.includes('Prashant'))   // checks if the url contains 'Prashant'

// split()
console.log(url.split("%"))
