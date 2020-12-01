/*
Protect object properties using closures.
*/

function Bird() {
  let weight = 15;

  this.getWeight = function () {
    return weight;
  };
}

let ducklet = new Bird();
ducklet.getWeight();

// To make a property private, create that variable within the constructor function.
// Rather than this.weight, you have let weight=15.

// This changes the scoping to be restricted to the constructor.
// Therefore, only methods within the constructor can act on the variable.

// getWeight is a privileged method because it has access to the variable.
// It is declared within the same context as the variable.

// 'closure' in JS is a function having access to the context in which it was created.