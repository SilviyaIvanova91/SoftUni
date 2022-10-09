function movies(input) {
  let listOfMovies = [];

  input.forEach((el) => {
    if (el.includes("addMovie")) {
      let movie = el.replace("addMovie ", "");
      listOfMovies.push({ name: movie });
    } else if (el.includes("directedBy")) {
      let movieInfo = el.split(" directedBy ");
      let name = movieInfo[0];
      let director = movieInfo[1];
      // let[name,director] = el.split(" directedBy ")
      listOfMovies.forEach((movie) => {
        if (movie.name === name) {
          movie.director = director;
        }
      });
    } else if (el.includes("onDate")) {
      let [name, date] = el.split(" onDate ");
      listOfMovies.forEach((movie) => {
        if (movie.name === name) {
          movie.date = date;
        }
      });
    }
  });
  listOfMovies.forEach((movie) => {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  });
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
movies([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);

//----------------------------------------------
// function movies(input) {
//   let listOfMovies = [];
//   for (let line of input) {
//     if (line.includes("addMovie")) {
//       let nameOfMovie = line.split("addMovie ")[1];
//       listOfMovies.push({ name: nameOfMovie });
//     } else if (line.includes("directedBy")) {
//       let info = line.split("directedBy ");
//       let name = info[0].trim();
//       let director = info[1];
//       let movie = listOfMovies.find((movieObj) => movieObj.name === name);
//       if (movie) {
//         movie.director = director;
//       }
//     } else if (line.includes("onDate")) {
//       let info = line.split("onDate ");
//       let name = info[0].trim();
//       let date = info[1];
//       let movie = listOfMovies.find((movieObj) => movieObj.name === name);
//       if (movie) {
//         movie.date = date;
//       }
//     }
//   }
//   for (let movie of listOfMovies) {
//     if (movie.name && movie.director && movie.date) {
//       console.log(JSON.stringify(movie));
//     }
//   }
// }
