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

// Match letters and numbers using a hyphen.

let quoteThree = "Blueberry 3.141592653s are delicious.";
let deliciousRegex = /[h-s2-6]/ig;
let quoteThreeResult = quoteThree.match(deliciousRegex);

console.log('Matching a range of letters and numbers: ', quoteThreeResult);

// Negative character sets -- ranges we don't want, using the caret, ^.

let quoteFour = "3 blind mice.";
let magicRegex = /[^aeiou0-9]/ig;
let quoteFourResult = quoteFour.match(magicRegex);

console.log('Negative set matching: ', quoteFourResult);

// Match a character one or more times, +

let difficultSpelling = "Mississippi";
let spellingRegex = /s+/g;
let spellingResult = difficultSpelling.match(spellingRegex);

console.log('Matching repeating characters: ', spellingResult);

// Match a character zero or more times, *


/**
 * Create a regex chewieRegex that uses the * character to match an uppercase "A" character
 * immediately followed by zero or more lowercase "a" characters in chewieQuote.
 * Your regex does not need flags or character classes, and it should not match any of the other quotes.
 */

let chewieQuote = "Aaaaaaaaaaaaaarrgh!";
let chewieRegex = /Aa*/
let chewResult = chewieQuote.match(chewieRegex);

console.log('Matching a character zero or more times: ', chewResult);

// Find characters using 'lazy matching', using the question mark, ?.

// a lazy match finds the smallest possible part of a string that matches the regular expression.

let lazyText = "<h1>Winter is coming</h1>";
let lazyRegex = /<.*?>/;
// Return the first string that begins and ends with < > with any character in between, repeating any number of times.
let lazyResult = lazyText.match(lazyRegex);

console.log('Finding characters with lazy matching: ', lazyResult);

// Use /\w/g instead of /[a-zA-Z0-9_]+/

let quoteV2 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let resV2 = quoteV2.match(alphabetRegexV2).length;

console.log('Backslash w instead of a-zA-Z0-9_: ', resV2);

// Match everything BUT alphanumeric characters -- use \W.

let quoteV3 = "The five boxing wizards jump quickly.";
let nonAlphabetRegexV2 = /\W/g;
let resV3 = quoteV3.match(nonAlphabetRegexV2).length;

console.log('Everything but alphanumeric: ', resV3);

// Match 0-9 using \d.

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let movieRes = movieName.match(numRegex);

console.log('Matching numbers with d: ', movieRes);

// Match all non numbers using \D.

let nonNumRegex = /\D/g; // Change this line
movieRes = movieName.match(nonNumRegex);

console.log('Matching numbers with D: ', movieRes);

// Match whitespaces with \s.

let whiteSpaceSample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let whiteSpaceResult = whiteSpaceSample.match(countWhiteSpace);

console.log("Matching whitespaces: ", whiteSpaceResult)

// Match everything EXCEPT whitespace using \S.

let countNonWhiteSpace = /\S/g;
let nonWhiteSpaceResult = whiteSpaceSample.match(countNonWhiteSpace);

console.log("Matching non-whitespaces: ", nonWhiteSpaceResult)

