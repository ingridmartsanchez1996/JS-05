/** 
DESCRIPTION: 
    Write a program that prompts a user for their data: username, age, and a list of
    their favorite movies. Store the information and then showcase it in the console.
    Take note that the films should add a small message like: 'The film {film} is one 
    of my favorites'.
*/

// Using promt-sync package because it is the lest verbose way to get user inputs in nodejs.
// Reference: https://www.codecademy.com/article/getting-user-input-in-node-js
const prompt = require('prompt-sync')();

function userProfile(){
    let username = prompt('What is your username? ');
    // Casting user input into integer. 
    let age = parseInt(prompt('What is your age? '));
    let films = [];
    var keepAdding;

    // Storing the user's information:
    do  {
        let film = prompt('What is one of your favorite movies? ');
        films.push(film);
        
        keepAdding = prompt('Do you want to keep adding more movies? [yes/no] ');
        // .trim() removes spaces at the end or begginig of the string
        //   i.e: " yes ".trim() == "yes"
    } while (keepAdding.trim() == "yes")

    // Showcasing the user's information in the console:
    console.log(`My username is ${username} and I'm ${age} years old`);
    for (var i = 0; i < films.length; i++) {
        var film = films[i];
        // Do something with the current element, for example, print it to the console
        console.log(`* The film ${film} is one of my favorites`);
    }
}

userProfile();