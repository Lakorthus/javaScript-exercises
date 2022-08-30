
// function Movie(title, director, genre, relaseYear, rating) {
//     this.title = title;
//     this.director = director;
//     this.genre = genre;
//     this.relaseYear = relaseYear;
//     this.rating = rating;
//   }
  
//   Movie.prototype.getOverview = function () {
//     return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.relaseYear}. It receive a rating of ${this.rating}/100`;
//   };

class Movie {
    constructor(title, director, genre, relaseYear, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.relaseYear = relaseYear;
        this.rating = rating;
    }
    getOverview() {
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.relaseYear}. It receive a rating of ${this.rating}/100`;
    }
}


const Spiderman = new Movie("Spiderman", "Sam Raimi", "Action", 2002, 82);
const Batman = new Movie(
  "Batman: Origins",
  "Christopher Nolan",
  "Fiction",
  2008,
  93
);

console.log(Spiderman);
console.log(Spiderman.getOverview());
console.log(Batman.getOverview());
