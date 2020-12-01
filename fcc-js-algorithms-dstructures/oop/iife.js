/*
Immediately Invoked Function Expression (IIFE)
*/

// Execute a function as soon as it is declared.

(function () {
  console.log('Chirp.');
})();

// This is an anonymous function that executes right away.

// The function has no name and is not stored within any variable.

/*
Use an IIFE to create a module.
*/

// You can group related functionalities into a single object or module as such:

let funModule = (function () {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();

// This returns an object, the funModule, which can then be called using dot notation.

funModule.isCuteMixin(obj);