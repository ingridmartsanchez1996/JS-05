/** 
DESCRIPTION: 
    Write a program that prompts for an intenger number n. Where  1 <= n

EXAMPLES:
    * 0! = 1
    * 2! = 1*2 = 2
    * 3! = 1*2*3 = 6
    * 4! = 1*2*3*4 = 24
    * n! = 1*2*...*(n-1)*n 
**/

const prompt = require('prompt-sync')();

let number = parseInt(prompt('Insert number: '));

let result = 1
let factorialNumbers = [];
let counter = 0;

if (1 <= number){

    while(counter < number) {
        factorialNumbers.push(number - counter);
        result *= number - counter;
        counter++;
    }

    // sorting array to have [1, 2, 3, ..., n] rather than [n, ...., 3, 2, 1]
    let sortedFactorialNumbers = factorialNumbers.sort((a, b) => a - b);
    // converting the array into the factorial operation:
    //  [1, 2, 3, ..., n] => "1*2*3....*n" 
    let stringSortedFactorialNumbers = sortedFactorialNumbers.join("*")
    
    console.log(`${number}! = ${stringSortedFactorialNumbers} = ${result}`);

}
else {
    console.log(`no valid number: ${number}, please enter a possitive value.`);
}






