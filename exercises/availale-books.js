// function Book(title, author, ISBN, numCopies) {
//   this.title = title;
//   this.author = author;
//   this.ISBN = ISBN;
//   this.numCopies = numCopies;
// }

// Book.prototype.getAvailability = function(){
//   if (this.numCopies === 0) {
//     return "Out of Stock";
//   } else if (this.numCopies < 10) {
//     return "Low Stock";
//   }else{
//       return "In Stock";
//   }
// };

// Book.prototype.sell = function(numCopiesSold = 1){
//   this.numCopies -= numCopiesSold;
// };

// Book.prototype.restock = function(numCopiesRestock = 0){
//   this.numCopies += numCopiesRestock;
// };

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
  
  const HungerGames = new Book("Hunger Games", "Suzane Collins", 123919, 5);
  
  console.log(HungerGames.getAvailability());
  HungerGames.restock(12);
  console.log(HungerGames.getAvailability());
  HungerGames.sell(17);
  console.log(HungerGames.getAvailability());
  