function cutandReverse(input) {
  let newline = input.split("").reverse("").join("");
  let firstHalf = newline.substr(0, input.length / 2);
  let secondHalf = newline.substr(input.length / 2, input.length);
  console.log(secondHalf);
  console.log(firstHalf);
}

cutandReverse("tluciffiDsIsihTgnizamAoSsIsihT");
cutandReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");

// function cutandReverse(input) {
//   let newline = input.split("").reverse("").join("");
//   let firstHalf = newline.slice(newline.length / 2);
//   let secondHalf = newline.slice(0, newline.length / 2);
//   console.log(firstHalf);
//   console.log(secondHalf);
// }
//----------------------------------------------------
// function cutandReverse(input) {
//   let firstHalf = input
//     .split("")
//     .slice(0, input.length / 2)
//     .reverse()
//     .join("");
//   let secondHalf = input
//     .split("")
//     .slice(input.length / 2, input.length)
//     .reverse()
//     .join("");
//   console.log(firstHalf);
//   console.log(secondHalf);
// }
