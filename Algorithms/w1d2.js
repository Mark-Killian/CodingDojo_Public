// JS variables and DataTypes - what are they even?

// Naming Variables
// Camel case is the convention we use in JS
// 1. You can't start with a number
// 2. No spaces
// 3. No dashes

// Variable creation is with the keyword var
// Following keyworkd, name the variable
// Assign a value to it with the assignment operator

var smoothie = "banana mango spinach";

// Primitive Data Types

// Strings - strings of characters bookened by quotes
var myName = "Mark"
var surname = "Hernandez"

// String concatenation
var fullName = myName + " " + surname

console.log(fullName)

// Numbers - numbers are numbers. JS doesn't discriminate between integers and floating point numbers. They are both the same data type in JS. 

var age = 34
var grade = 99.9

// Mathematical operators - Plus +, minus -, multiplication *, division /

// Booleans - can only have one of two values - true or false

var isRaining = false

// Null, undefined 

// Lesson 1 - Predict the output
var a = 25;
// reassing the value of a to be the old value of a minus 13
// a -= 13
a = a - 13;
console.log(a/2);
    
a = "hello";
console.log(a + " hello"); // hello hello

// Lesson 2 - Predict Loops

// For loop
// Four things for a for loop
// 1. Name a sentry
// 2. Where it starts
// 3. Where it stops
// 4. How it changes

for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}
    
console.log("outside of the loop " + i); // --> outside the loop 10
