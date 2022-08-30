function Book(title, author, ISBN, numCopies) {
  this.title = title;
  this.author = author;
  this.ISBN = ISBN;
  this.numCopies = numCopies;
}

Book.prototype.getAvailability = () => {
  if (this.numCopies === 0) {
    return "Out of Stock";
  } else if (this.numCopies < 10) {
    return "Low Stock";
  }
  return "In Stock";
};
