class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of Stock";
    } else if (this.numCopies < 10) {
      return "Low Stock";
    }
    return "In Stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }

  restock(numCopiesRestock = 0) {
    this.numCopies += numCopiesRestock;
  }
}

class TechnicalBook extends Book {
  constructor(title, author, ISBN, numCopies, edition) {
    super(title, author, ISBN, numCopies);
    this.edition = edition;
  }

  getEdition() {
    return `The current version of this book is ${this.edition}.`;
  }
}

const crackingTheCodingInterview = new TechnicalBook(
  "Cracking the codin interview",
  "Gayle Lackman",
  1222,
  7,
  "2.3"
);

console.log(crackingTheCodingInterview.availability);
console.log(crackingTheCodingInterview.getEdition());
