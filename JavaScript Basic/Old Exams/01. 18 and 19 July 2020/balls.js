function balls(input) {
  index = 0;
  let num = Number(input[index++]);
  let count = 0;
  let red = 0;
  let orange = 0;
  let yellow = 0;
  let white = 0;
  let black = 0;
  let other = 0;

  for (let colour = 1; colour <= num; colour++) {
    let colour = input[index++];
    if (colour === "red") {
      red++;
      count += 5;
    } else if (colour === "orange") {
      orange++;
      count += 10;
    } else if (colour === "yellow") {
      yellow++;
      count += 15;
    } else if (colour === "white") {
      white++;
      count += 20;
    } else if (colour === "black") {
      black++;
      count = Math.floor(count / 2);
    } else {
      other++;
      count += 0;
    }
  }
  console.log(`Total points: ${count}`);
  console.log(`Red balls: ${red}`);
  console.log(`Orange balls: ${orange}`);
  console.log(`Yellow balls: ${yellow}`);
  console.log(`White balls: ${white}`);
  console.log(`Other colors picked: ${other}`);
  console.log(`Divides from black balls: ${black}`);
}

balls(["3", "white", "black", "pink"]);
balls(["5", "red", "red", "ddd", "ddd", "ddd"]);
