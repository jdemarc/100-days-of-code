/**
 * Conditional Logic
 */

 // If statements...
 // if (condition is true) {
 //   statement is executed 
 // }

 function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) return "Yes, that was true"

  return "No, that was false"
 }

 // Equality operator, ==
 // Returns true if they are equivalent or false if they are not.

// 1   ==  1   // true
// 1   ==  2   // false
// 1   == '1'  // true
// "3" ==  3   // true


 // Strict equality operator, ===
 // 3 === 3 // true
 // 3 === '3' // false

 function compareEquality(a, b) {
   if (a === b) {
     return "Equal";
   }
   return "Not Equal";
 }

 compareEquality(10, "10");

 // Inequality operator, !=

// 1 !=  2     // true
// 1 != "1"    // false
// 1 != '1'    // false
// 1 != true   // false
// 0 != false  // false

// Strict inequality, !==

// 3 !==  3   // false
// 3 !== '3'  // true
// 4 !==  3   // true

// Greater than operator, >

// 5   >  3   // true
// 7   > '3'  // true
// 2   >  3   // false
// '1' >  9   // false

// Greater than or equal to, >=

// 6   >=  6   // true
// 7   >= '3'  // true
// 2   >=  3   // false
// '7' >=  9   // false

// Less than operator, <

// 2   < 5  // true
// '3' < 7  // true
// 5   < 5  // false
// 3   < 2  // false
// '8' < 4  // false

// Less than or equal to, <=

// 4   <= 5  // true
// '7' <= 7  // true
// 5   <= 5  // true
// 3   <= 2  // false
// '8' <= 4  // false

// Logical AND, &&
// Returns true if the operands to the left and right of it are true

 if (num > 5 && num < 10) {
   return "Yes";
 }
 return "No";

 // Logical OR, ||
 // Returns true if either of the operands is true.

 if (num > 10 || num < 5) {
   return "No";
 }
 return "Yes";

 // Else statement.
 // When a condition for an if statement is true, the block of code is executed.
 // If the condition is false, nothing normally would happen.

 // Else If statements allow you to address multiple conditions. You can chain if statements with else if statements.

 if (num > 15) {
   return "Bigger than 15";
 } else if (num < 5) {
   return "Smaller than 5";
 } else {
   return "Between 5 and 15";
 }

 // Logical order of If Else statements.
 // Functions are executed from top to bottom, so be mindful of which statement comes first.

 function orderMyLogic(val) {
   if (val < 5) {
     return "Less than 5";
   } else if (val < 10) {
     return "Less than 10";
   } else {
     return "Greater than or equal to 10";
   }
 }

 orderMyLogic(7);

 // Golf code

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {

  if (strokes === 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes === par - 1) {
    return "Birdie";
  } else if (strokes === par) {
    return "Par";
  } else if (strokes === par + 1) {
    return "Bogey";
  } else if (strokes === par + 2) {
    return "Double Bogey";
  } else if (strokes >= par + 3) {
    return "Go Home!";
  }
}

golfScore(5, 4);








