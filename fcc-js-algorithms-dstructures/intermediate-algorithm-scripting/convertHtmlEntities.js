/**
 * Convert HTML entities.
 */

function convertHTML(str) {
  const html = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;'
  }

  let words = str.split('');

  for (let i = 0; i < words.length; i++) {
    for (let prop in html) {
      if (words[i] === prop) {
        words[i] = html[prop]
      }
    }
  }

  return words.join('');
}

console.log(convertHTML('Stuff in "quotation marks"'));