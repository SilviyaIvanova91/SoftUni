function reversedChars(num1, num2, num3) {
  let all = num1 + " " + num2 + " " + num3;
  all = all.split("");
  all = all.reverse();
  all = all.join("");
  console.log(all);
}

reversedChars("A", "B", "C");
reversedChars("1", "L", "&");

//---------------------------------------------------
// function reversedChars(num1, num2, num3) {
//     console.log(`${num3} ${num2} ${num1}`);
//   }
