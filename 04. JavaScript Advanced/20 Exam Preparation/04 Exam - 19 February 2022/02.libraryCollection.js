class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }

  addBook(bookName, bookAuthor) {
    if (Number(this.capacity) <= this.books.length) {
      throw new Error("Not enough space in the collection.");
    }

    let book = { bookName, bookAuthor, paid: false };
    this.books.push(book);
    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
  }

  payBook(bookName) {
    let book = this.books.find((b) => b.bookName == bookName);

    if (!book) {
      throw new Error(`${bookName} is not in the collection.`);
    }
    if (book.paid) {
      throw new Error(`${bookName} has already been paid.`);
    }

    book.paid = true;
    return `${bookName} has been successfully paid.`;
  }

  removeBook(bookName) {
    let book = this.books.find((b) => b.bookName == bookName);
    let bookIndex = this.books.findIndex((b) => b.bookName == bookName);

    if (!book) {
      throw new Error("The book, you're looking for, is not found.");
    }

    if (!book.paid) {
      throw new Error(
        `${bookName} need to be paid before removing from the collection.`
      );
    }

    this.books.splice(bookIndex, 1);
    return `${bookName} remove from the collection.`;
  }

  getStatistics(bookAuthor) {
    if (!bookAuthor) {
      let finalInformation = this.books
        .sort((a, b) => a.bookName.localeCompare(b.bookName))
        .map(
          (b) =>
            `${b.bookName} == ${b.bookAuthor} - ${
              b.paid == true ? `Has Paid.` : `Not Paid.`
            }`
        );

      return `The book collection has ${
        this.capacity - this.books.length
      } empty spots left.\n${finalInformation.join("\n")}`;
    } else {
      let author = this.books
        .filter((x) => x.bookAuthor === bookAuthor)
        .map(
          (b) =>
            `${b.bookName} == ${b.bookAuthor} - ${
              b.paid == true ? `Has Paid.` : `Not Paid.`
            }`
        );
      if (author.length != 0) {
        return `${author.join("\n")}`;
      } else {
        throw new Error(`${bookAuthor} is not in the collection.`);
      }
    }
  }
}

//-----------------input 1----------------------------
// const library = new LibraryCollection(2);
// console.log(library.addBook("In Search of Lost Time", "Marcel Proust"));
// console.log(library.addBook("Don Quixote", "Miguel de Cervantes"));
// console.log(library.addBook("Ulysses", "James Joyce"));

//-----------------input 2----------------------------
// const library = new LibraryCollection(2);
// library.addBook("In Search of Lost Time", "Marcel Proust");
// console.log(library.payBook("In Search of Lost Time"));
// console.log(library.payBook("Don Quixote"));

//-----------------input 3----------------------------
// const library = new LibraryCollection(2);
// library.addBook("In Search of Lost Time", "Marcel Proust");
// library.addBook("Don Quixote", "Miguel de Cervantes");
// library.payBook("Don Quixote");
// console.log(library.removeBook("Don Quixote"));
// console.log(library.removeBook("In Search of Lost Time"));

//-----------------input 4----------------------------
const library = new LibraryCollection(2);
console.log(library.addBook("Don Quixote", "Miguel de Cervantes"));
console.log(library.getStatistics("Miguel de Cervantes"));

//-----------------input 5----------------------------
// const library = new LibraryCollection(5);
// library.addBook("Don Quixote", "Miguel de Cervantes");
// library.payBook("Don Quixote");
// library.addBook("In Search of Lost Time", "Marcel Proust");
// library.addBook("Ulysses", "James Joyce");
// console.log(library.getStatistics());
