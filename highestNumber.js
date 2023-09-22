/** 
DESCRIPTION: 
   Write a program that asks for 10 numbers. Using logical operators and any other 
   javascript functions/structures you've seen before, determine and output the
    highest of those numbers.
**/


// Using promt-sync package because it is the lest verbose way to get user inputs from console in nodejs.
// Reference: https://www.codecademy.com/article/getting-user-input-in-node-js
const prompt = require('prompt-sync')();

var numbers =[];

for (let i = 0; i < 10; i++) {
    let number = parseInt(prompt('Input a number: '));
    numbers.push(number);
}

/**  The sort() method in JavaScript by default performs lexicographic (dictionary) 
 sorting on the elements of an array, which means it treats the elements as strings 
 and sorts them in alphabetical order. 
 To sort the elements of an array numerically, you should provide a comparison
 function to the sort() method.
*/ 

// sort from lowers to higher number, this means that the higer number is at the end of the array.
numbers.sort((a, b) => a - b);
// if you invert the list now the higer number will be at the begginign of the array.
numbers.reverse();

// Then you just need to print the first element of the array which is the highest number of the list.
console.log(`The higest inputted number is: ${numbers[0]}`)

