/**
 * Spread operator
 */

// Looks a lot like rest parameters...

// Allows us to expand arrays and other expressions IN PLACE.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89

// Example
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2);