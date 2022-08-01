function adAstra(arr) {
  let input = arr.shift();
  let regExp =
    /([|#])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/gm;
  let matches = regExp.exec(input);
  let sumCal = 0;
  let list = [];
  while (matches != null) {
    sumCal += Number(matches.groups.calories);
    list.push({
      item: matches.groups.name,
      day: matches.groups.date,
      cal: matches.groups.calories,
    });

    matches = regExp.exec(input);
  }
  let days = Math.trunc(sumCal / 2000);
  console.log(`You have food to last you for: ${days} days!`);
  for (let i = 0; i < list.length; i++) {
    console.log(
      `Item: ${list[i].item}, Best before: ${list[i].day}, Nutrition: ${list[i].cal}`
    );
  }
}

adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
adAstra(["Hello|#Invalid food#19/03/20#450|$5*(@"]);

// function adAstra(arr) {
//     let input = arr.shift();
//     let regExp =
//       /([|#])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/gm;
//     let matches = regExp.exec(input);
//     let sumCal = 0;
//     let list = {};
//     while (matches != null) {
//       let product = matches.groups.name;
//       sumCal += Number(matches.groups.calories);
//       list[product] = matches.groups.name;
//       list[product] = {
//         dateLast: matches.groups.date,
//         caloriesLast: matches.groups.calories,
//       };

//       matches = regExp.exec(input);
//     }
//     let days = Math.trunc(sumCal / 2000);
//     console.log(`You have food to last you for: ${days} days!`);
//     for (let [product, value] of Object.entries(list)) {
//       console.log(
//         `Item: ${product}, Best before: ${value.dateLast}, Nutrition: ${value.caloriesLast}`
//       );
//     }
//   }
