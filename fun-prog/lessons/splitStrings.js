/**
 * Split a String into an Array Using the split Method
 */

// Splits a string into an array of strings.
// It takes an argument, the delimiter, which will break up the string or RegEx.

// An example...

let str = "Hello World";
let bySpace = str.split(' ');

console.log(bySpace); // returns ['Hello', 'World']

/**
 * Prompt:
 * Use the split method inside the splitify function to split str into an array of words. 
 * The function should return the array. 
 * Note that the words are not always separated by spaces, and the array should not contain punctuation.
 */

function splitify(str) {

  // \W represents any non-word character.
  let re = /\W/;
  let arr = str.split(re);

  return arr;
}

console.log(splitify("Hello World,I-am code"));