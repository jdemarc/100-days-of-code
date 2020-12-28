/*
 * Replace text with .replace()
 *
*/

// Use capture groups to replace text in a string.
// first parameter is the regex pattern, second is the string or function to replace the match.

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1";
let replaceResult = str.replace(fixRegex, replaceText);

console.log(replaceResult);