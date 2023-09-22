/** 
DESCRIPTION: 
    Write a program that takes the following 
    nested matrix and flattens it (makes it a 1D array). 
    Use any type of algorithm you want like callbacks, recursion, etc...

    let multiDimension = [1, [2, 3, [4, 5, [6]]]];
**/

var multiDimension = [1, [2, 3, [4, 5, [6]]]];
var flattenArray = [];
let counter = 0;
let element;
do {

    element = multiDimension[counter]; 
    if ( Number.isInteger(element) ) {
        flattenArray.push(element); 
        counter++; 
    }
    else {
        multiDimension = element; 
        counter = 0;
    }
} while (multiDimension.length > counter);

console.log(flattenArray);
