/*

OOP: Objects

*/

let dog = {
  name: "Spot",
  numLegs: 4
};

console.log(dog.name);
console.log(dog.numLegs);

/*

Creating method attached to an object.

*/

let dog = {
  name: "Spot",
  numLegs: 4,

  sayLegs: function() {
    return 'This dog has ' + this.numLegs + ' legs.';
  }
};

dog.sayLegs();

/*

Define a constructor

*/

function Dog() {
  this.name = 'Jeb';
  this.color = 'Black';
  this.numLegs = 3;
}

let hound = new Dog();

/*
Passing parameters to constructor.
*/

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

const terrier = new Dog('Bill', 'Orange')

/*
Verify instanceof an object.
*/

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
const myHouse = new House(3);

myHouse instanceof House;

/*
Iterate through props of a class object.
*/

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for (let prop in canary) {
  if (canary.hasOwnProperty(prop)) {
    ownProps.push(prop);
  }
}

/*
Change prototype properties
*/

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 2;

let beagle = new Dog("Snoopy");


/*
The constructor property
*/

// The constructor property is a reference to the constructor function that created the instance.

function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

/*
Changing prototypes.
*/

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 4,
  eat: function() {
    console.log('Nom nom nom.');
  },
  describe: function() {
    console.log('My name is: ' + this.name);
  }
};

// Manually setting the prototype of an object erases the constructor property.
// You will need to define it in the prototype again as follows:

Dog.prototype = {
  constructor: Dog,
  // numLegs: 4,
  // eat: function() {
  //   console.log('Nom nom nom.');
  // },
  // describe: function() {
  //   console.log('My name is: ' + this.name);
  // }
};

