/** 
DESCRIPTION: 
    Write a program that prompts for a word or sentence (it can be capitalized, 
    have spaces and be capitalized). Figure out if the sentence/word is a palindrome or not.
    Ignoring punctuation, spaces and capitalized letters.

PALINDROME EXAMPLES SENTENCES:
    * A man, a plan, a canal, Panama!
        * A man a plan a canal Panama
        * a man a plan a canal panama
        * amanaplanacanalpanama
    * Madam, in Eden, I'm Adam.
    * Mr. Owl ate my metal worm.
    * Was it a car or a cat I saw?
    * Eva, can I see bees in a cave?
    * No lemon, no melon.
    * A Toyota's a Toyota. 
**/

const prompt = require('prompt-sync')();

let sentence = prompt('Input a sentence: ');

// Use a regular expression to replace special characters and spaces with an empty string.
sentence = sentence.replace(/[^a-zA-Z0-9]/g, '');

// Make any uppercase character into lowercase.
sentence = sentence.toLowerCase();

// Inver the word.
let invertedSentence = sentence.split('').reverse().join('');

// If the word is the same back and forward then it is a palindrome
if ( invertedSentence ==  sentence) {
    console.log(`${sentence} is a palindrome`);
}
else {
    console.log(`${sentence} isn't a palindrome`);
}

