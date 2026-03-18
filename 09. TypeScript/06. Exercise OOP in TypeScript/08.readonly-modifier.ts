class Book {
  readonly title: string;
  readonly author: string;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const book = new Book("1984", "George Orwell");
console.log(`${book.title} by ${book.author}`);
// book.title = "Brave New World";
// book.author = "Terry Pratchet";
