/**
 * Steamroller
 */

// Flatten a nested array.

function steamroll(arr) {

  // this only flattens two layers.
  // return [].concat(...arr);

  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(steamroll(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }

  return res;
}

console.log(steamroll([1, [2], [3, [[4]]]]));