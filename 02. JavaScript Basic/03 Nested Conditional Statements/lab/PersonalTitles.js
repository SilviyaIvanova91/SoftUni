function personalTitles(input) {
  let age = Number(input[0]);
  let gender = input[1];
  if (gender == "f") {
    if (age >= 16) {
      console.log("Ms.");
    } else {
      console.log("Miss");
    }
  } else {
    if (age >= 16) {
      console.log("Mr.");
    } else {
      console.log("Master");
    }
  }
}

personalTitles(["12", "f"]);
personalTitles(["17", "m"]);
personalTitles(["25", "f"]);
personalTitles(["13.5", "m"]);
