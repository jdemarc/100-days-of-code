/**
 * Refactor Global Variables Out of Functions
 */

//1 Do not alter a variable or obect.
//2 Declare functional arguments.

var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (bookList, bookName) {
  let newList = bookList.slice(0);
  newList.push(bookName);
  return newList;
  
}

function remove (bookList, bookName) {
  let newList = bookList.slice(0)

  var book_index = newList.indexOf(bookName);
  if (book_index >= 0) {
    newList.splice(book_index, 1);
    return newList;
  }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

