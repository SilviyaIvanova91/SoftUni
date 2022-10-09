function movieRatings(input) {
  let index = 0;
  let numFilm = Number(input[index++]);
  let command = input[index++];
  let avgRte = 0;
  let maxRate = Number.MIN_SAFE_INTEGER;
  let maxRateTitle = "";
  let minRate = Number.MAX_SAFE_INTEGER;
  let minRateTitle = 0;

  for (let i = 0; i < numFilm; i++) {
    let name = command;
    let rating = Number(input[index++]);
    avgRte += rating;

    if (rating > maxRate) {
      maxRate = rating;
      maxRateTitle = name;
    }
    if (rating < minRate) {
      minRate = rating;
      minRateTitle = name;
    }
    command = input[index++];
  }
  let diffRate = avgRte / numFilm;
  console.log(`${maxRateTitle} is with highest rating: ${maxRate.toFixed(1)}`);
  console.log(`${minRateTitle} is with lowest rating: ${minRate.toFixed(1)}`);
  console.log(`Average rating: ${diffRate.toFixed(1)}`);
}

movieRatings([
  "5",
  "A Star is Born",
  "7.8",
  "Creed 2",
  "7.3",
  "Mary Poppins",
  "7.2",
  "Vice",
  "7.2",
  "Captain Marvel",
  "7.1",
]);
movieRatings([
  "3",
  "Interstellar",
  "8.5",
  "Dangal",
  "8.3",
  "Green Book",
  "8.2",
]);

 function movieRatings(input) {
   let movieCount = Number(input[0]);

   let maxRate = Number.MIN_SAFE_INTEGER;
   let maxRateTitle = "";

   let minRate = Number.MAX_SAFE_INTEGER;
   let minRateTite = "";

   let avgRate = 0;

   let i = 1;

   while (true) {
     if (i >= movieCount * 2) {
       break;
     }

     let title = input[i++];
     let rate = Number(input[i++]);

     if (rate > maxRate) {
       maxRate = rate;
       maxRateTitle = title;
     }

     if (rate < minRate) {
       minRate = rate;
       minRateTite = title;
     }

     avgRate += rate;
   }
   let avg = avgRate / movieCount;
   console.log(`${maxRateTitle} is with highest rating: ${maxRate.toFixed(1)}`);
   console.log(`${minRateTite} is with lowest rating: ${minRate.toFixed(1)}`);
   console.log(`Average rating: ${avg.toFixed(1)}`);
 }
