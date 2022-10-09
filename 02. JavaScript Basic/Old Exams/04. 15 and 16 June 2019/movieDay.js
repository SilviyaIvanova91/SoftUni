function movieDay(input) {
  let timeForAction = Number(input[0]);
  let numberScenes = Number(input[1]);
  let timeScene = Number(input[2]);
  let preparation = timeForAction * 0.15;
  let allAction = numberScenes * timeScene + preparation;

  let diffa = Math.abs(timeForAction - allAction);
  let diff = Math.round(diffa);
  if (timeForAction > allAction) {
    console.log(
      `You managed to finish the movie on time! You have ${diff} minutes left!`
    );
  } else {
    console.log(`Time is up! To complete the movie you need ${diff} minutes.`);
  }
}

movieDay(["120", "10", "11"]);
movieDay(["60", "15", "3"]);
