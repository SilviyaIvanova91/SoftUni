function solve() {
  let firstInfo = document.getElementById("text").value;
  let type = document.getElementById("naming-convention").value;

  let res = "";
  let words = firstInfo.split(" ");

  if (type == "Camel Case") {
    for (let i = 0; i < words.length; i++) {
      if (i == 0) {
        res += words[i].toLowerCase();
      } else {
        res += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
      }
    }
  } else if (type == "Pascal Case") {
    for (let i = 0; i < words.length; i++) {
      res += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
  } else {
    return (document.getElementById("result").textContent = "Error!");
  }
  document.getElementById("result").textContent = res;
}

//---------------------------------------------------
// function solve() {
//   let firstInfo = document.getElementById("text").value;
//   let type = document.getElementById("naming-convention").value;

//   let res = "";
//   let words = firstInfo.split(/(\s+)/).filter(x => x != ' ');

//   if (type == "Camel Case") {
//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i].toLowerCase();
//       if (i != 0) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
//       }
//     }
//   } else if (type == "Pascal Case") {
//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i].toLowerCase();
//       words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
//     }
//   } else {
//     return (document.getElementById("result").textContent = "Error!");
//   }
//   res = words.join("");
//   document.getElementById("result").textContent = res;
// }

//---------------------20%---------------------
// function solve() {
//   let firstInfo = document.getElementById("text").value;
//   let type = document.getElementById("naming-convention").value;

//   let res = "";
//   let words = firstInfo.split(" ");

//   if (type != "Camel Case" && type != "Pascal Case") {
//     return (document.getElementById("result").textContent = "Error!");
//   }

//   for (let i = 0; i < words.length; i++) {
//     res += words[i].toLowerCase();
//     if (i == 0 || type == "Pascal Case") {
//       res += words[i][0].toUpperCase() + words[i].slice(1);
//     }
//   }
//   document.getElementById("result").textContent = res;
// }
