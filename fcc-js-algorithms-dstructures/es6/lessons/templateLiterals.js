/**
 * Template Literals
 */

// Allows creation of multi-line strings and use of string interpolation.
// `${variable}`

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};

// Desired output:

// [
//   '<li class="text-warning">no-var</li>',
//   '<li class="text-warning">var-on-top</li>',
//   '<li class="text-warning">linebreak</li>'
// ]

function makeList(arr) {
  const failureItems = [];

  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
  }

  console.log(failureItems);
  return failureItems;
}

const failuresList = makeList(result.failure);