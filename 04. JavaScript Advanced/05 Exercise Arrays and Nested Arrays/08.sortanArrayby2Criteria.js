function sortanArrayby2Criteria(arr) {
  console.log(
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).join("\n")
  );
}

sortanArrayby2Criteria(["alpha", "beta", "gamma"]);
sortanArrayby2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortanArrayby2Criteria(["test", "Deny", "omen", "Default"]);

//------------------------------------------
// function sortanArrayby2Criteria(arr) {
//   arr.sort(twoCriteries);
//   return arr.join("\n");
//   function twoCriteries(curr, next) {
//     if (curr.length == next.length) {
//       return curr.localeCompare(next);
//     }
//     return curr.length - next.length;
//   }
// }
