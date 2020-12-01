/**
 * Class syntax
 */

// New syntax for creating objects using class keyword.

// ES5
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

// ES6

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');

// Constructor is invoked when new is called.


class Vegetable {
  constructor(name) {
      this.name = name;
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name);