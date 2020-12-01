/*
OOP Inheritance
*/

// Use supertypes to limit code repeating.

// Cat and Bear both eat, so we can abstract it into an Animal.


function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
    eat: function() {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

/*
Object.create(obj) creates a new object, and sets obj as the new object's prototype.
Recall that the prototype is like the "recipe" for creating an object.
By setting the prototype of animal to be Animal's prototype, you are effectively giving the animal instance the same "recipe" as any other instance of Animal.
*/

// The above creates an instance of Animal.

// Alternatively, we can set the prototype of the subtype to be an instancce of Animal.

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();

// Reset an inherited prototype.
// Manually set an object's constructor property to the appropriate object.

Bird.prototype.constructor = Bird;
duck.constructor // function Bird() {}

// If we want to add behavior unique to an object, we need to add them to the prototype.
Bird.prototype.fly = function () {
  console.log("I'm flying!");
};

/* */

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log("Woof!");
}

let beagle = new Dog();
beagle.eat();
beagle.bark();

// Overriding Inherited Methods

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function () {
  return 'Alas, this is a flightless bird.';
}

let penguin = new Penguin();
console.log(penguin.fly());

// Mixins... allow other objects to use a collection of functions.

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj) {
  obj.glide = function() {
    return 'Gliding...';
  }
}

glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();