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
