function destinationMapper(input) {
  let destintaion = [];
  let regExp = /([=\/])([A-Z][A-Za-z]{2,})\1/gm;
  let matches = regExp.exec(input);
  let sum = 0;
  while (matches != null) {
    let dest = matches[0].slice(1, matches[0].length - 1);
    destintaion.push(dest);
    sum += dest.length;

    matches = regExp.exec(input);
  }
  console.log(`Destinations: ${destintaion.join(", ")}`);
  console.log(`Travel Points: ${sum}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");

//------------------------------------------------
// function destinationMapper(input) {
//   let destintaion = [];
//   let regExp = /[=\/][A-Z][A-Za-z]{2,}[=\/]/gm;
//   let sum = 0;
//   let found = input.match(regExp);
//   if (found) {
//     found.forEach((el, i) => {
//       if (el[0] == el[el.length - 1]) {
//         el = el.substring(1, el.length - 1);
//         sum += el.length;
//         destintaion.push(el);
//       }
//     });
//   }
//   console.log(`Destinations: ${destintaion.join(", ")}`);
//   console.log(`Travel Points: ${sum}`);
// }
