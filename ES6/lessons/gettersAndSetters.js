/**
 * Getters/Setters or Accessors/Mutators
 */

// Getters simply return the value of an object's private property,
// Setters modify the value.

// Example

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);  // anonymous
novel.writer = 'newAuthor';
console.log(novel.writer);  // newAuthor