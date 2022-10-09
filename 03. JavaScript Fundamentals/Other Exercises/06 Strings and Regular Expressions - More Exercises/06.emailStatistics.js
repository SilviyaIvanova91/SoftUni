function emailStatistics(input) {
  let num = Number(input.shift());
  let listEmail = {};
  for (let i = 0; i < num; i++) {
    let regexp =
      /((?<name>[A-Za-z]{5,})@(?<domain>([a-z]{3,})(\.com|\.bg|\.org)$))/g;
    let matches = regexp.exec(input[i]);
    if (matches != null) {
      let name = matches.groups.name;
      let domain = matches.groups.domain;
      if (!listEmail.hasOwnProperty(domain)) {
        listEmail[domain] = [];
      }
      if (!listEmail[domain].includes(name)) {
        listEmail[domain].push(name);
      }
      matches = regexp.exec(input);
    }
  }
  let sorted = Object.entries(listEmail).sort(
    (a, b) => b[1].length - a[1].length
  );

  for (let [mail, names] of sorted) {
    console.log(`${mail}:`);
    for (let name of names) {
      console.log(`### ${name}`);
    }
  }
}

emailStatistics([
  "5",
  "Pesho@abv.bg",
  "JohnDowe@gmail.com",
  "Maria@gmail.com",
  "invalid123@dir.bg",
  "nakov@yahoo.com",
]);
emailStatistics([
  "5",
  "Georgi@abv.bg",
  "Petran@gmail.com",
  "Vladi@gmail.com",
  "super_man@abv.bg",
  "superMan@abv.bg",
]);

//---------------------------------
// function emailStatistics(input) {
//   let num = Number(input.shift());
//   input = input.slice(0, num);
//   let obj = {};
//   let pattern =
//   /((?<name>[A-Za-z]{5,})@(?<domain>([a-z]{3,})(\.com|\.bg|\.org)$))/g;
//   for (let el of input) {
//     if (el.match(pattern)) {
//       let valid = pattern.exec(el);
//       if (valid !== null) {
//         obj.hasOwnProperty(valid.groups.domain)
//           ? obj[valid.groups.domain].add(valid.groups.name)
//           : (obj[valid.groups.domain] = new Set().add(valid.groups.name));
//       }
//     }
//   }
//   let sorted = Object.entries(obj).sort(([aA, bA], [Ab, bB]) => {
//     return Array.from(bB).length - Array.from(bA).length;
//   });

//   for (let el of sorted) {
//     console.log(`${el[0]}:`);
//     let users = Array.from(el[1]);
//     for (let name of users) {
//       console.log(`### ${name}`);
//     }
//   }
// }
