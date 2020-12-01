/**
 * Objects
 */

// Add Key-Value pairs to objects

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

console.log(foods);

// Using named brackets..

let animals = {
  snake: 'reptile',
  wasp: 'insect'
}

animals['whale'] = 'mammal';
console.log(animals);

// Modify objects nested within an object.

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;

console.log(userActivity);

// Access property names using bracket notation

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
  // returns 25
}

console.log(checkInventory("apples"));

// Remove object properties using delete keyword.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

 delete foods.oranges;
 delete foods.plums;
 delete foods.strawberries

console.log(foods);

// Check if an object property exists using hasOwnProperty();

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  if (obj.hasOwnProperty('Alan') && 
      obj.hasOwnProperty('Jeff') && 
      obj.hasOwnProperty('Sarah') && 
      obj.hasOwnProperty('Ryan')) return true;

  return false;
}

console.log(isEveryoneHere(users));

// Iterate through keys using for...in

function countOnline(usersObj) {
  let online = 0;
  for (let user in usersObj) {
    if (usersObj[user].online) {
      online++;
    }
  }

  return online;
}

// Bracket notation is required because a variable is being passed. Using dot notation, you are looking for the word 'user'.

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  return Object.keys(obj)
  // returns ['Alan', 'Jeff', 'Sarah', 'Ryan'];
}

console.log(getArrayOfUsers(users));

// Modify an array stored in an object.

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // returns ['Sam', 'Kira', 'Tomo', 'Pete']
}

console.log(addFriend(user, 'Pete'));

