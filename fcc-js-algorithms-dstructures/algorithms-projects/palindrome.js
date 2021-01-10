/**
 * Check if a string is a palindrome.
 * 
 * Return true or false.
 * 
 * Remove all non-alphanumeric characters and then convert to lowercase.
 */

function palindrome(str) {
  let regex = /[a-zA-Z0-9]/g;
  let res = str.match(regex);
  
  let reversed = res.slice().reverse();
  
  reversed = reversed.join('').toLowerCase();
  res = res.join('').toLowerCase();
  
  return res === reversed;
}

console.log(palindrome('eye'));
console.log(palindrome('_eye'));
console.log(palindrome('My age is 0, 0 si ega ym.'));
console.log(palindrome('0_0 (: /-\ :) 0-0'));
console.log(palindrome('five|\_/|four'));