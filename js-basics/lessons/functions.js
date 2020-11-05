/**
 * Functions
 */

 // Used to divide our code into reusable parts.
 // Code between the curly braces is executed each time the function is called.

 // Definition
 function functionName() {
   console.log("Hello World");
 }

 // Invocation
 functionName();

 // Parameters are variables that act as placeholders for values to put input into a function.  The actual values passed into a function are called arguments.

 function testFun(param1, param2) {
   console.log(param1, param2);
 }

 // "Hello" and "World" are arguments.
 testFun("Hello", "World");

 // Using return keyword.

 function plusThree(num) {
   return num + 3;
 }

 var answer = plusThree(5); // assigns 8;

 // Without a return, the function processes the inner code while the return remains undefined.

 var sum = 0;

 function addThree() {
   sum = sum + 3;
 }

 function addFive() {
   sum += 5;
 }

 addThree();
 addFive();

 // Code after a return does not run.
 function abTest(a, b) {
  if (a < 0 || b < 0) return;

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
 }

 abTest(2,2);

 // We can store the function return into variables.
 var processed = 0;

 function processArg(num) {
   return (num + 3) / 5;
 }

 processed = processArg(7); // assigns function return to processed.

 // Prompt: Simulating a queue, write a function which takes an array and a number as arguments.
 // The nextInLine function should then return the element that was removed.
 function nextInLine(arr, item) {
  arr.push(item);
  var removed = arr.shift();
  return removed;
}

 var testArr = [1,2,3,4,5];

 console.log("Before: " + JSON.stringify(testArr));
 console.log(nextInLine(testArr, 6));
 console.log("After: " + JSON.stringify(testArr));

