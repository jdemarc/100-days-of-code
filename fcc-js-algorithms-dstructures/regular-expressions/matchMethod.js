/**
 * Match Method
 */

// Extract the pattern you found in a string.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

console.log('Extracting with .match(): ', result)

/* 
  .match() syntax is the reverse of .test().

  'string'.match(/regex/);
  /regex/.test('string');
*/

// Extract the pattern more than once with the -g flag.

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< g flag here
let starResult = twinkleStar.match(starRegex);

console.log('Extracting multiple patterns with g flag: ', starResult);

// Match a single character with multiple possibilities with brackets, [].

let quote = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let quoteResult = quote.match(vowelRegex);

// console.log(quoteResult.length);
console.log('Matching single char, multiple possible with brackets: ', quoteResult);

// Define a range for matching using the hyphen.

let quoteTwo = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
let quoteTwoResult = quoteTwo.match(alphabetRegex);

console.log('Matching a range with hyphen: ', quoteTwoResult);
