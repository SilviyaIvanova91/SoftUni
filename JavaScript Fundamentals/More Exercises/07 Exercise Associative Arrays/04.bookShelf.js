function bookShelf(input) {
  let bookShelf = {};
  while (input.length > 0) {
    let command = input.shift();
    if (command.includes("->")) {
      let [id, genre] = command.split(" -> ");
      if (!bookShelf.hasOwnProperty(id)) {
        bookShelf[id] = {};
        bookShelf[id][genre] = [];
      }
    } else {
      let [book, bookGenre] = command.split(", ");
      let isFound = Object.keys(bookShelf).find((a) =>
        bookShelf[a].hasOwnProperty(bookGenre)
      );
      if (isFound) {
        bookShelf[isFound][bookGenre].push(book);
      }
    }
  }
  let sortinByidLength = Object.keys(bookShelf).sort(
    (a, b) =>
      Object.values(bookShelf[b])[0].length -
      Object.values(bookShelf[a])[0].length
  );
  for (let id of sortinByidLength) {
    let genre = Object.keys(bookShelf[id]);
    let count = Object.values(bookShelf[id])[0].length;
    console.log(`${id} ${genre}: ${count}`);
    let sortedBook = Object.values(bookShelf[id])[0].sort((a, b) =>
      a.split(": ")[0].localeCompare(b.split(": ")[0])
    );
    for (let book of sortedBook) {
      console.log(`--> ${book}`);
    }
  }
}

bookShelf([
  "1 -> history",
  "1 -> action",
  "Death in Time: Criss Bell, mystery",
  "2 -> mystery",
  "3 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Hurting Secrets: Dustin Bolt, action",
  "Future of Dawn: Aiden Rose, sci-fi",
  "Lions and Rats: Gabe Roads, history",
  "2 -> romance",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
  "Pilots of Stone: Brook Jay, history",
]);
bookShelf([
  "1 -> mystery",
  "2 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Lions and Rats: Gabe Roads, history",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
]);

// function bookShelf(input) {
//   let shelfId = [];
//   let shelfBooks = {};

//   for (let line of input) {
//     if (line.includes('->')) {
//       let [bookId, bookGenre] = line.split(' -> ');
//       if (!shelfId.includes(bookId)) {
//         shelfBooks[bookId] = {};
//         shelfBooks[bookId][bookGenre] = [];
//       }
//       shelfId.push(bookId);
//     } else if (line.includes(':')) {
//       let [book, bookGenre] = line.split(', ');
//       let findObj = Object.keys(shelfBooks).find((o) => shelfBooks[o].hasOwnProperty(bookGenre));
//       if (findObj) {
//         shelfBooks[findObj][bookGenre].push(book);
//       }
//     }
//   }

//   Object.keys(shelfBooks)
//     .sort((a, b) => {
//       let resA = Object.values(shelfBooks[a])[0].length;
//       let resB = Object.values(shelfBooks[b])[0].length;
//       return resB - resA;
//     })
//     .forEach((id) => {
//       let genre = Object.keys(shelfBooks[id]);
//       let bookNamesArr = Object.values(shelfBooks[id])[0];
//       let bookCount = Object.values(shelfBooks[id])[0].length;
//       console.log(`${id} ${genre}: ${bookCount}`);
//       bookNamesArr
//         .sort((a, b) => {
//           let titleA = a.split(': ')[0];
//           let titleB = b.split(': ')[0];
//           return titleA.localeCompare(titleB);
//         })
//         .forEach((bookName) => {
//           console.log(`--> ${bookName}`);
//         });
//     });
// }
