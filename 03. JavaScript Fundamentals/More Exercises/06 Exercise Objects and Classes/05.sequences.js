function sequences(input) {
  let result = [];

  for (let row of input) {
    let arr = JSON.parse(row);
    arr = arr.sort((a, b) => b - a);
    let arrAsString = JSON.stringify(arr);
    if (!result.includes(arrAsString)) {
      result.push(arrAsString);
    }
  }
  let res = result
    .map((x) => JSON.parse(x))
    .sort((a, b) => a.length - b.length)
    .forEach((x) => {
      let formattedText = `[${x.join(", ")}]`;
      console.log(formattedText);
    });
  // for(let row of res){
  //     console.log(row, row.length)
  //     // let formattedText = `[${row.join(", ")}]`
  //     // console.log(formattedText)
  // }
}

sequences([
  "[-3, -2, -1, 0, 1, 2, 3, 4]",
  "[10, 1, -17, 0, 2, 13]",
  "[4, -3, 3, -2, 2, -1, 1, 0]",
]);
sequences([
  "[7.14, 7.180, 7.339, 80.099]",
  "[7.339, 80.0990, 7.140000, 7.18]",
  "[7.339, 7.180, 7.14, 80.099]",
]);
