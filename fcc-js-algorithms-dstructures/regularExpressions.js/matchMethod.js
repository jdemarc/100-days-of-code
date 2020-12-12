/**
 * Match Method
 */

// Extract the pattern you found in a string.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

console.log('Extracting with .match():' , result)

/* 
  .match() syntax is the reverse of .test().

  'string'.match(/regex/);
  /regex/.test('string');
*/


