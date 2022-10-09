function processOddNumbers(arr) {
  console.log(
    arr
      .filter((x, i) => i % 2 == 1)
      .map((x) => x * 2)
      .reverse()
      .join(" ")
  );
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);

//----------------------------------------
// (arr) =>
//   arr
//     .filter((x, i) => i % 2 == 1)
//     .map((x) => x * 2)
//     .reverse()
//     .join(" ");

//----------------------------------------------
// function processOddNumbers(arr) {
//     let filtered = arr.filter((x, i) => i % 2 == 1);
//     let double = filtered.map((x) => x * 2);
//     let res = double.reverse();
//     console.log(res.join(" "));
//   }
