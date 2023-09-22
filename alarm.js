/** 
DESCRIPTION: 
    Write a program that asks a user for the amount of seconds needed until an alarm
    (message) is executed alongside a text to show once those seconds have passed in 
    real time. 
**/

// from prompt-sync import promt
// Using promt-sync package because it is the lest verbose way to get user inputs from console in nodejs.
// Reference: https://www.codecademy.com/article/getting-user-input-in-node-js
const prompt = require('prompt-sync')();

function main() {
    // Request user how many seconds, they want their alarm to last.
    let userInputStringInSeconds = prompt('How many seconds should the countdown take? ');
    // Cast the string value to an integer to be able to execute multiplication operation over it.
    let userInputIntegerInSeconds = parseInt(userInputStringInSeconds);
    // Convert seconds to miliseconds.
    let userInputIntegerInMilseconds = userInputIntegerInSeconds * 1000;
    // The above convertion from seconds to miliseconds is required because setTimeout only understand miliseconds unit.
    setTimeout(() => console.log('Your alarm has finished.'), userInputIntegerInMilseconds);
}

main();
