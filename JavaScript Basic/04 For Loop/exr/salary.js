function salary(input) {
  let index = 0;
  let tabs = Number(input[index]);
  index++;
  let money = Number(input[index]);
  index++;

  isHaveSalary = true;
  for (let i = 0; i < tabs; i++) {
    let web = input[index];
    index++;
    switch (web) {
      case "Facebook":
        money -= 150;
        break;
      case "Instagram":
        money -= 100;
        break;
      case "Reddit":
        money -= 50;
        break;
      default:
        money -= 0;
        break;
    }
    if (money <= 0) {
      isHaveSalary = false;
      console.log(`You have lost your salary.`);
      break;
    }
  }
  if (isHaveSalary) console.log(money);
}

// if (money <= 0) {
//   console.log(`You have lost your salary.`);
// } else {
//   console.log(money);
// }

salary([
  "10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
]);
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);
