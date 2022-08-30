
class technicalBook extends Book {
  constructor(title, author, ISBN, numCopies, edition) {
    super(title, author, ISBN, numCopies);
    this.edition = edition;
  }

  getEdition() {
    return `The current version of this book is ${this.edition}.`;
  }
}

const crackingTheCodingInterview = new technicalBook(
  "Cracking the codin interview",
  "Gayle Lackman",
  1222,
  7,
  "2.3"
);

console.log(crackingTheCodingInterview.availability)
console.log(crackingTheCodingInterview.getEdition())