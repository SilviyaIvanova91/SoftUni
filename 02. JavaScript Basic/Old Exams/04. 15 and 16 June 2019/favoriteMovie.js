function favoriteMovie(input) {
  let index = 0;
  let command = input[index++];
  let points = 0;
  let bestPoints = 0;
  let bestMovie = "";
  let counter = 0;

  while (command !== "STOP") {
    let name = command;
    counter++;
    points = 0;
    for (let i = 0; i < name.length; i++) {
      let letter = name[i];
      let symbol = letter.charCodeAt(0);
      points += symbol;

      if (
        letter === " " ||
        letter === "1" ||
        letter === "2" ||
        letter === "3" ||
        letter === "4" ||
        letter === "5" ||
        letter === "6" ||
        letter === "7" ||
        letter === "8" ||
        letter === "9" ||
        letter === "0"
      ) {
        continue;
      }

      if (letter === letter.toLowerCase()) {
        points -= name.length * 2;
      } else if (letter === letter.toUpperCase()) {
        points -= name.length;
      }
    }

    if (points > bestPoints) {
      bestPoints = points;
      bestMovie = name;
    }

    if (counter === 7) {
      console.log("The limit is reached.");
      console.log(
        `The best movie for you is ${bestMovie} with ${bestPoints} ASCII sum.`
      );
      break;
    }

    command = input[index++];
  }
  if (command === "STOP") {
    console.log(
      `The best movie for you is ${bestMovie} with ${bestPoints} ASCII sum.`
    );
  }
}

 favoriteMovie(["Matrix", "Breaking bad", "Legend", "STOP"]);
 favoriteMovie([
   "Wrong turn",
   "The maze",
   "Area 51",
   "Night Club",
   "Ice age",
   "Harry Potter",
   "Wizards",
 ]);
favoriteMovie(["School story 2", "Shrek 2", "Ice age", "STOP"]);
