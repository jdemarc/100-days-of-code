// You are given a JSON object representing a part of your musical album collection.
// Each album has a unique id number as its key and several other properties.
// Not all albums have complete information.

// You start with an updateRecords function that takes an object like collection, an id, a prop (like artist or tracks), and a value.
// Complete the function using the rules below to modify the object passed to the function.

//     Your function must always return the entire object.
//     If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
//     If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
//     If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
//     If value is an empty string, delete the given prop property from the album.

// Note: A copy of the collection object is used for the tests.

var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(object, id, prop, value) {
  if (prop !== 'tracks' && value) {
    object[id][prop] = value;
  } else if (prop === 'tracks' && !object[id].hasOwnProperty(prop)) {
    object[id][prop] = [];
    object[id][prop].push(value);
  } else if (prop === 'tracks' && value) {
    object[id][prop].push(value);
  } else if (!value) {
    delete object[id][prop];
  }

  console.log(object);
  return object;
}

// updateRecords(collection, 5439, 'artist', 'ABBA');
// updateRecords(5439, "tracks", "Take a Chance on Me");
// updateRecords(2468, "tracks", "Free");

// After cleanup...

function updateRecordsTwo(object, id, prop, value) {
  // If the value is empty, delete the object property with the given id.
  if (!value) delete object[id][prop];

  // If prop === tracks,
  else if (prop === 'tracks') {
    // If 'tracks' does not exist on the object initialize it.
    object[id][prop] = object[id][prop] || [];
    object[id][prop].push(value);

  } else {
    // If the property is something other than tracks, add it to the object.
    object[id][prop] = value;
  }

  console.log(object);
  return object;
}

// updateRecordsTwo(collection, 5439, 'artist', 'ABBA');
// updateRecordsTwo(5439, "tracks", "Take a Chance on Me");
// updateRecordsTwo(2468, "tracks", "Free");
