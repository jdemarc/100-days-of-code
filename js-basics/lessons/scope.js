/**
 * Scope
 */

 // Scope is the visibility of variables.  Variables outside of a function have a global scope, or can be seen anywhere in the JavaScript code.

 // Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

 // Variables declared within a function, as well as function parameters, have local scope.
 // Only visible within that function.

 function myLocalScope() {
  'use strict';

  var myVar;
  
  console.log('inside myLocalScope', myVar);
 }
 myLocalScope();

 // Run and check the console
 // myVar is not defined outside of myLocalScope
 console.log('outside myLocalScope', myVar);

 // Global vs Local in functions.
 // It is possible to have both locally and globally scoped variables with the same name.  Local variables take precedence.
 var someVar = "Hat";
 function myFun() {
   var someVar = "Head";
   return someVar;
 }
 // Returns "Head"