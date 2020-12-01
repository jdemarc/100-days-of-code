/**
 * Combine an Array into a String Using the join Method
 */

// Join is used to join elements of an array together
// to create a string. It takes a delimiter used to separate the elements.

/**
 * Prompt:
 * Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str.
 * The function should return a string. For example, "I-like-Star-Wars" would be converted to "I like Star Wars".
 * For this challenge, do not use the replace method.
 */


// Basic idea... split the string into an array of words.
// Join the array into a single string separated by spaces.

function sentensify(str) {
  let re = /\W/;
  return str.split(re).join(' ');
}

console.log(sentensify("May-the-force-be-with-you"));