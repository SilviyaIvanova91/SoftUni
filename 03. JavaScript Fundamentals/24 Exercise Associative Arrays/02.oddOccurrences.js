//--------решение с Map()-----------
function oddOccurrences(input) {
  let words = input.split(" ");
  let res = new Map();
  let output = [];
  for (let word of words) {
    word = word.toLowerCase();
    if (res.has(word)) {
      let newValue = res.get(word) + 1;
      res.set(word, newValue);
    } else {
      res.set(word, 1);
    }
  }

  // let filterRes = Array.from(res).filter(([key, value]) => {
  //   return value % 2 !== 0;
  // });

  for (let [name, value] of res.entries()) {
    if (value % 2 == 1) {
      output.push(name);
    }
  }
  console.log(output.join(" "));
}

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");

//---------------------------------------------------------
// function oddOccurrences(input) {
//   let words = input.split(" ");
//   let res = {};
//   for (let word of words) {
//     word = word.toLocaleLowerCase();
//     if (res.hasOwnProperty(word)) {
//       res[word]++;
//     } else {
//       res[word] = 1;
//     }
//   }

//   //*-------- първи вариант
//   let output = [];
//   for (let word in res) {
//     if (res[word] % 2 == 1) {
//       output.push(word);
//     }
//   }
//   console.log(output.join(" "));
//   //---------------------*//

//   /*      ------- втори вариант
//   let filtered = Object.entries(res)
//     .filter(([word, count]) => count % 2 == 1)
//     .map((entry) => entry[0])
//     .join(" ");
//   console.log(filtered);
//   */
// }

//---------------------------------------------------------
// function oddOccurrences(input) {
//     let words = input.split(" ");
//     let res = {};
//     for (let word of words) {
//       word = word.toLocaleLowerCase();
//       if (res.hasOwnProperty(word)) {
//         res[word]++;
//       } else {
//         res[word] = 1;
//       }
//     }
//     let filtered = Object.entries(res).filter(([word, count]) => {
//       if (count % 2 == 1) {
//         return true;
//       } else {
//         return false;
//       }
//     });
//     console.log(filtered.map((entry) => entry[0]).join(" "));
//   }
