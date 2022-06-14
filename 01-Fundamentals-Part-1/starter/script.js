/*
let js = "amazing"
console.log(40 + 8 + 23 - 10)

console.log("Jonas")
console.log(23)

let firstName = "Matilda"

console.log("firstName", firstName)
console.log("firstName", firstName)
console.log("firstName", firstName)

//allowed variable symbols are $, _, letters, numbers
let jonas_matilda = "JM"
let $function = 27

let person = "jonas"
//Any constants variables should be uppercase
let PI = 3.1415

//variables naming convention is important
let myFirstJob = "Programmer"
let myCurrentJob = "Teacher"
//these are an example of bad naming convention
let job1 = "Programmer"
let job2 = "Teacher"

console.log("My First Job :", myFirstJob)
*/

//7 Primitive Data Types anything thats not an object
//Number: Floating point numbers --> Used for decimals and integers
//String: Sequence of characters --> Used for text
//Boolean: Logical type that can only be true of false --> Used for taking decisions
//Undefined: Value taken by a variable that is not yet defined ('empty value')
//Null: Also means 'empty value
//Symbol (ES2015) Value that is unique and cannot be changed.
//BigInt (ES2020) Larger integers than the Number type can hold

//JavaScript has dynamic typing: We do not have to manually define the data type of the value stored in the variable. Instead, data types are determined by the value itself. "Automatically"

/*
let javascriptIsFun = true
console.log("javaScriptIsFun", javascriptIsFun)
//typeof is an operator that returns the type of the value
//dynamic typing simply means we can easily change the type of the value
console.log(typeof javascriptIsFun)
//console.log(typeof "Jonas")
//console.log(typeof 23)
//this is an example of dynamic typing
javascriptIsFun = "YES!"
console.log("javaScriptIsFun dynamic typing", typeof javascriptIsFun)

//example of undefined
let year
console.log("year", year)
console.log("year", typeof year)

year = 2022
console.log("year", typeof year)

console.log(typeof null)
*/

//Three different ways to declare a variable
//var, let, const

//you can reassign a variable with let. Or 'mutate' it
/*
let age = 30
age = 31

//const variables are immutable and cannot be reassigned
const birthYear = 1989
// birthYear = 1990
//cannot declare empty variables with const
//const job;

//var is the old way of declaring variables
var job = "Programmer"
job = "Teacher"

//you dont haft to declare variables, but it is terrible practice
*/

//-------------------------------------------------------------------
// Operators: Allows us to transform values or combine multiple values
//1: Arithmetic Operators or math operators
/*
const now = 2037
const ageJonas = now - 1989
const ageSarah = now - 2019
console.log("ageJonas", ageJonas, "ageSarah", ageSarah)
//example of arithmetic operators
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
//2 ** 3 means 2 to the power of 3 withi === 2 * 2 * 2
//another example of + operator to join strings
const firstName = "Jonas"
const lastName = "Matilda"
console.log(firstName + " " + lastName)
const fullName = firstName + " " + lastName
console.log(fullName)

//2: typeof operator which we've done earlier "see above"

//3: assignment operators
//=, +=, -=, *=, /=, **=, %=
let x = 10 + 5 // 15
//x += 10 basically reassigns the value of x to x + 10
x += 10 // x = x + 10
x *= 4 // x = x * 4  === 100
x++ // x = x + 1 === 101
x-- // x = x - 1 === 100
x-- // x = x - 1 === 99
console.log("x", x)

//in real dev we would store these results in a variable
// Comparison Operators
// ==, ===, !=, !==, >, <, >=, <=
console.log(ageJonas > ageSarah) // true
console.log(ageJonas < ageSarah) // false
console.log(ageSarah >= 18) // true

const isFullAge = ageSarah >= 18
console.log("isFullAge", isFullAge)
console.log(now - 1991 > now - 2019) // true
*/

//Operator Precedence
const now = 2037
const ageJonas = now - 1989
const ageSarah = now - 2019
//this console.log works because JavaScript has a well defined order of opertaor precedence. Which means which operator is evaluated first.
console.log(now - 1991 > now - 2019) // true

//for example
//console.log(25 - 10 - 5)

let x, y
x = y = 25 - 10 - 5 // x = y = 10, x = 10, y = 10
console.log("x", x, "y", y)
//we need paranthasis to evaluate the expression in the right order
const averageAge = (ageJonas + ageSarah) / 2
console.log("jonas", ageJonas, "sarah", ageSarah, "averageAge", averageAge)
