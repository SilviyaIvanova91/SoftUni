function partyTime(input) {
  let viplist = [];
  let otherList = [];

  while (input[0] !== "PARTY") {
    let guest = input.shift();
    if (Number.isNaN(Number(guest[0]))) {
      otherList.push(guest);
    } else {
      viplist.push(guest);
    }
  }
  for (let guest of input) {
    if (viplist.includes(guest)) {
      viplist.splice(viplist.indexOf(guest), 1);
    } else if (otherList.includes(guest)) {
      otherList.splice(otherList.indexOf(guest), 1);
    }
  }

  console.log(viplist.length + otherList.length);
  for (let guest of viplist) {
    console.log(guest);
  }
  for (let guest of otherList) {
    console.log(guest);
  }
}

partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);

//-----------------------------------------
// function partyTime(input) {
//   let viplist = [];
//   let otherList = [];
//   let isParty = false;
//   for (let line of input) {
//     if (line == "PARTY") {
//       isParty = true;
//       continue;
//     }
//     let firstChar = line[0];
//     if (!isParty) {
//       if (isNaN(firstChar)) {
//         otherList.push(line);
//       } else {
//         viplist.push(line);
//       }
//     } else {
//       if (isNaN(firstChar)) {
//         let index = otherList.indexOf(line);
//         otherList.splice(index, 1);
//       } else {
//         let index = viplist.indexOf(line);
//         viplist.splice(index, 1);
//       }
//     }
//   }
//   console.log(viplist.length + otherList.length);
//   for (let guest of viplist) {
//     console.log(guest);
//   }
//   for (let guest of otherList) {
//     console.log(guest);
//   }
// }

//-----------------------------------------
// function partyTime(input) {
//     let viplist = new Set();
//     let otherList = new Set();

//     while (input[0] !== "PARTY") {
//       let guest = input.shift();
//       if (Number.isNaN(Number(guest[0]))) {
//         otherList.add(guest);
//       } else {
//         viplist.add(guest);
//       }
//     }
//     for (let guest of input) {
//       viplist.delete(guest);
//       otherList.delete(guest);
//     }

//     console.log(viplist.size + otherList.size);
//     for (let guest of viplist) {
//       console.log(guest);
//     }
//     for (let guest of otherList) {
//       console.log(guest);
//     }
// }

//-----------------------------------------
// function partyTime(input) {
//     let viplist = new Set();
//     let otherList = new Set();
//     let otherHalf = 0;

//     for (let i = 0; input[i] !== "PARTY"; i++) {
//       if (input[i] == Number) {
//         viplist.add(input[i]);
//       } else {
//         otherList.add(input[i]);
//       }

//       otherHalf = i;
//     }
//     for (let i = otherHalf + 2; i < input.length; i++) {
//       if (viplist.has(input[i])) {
//         viplist.delete(input[i]);
//       } else if (otherList.has(input[i])) {
//         otherList.delete(input[i]);
//       }
//     }
//     let resFirst = Array.from(viplist);
//     let resSec = Array.from(otherList);
//     console.log(Number(resFirst.length) + Number(resSec.length));
//     for (let guest of resFirst) {
//       console.log(guest);
//     }
//     for (let guest of resSec) {
//       console.log(guest);
//     }
//   }
