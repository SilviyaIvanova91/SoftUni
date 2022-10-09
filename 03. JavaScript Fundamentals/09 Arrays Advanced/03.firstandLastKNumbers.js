function firstandLastKNumbers(arr) {
  let k = arr.shift(); //вади първия елемнт и го оставя в "к"

  let firstArr = arr.slice(0, k);
  let ednArr = arr.slice(-k);
  console.log(firstArr.join(" "));
  console.log(ednArr.join(" "));
}

firstandLastKNumbers([2, 7, 8, 9]);
firstandLastKNumbers([3, 6, 7, 8, 9]);
