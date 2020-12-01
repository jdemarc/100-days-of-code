/**
 * Objects
 */

var myDog = {
      name: 'Juice',
      legs: 3,
      tails: 1,
      friends: ['Taco', 'Burrito']
  };

// A way of storing data in a structured way.
// Similar to arrays, but accessed through properties. name, legs, tails, and friends are properties above.

// Properties can be accessed through dot notation (.) or bracket notation ([]).

var dogName = myDog.name; // assigns 'Juice'
var legCount = myDog.legs; // assigns 3

// When trying to access a propety with a space in its name, you need to use bracket notation and quotations.
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var entreeValue = testObj['an entree'];
var drinkValue = testObj['the drink'];

// With bracket notation, you can access a property stored as the value of a variable.
var testObj2 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var playerNumber = 16;
var player = testObj2[playerNumber]; // assigns "Montana"

/**
 * Updating object properties
 */

// Can be done using dot or bracket notation.

var someDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

someDog.name = "Happy Coder"
// myDog["name"] = "Happy Coder"

/**
 * Adding object properties
 */

// Done in the same way you update an object.

someDog.bark = "woof";
// someDog["bark"] = "woof";

/**
 * Deleting object properties
 */

// Use the delete keyword.

delete someDog.tails;
// delete someDog["tails"];

// Convert the following to a 'lookup'

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

// Becomes...

function phoneticLookup(val) {
  var result = '';
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }

  result = lookup[val]
  return result;
}

phoneticLookup("charlie");

/**
 * Testing object for property.
 */

// .hasOwnProperty(propName), returns true or false

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp]
  } else {
    return "Not Found";
  }
}

// Why Dot notation does not work here:
// Dot notation looks for a specific property called “checkProp”,
// where bracket notation looks for a property called the value of the “checkProp” variable.

/**
 * Manipulating Complex Objects
 */

// Objects containing objects.

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Metallica",
    "title": "Master of Puppets",
    "release_year": 1986,
    "formats": [
      "CD",
      "8T",
      "MP3"
    ]
  }
];

// Access nested objects by chaining dot/bracket notations.
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside['glove box'];

// Access arrays nested within objects using dot and array bracket notation.
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = myPlants[1].list[1];


