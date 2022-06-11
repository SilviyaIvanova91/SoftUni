function oldBooks(input) {
  let index = 0;
  let favBook = input[index++];
  let searchBook = input[index++];
  let count = 0;
  let bookIsFound = false;

  while (searchBook !== "No More Books") {
    if (searchBook === favBook) {
      console.log(`You checked ${count} books and found it.`);
      bookIsFound = true;
      break;
    }
    count++;
    searchBook = input[index++];
  }

  if (bookIsFound === false) {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${count} books.`);
  }
}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
oldBooks([
  "The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "No More Books",
]);
oldBooks([
  "Bourne",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);
