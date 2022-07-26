function meetings(input) {
  let res = {};

  for (let line of input) {
    let [day, name] = line.split(" ");
    if (res.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      res[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  }

  for (let day in res) {
    console.log(day, "->", res[day]);
  }
  // for (let [key, value] of Object.entries(res)) {
  //   console.log(key, "->", value);
  // }
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
meetings([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
